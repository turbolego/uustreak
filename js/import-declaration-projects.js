const fs = require('node:fs/promises');
const path = require('node:path');
const { parseArgs } = require('node:util');
const { forenklaKontrollUrlKey: urlKey } = require('./forenkla-kontroll');

function websiteURL(value) {
    if (typeof value !== 'string' || !URL.canParse(value)) return null;
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || !urlKey(value)) return null;
    url.hash = '';
    return url.href.replaceAll("'", '%27');
}

function projectName(value) {
    let name = String(value).normalize('NFC').replace(/[<>:"/\\|?*\u0000-\u001f]/g, ' - ').replace(/\s+/g, ' ').trim();
    while (Buffer.byteLength(name, 'utf8') > 180) name = [...name].slice(0, -1).join('');
    return name || 'Nettsted';
}

const filenameKey = name => name.replaceAll(' ', '_').normalize('NFD').toLocaleLowerCase('nb-NO');

function planImport(projects, declarations) {
    const knownURLs = new Set(projects.map(project => urlKey(project.baseURL)));
    const filenames = new Set(projects.map(project => filenameKey(project.name)));
    const grouped = new Map();
    const skipped = [];
    for (const declaration of declarations) {
        const baseURL = websiteURL(declaration.baseURL);
        const organization = String(declaration.orgNumber ?? '').replace(/\s/g, '');
        if (!baseURL || !/^\d{9}$/.test(organization) || !declaration.orgName?.trim()) {
            skipped.push({ declaration, reason: declaration.lookupError || 'Missing valid website URL or organization metadata' });
            continue;
        }
        const key = urlKey(baseURL);
        if (knownURLs.has(key)) {
            skipped.push({ declaration, reason: 'Website already in projects.json' });
            continue;
        }
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key).push({ declaration, baseURL, organization });
    }
    const added = [];
    const sources = [];
    for (const group of grouped.values()) {
        if (new Set(group.map(item => item.organization)).size !== 1) {
            skipped.push(...group.map(({ declaration }) => ({
                declaration, reason: 'Same website declared by multiple organizations; manual review required',
            })));
            continue;
        }
        group.sort((a, b) => String(b.declaration.lastUpdated ?? '').localeCompare(String(a.declaration.lastUpdated ?? '')));
        const [{ declaration, baseURL, organization }] = group;
        const label = projectName(declaration.siteName || new URL(baseURL).hostname);
        let name = label;
        if (filenames.has(filenameKey(name))) name = `${label} (${organization})`;
        for (let suffix = 2; filenames.has(filenameKey(name)); suffix++) {
            name = `${label} (${organization}-${suffix})`;
        }
        filenames.add(filenameKey(name));
        added.push({
            name,
            Samfunnsområde: 'Offentleg sektor',
            baseURL,
            achievements: [],
            organisasjonsnamn: declaration.orgName.trim(),
            organisasjonsnummer: organization,
        });
        sources.push({ name, baseURL, declarationURL: declaration.url, source: declaration.baseURLSource });
        skipped.push(...group.slice(1).map(({ declaration }) => ({ declaration, reason: 'Duplicate website for the same organization' })));
    }
    return { added, sources, skipped };
}

async function main() {
    const { values, positionals } = parseArgs({
        allowPositionals: true, options: { apply: { type: 'boolean', default: false } },
    });
    if (positionals.length !== 2) throw new Error('Usage: node js/import-declaration-projects.js <resolved.json> <report.json> [--apply]');
    const [input, output] = positionals;
    const projectFile = path.join(__dirname, '../projects.json');
    if ([input, projectFile].some(file => path.resolve(file) === path.resolve(output))) {
        throw new Error('Report output must not overwrite an input file');
    }
    const original = await fs.readFile(projectFile, 'utf8');
    const projects = JSON.parse(original);
    const declarations = JSON.parse(await fs.readFile(input, 'utf8'));
    const plan = planImport(projects, declarations);
    const summary = { input: declarations.length, existingProjects: projects.length, added: plan.added.length, skipped: plan.skipped.length };
    if (values.apply) {
        if (await fs.readFile(projectFile, 'utf8') !== original) throw new Error('Project file changed during import');
        await fs.writeFile(projectFile, `${JSON.stringify([...projects, ...plan.added], null, 2)}\n`);
    }
    await fs.writeFile(output, `${JSON.stringify({ applied: values.apply, summary, ...plan }, null, 2)}\n`);
    console.log(summary);
}

if (require.main === module) {
    main().catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = { planImport };
