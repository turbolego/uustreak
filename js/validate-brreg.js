const fs = require('node:fs/promises');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { createInterface } = require('node:readline');
const { once } = require('node:events');
const { parseArgs } = require('node:util');
const { forenklaKontrollUrlKey: urlKey } = require('./forenkla-kontroll');

const nameKey = name => String(name ?? '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('nb-NO');

async function* registryRecords(file) {
    const process = spawn('jq', [
        '--stream', '--compact-output', '--null-input',
        'fromstream(1|truncate_stream(inputs)) | {organisasjonsnummer,navn,hjemmeside,slettedato,konkurs}',
        file,
    ], { stdio: ['ignore', 'pipe', 'pipe'] });
    const closed = once(process, 'close');
    let errors = '';
    process.stderr.on('data', chunk => { errors = (errors + chunk).slice(-4000); });
    try {
        for await (const line of createInterface({ input: process.stdout, crlfDelay: Infinity })) {
            yield JSON.parse(line);
        }
        const [code] = await closed;
        if (code !== 0) throw new Error(`Registry scan failed (${code}): ${errors}`);
    } finally {
        if (process.exitCode === null) process.kill();
    }
}

function assessProject(project, records) {
    if (project.organisasjonsnummer) {
        const existing = records.filter(record => record.organisasjonsnummer === project.organisasjonsnummer);
        if (existing.length !== 1) return { status: 'number-not-found', candidates: existing };
        const [record] = existing;
        return {
            status: record.slettedato ? 'deleted' : 'found',
            nameMatches: nameKey(project.organisasjonsnamn) === nameKey(record.navn),
            homepageMatches: record.hjemmeside ? urlKey(project.baseURL) === urlKey(record.hjemmeside) : null,
            candidates: existing,
        };
    }
    const candidates = records.filter(record =>
        nameKey(project.organisasjonsnamn || project.name) === nameKey(record.navn) ||
        (urlKey(record.hjemmeside) !== null && urlKey(project.baseURL) === urlKey(record.hjemmeside)));
    const confirmed = candidates.filter(record =>
        !record.slettedato && !record.konkurs &&
        nameKey(project.organisasjonsnamn || project.name) === nameKey(record.navn) &&
        urlKey(record.hjemmeside) !== null && urlKey(project.baseURL) === urlKey(record.hjemmeside));
    return {
        status: confirmed.length === 1 ? 'confirmed' : candidates.length ? 'review' : 'unmatched',
        candidates,
        confirmed: confirmed.length === 1 ? confirmed[0] : null,
    };
}

async function main() {
    const { values, positionals } = parseArgs({
        allowPositionals: true, options: { apply: { type: 'boolean', default: false } },
    });
    if (positionals.length !== 2) throw new Error('Usage: node js/validate-brreg.js <enheter_alle.json> <report.json> [--apply]');
    const [registryFile, output] = positionals;
    const projectFile = path.join(__dirname, '../projects.json');
    if ([registryFile, projectFile].some(file => path.resolve(file) === path.resolve(output))) {
        throw new Error('The report must not overwrite an input file');
    }
    const original = await fs.readFile(projectFile, 'utf8');
    const projects = JSON.parse(original);
    const numbers = new Set(projects.map(project => project.organisasjonsnummer).filter(Boolean));
    const names = new Set(projects.map(project => nameKey(project.organisasjonsnamn || project.name)));
    const urls = new Set(projects.map(project => urlKey(project.baseURL)));
    const records = [];
    let scanned = 0;
    for await (const record of registryRecords(registryFile)) {
        scanned++;
        if (numbers.has(record.organisasjonsnummer) || names.has(nameKey(record.navn)) ||
            (urlKey(record.hjemmeside) !== null && urls.has(urlKey(record.hjemmeside)))) {
            records.push(record);
        }
    }
    if (!scanned) throw new Error('No registry records found');
    const results = projects.map(project => ({
        name: project.name, baseURL: project.baseURL,
        organisasjonsnummer: project.organisasjonsnummer ?? null,
        organisasjonsnamn: project.organisasjonsnamn ?? null,
        ...assessProject(project, records),
    }));
    const summary = Object.fromEntries([...Map.groupBy(results, result => result.status)].map(([key, group]) => [key, group.length]));
    await fs.writeFile(output, `${JSON.stringify({
        registryFile, scanned, applied: values.apply, summary, results,
    }, null, 2)}\n`);
    if (values.apply) {
        if (await fs.readFile(projectFile, 'utf8') !== original) throw new Error('Project file changed during validation');
        results.forEach((result, index) => {
            if (result.status !== 'confirmed') return;
            projects[index].organisasjonsnamn = result.confirmed.navn;
            projects[index].organisasjonsnummer = result.confirmed.organisasjonsnummer;
        });
        await fs.writeFile(projectFile, `${JSON.stringify(projects, null, 2)}\n`);
    }
    console.log({ scanned, applied: values.apply, ...summary, report: output });
}

if (require.main === module) {
    main().catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = { registryRecords, assessProject };
