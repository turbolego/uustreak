const fs = require('node:fs/promises');
const path = require('node:path');
const { parseArgs } = require('node:util');
const { setTimeout: delay } = require('node:timers/promises');
const { forenklaKontrollUrlKey: urlKey } = require('./forenkla-kontroll');

const publicDeclaration = /^https:\/\/uustatus\.no\/(?:nn|nb)\/erklaringer\/publisert\/[a-f0-9-]{36}$/i;
const orgNumber = value => String(value ?? '').replace(/\s/g, '');

function websiteFromDeclaration(html) {
    const section = html.match(/<div\b[^>]*\bclass\s*=\s*["'][^"']*\bstatement-box--values\b[^"']*["'][^>]*>([\s\S]*?)<\/div\s*>/i)?.[1];
    const websiteField = [...(section?.matchAll(/<dl\b[^>]*>([\s\S]*?)<\/dl\s*>/gi) ?? [])]
        .map(match => match[1])
        .find(field => /<dt\b[^>]*>\s*Denne erkl(?:æringa gjeld nettstaden|æringen gjelder nettstedet)\s*:\s*<\/dt>/i.test(field));
    const href = websiteField?.match(/<dd\b[^>]*>\s*<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1/i)?.[2];
    if (!href) return null;
    const entities = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };
    const website = href.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (entity, value) => {
        if (!value.startsWith('#')) return entities[value.toLowerCase()];
        const code = value[1].toLowerCase() === 'x' ? parseInt(value.slice(2), 16) : Number(value.slice(1));
        return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
    }).trim();
    return /^https?:\/\//i.test(website) && urlKey(website) ? website : null;
}

function websiteHint(siteName) {
    const label = siteName?.trim();
    if (!label || !/^(?:https?:\/\/)?[\p{L}\d.-]+\.[\p{L}]{2,}(?::\d+)?(?:[/?#]\S*)?$/iu.test(label) || !urlKey(label)) {
        return null;
    }
    return /^https?:\/\//i.test(label) ? label : `https://${label}`;
}

function buildReport(items, projects, lookups) {
    const knownOrgs = new Set(projects.map(project => orgNumber(project.organisasjonsnummer)).filter(Boolean));
    const knownUrls = new Set(projects.map(project => urlKey(project.baseURL)));
    const summary = {
        declarations: items.length,
        organizations: new Set(items.map(item => orgNumber(item.orgNumber))).size,
        projectsWithoutOrganization: projects.filter(project => !project.organisasjonsnummer).length,
        matchedOrganization: 0,
        unmatchedOrganization: 0,
        unmatchedOrganizations: 0,
        alreadyListedUrl: 0,
        possibleExistingUrl: 0,
        candidates: 0,
        verifiedCandidateUrls: 0,
        candidateUrlHints: 0,
        unresolvedCandidates: 0,
    };
    const unmatchedOrgs = new Set();
    const candidates = [];
    for (const item of items) {
        const organisasjonsnummer = orgNumber(item.orgNumber);
        if (!/^\d{9}$/.test(organisasjonsnummer)) throw new Error(`Invalid orgNumber for ${item.id}`);
        if (knownOrgs.has(organisasjonsnummer)) {
            summary.matchedOrganization++;
            continue;
        }
        summary.unmatchedOrganization++;
        unmatchedOrgs.add(organisasjonsnummer);
        const lookup = lookups[item.id];
        const baseURL = lookup?.baseURL ?? null;
        const baseURLHint = baseURL ? null : websiteHint(item.siteName);
        if (baseURL && knownUrls.has(urlKey(baseURL))) {
            summary.alreadyListedUrl++;
            continue;
        }
        const possiblyAlreadyListed = Boolean(baseURLHint && knownUrls.has(urlKey(baseURLHint)));
        if (possiblyAlreadyListed) summary.possibleExistingUrl++;
        if (baseURL) summary.verifiedCandidateUrls++;
        else if (baseURLHint) summary.candidateUrlHints++;
        else summary.unresolvedCandidates++;
        candidates.push({
            name: item.siteName,
            organisasjonsnamn: item.orgName,
            organisasjonsnummer,
            baseURL,
            baseURLHint,
            possiblyAlreadyListed,
            declarationURL: item.url,
            declarationStatus: item.status,
            visits365: item.visits365,
            lastUpdated: item.lastUpdated,
            lookupError: lookup?.error ?? null,
        });
    }
    summary.unmatchedOrganizations = unmatchedOrgs.size;
    summary.candidates = candidates.length;
    return { summary, candidates, lookups };
}

async function lookupWebsite(item) {
    if (!publicDeclaration.test(item.url)) return { error: 'Unexpected public declaration URL' };
    const response = await fetch(item.url, {
        redirect: 'manual',
        signal: AbortSignal.timeout(10000),
        headers: { 'User-Agent': 'UUStreak declaration URL lookup' },
    });
    if (response.status === 429 || response.status >= 500) {
        throw new Error(`HTTP ${response.status}; stopping lookups`);
    }
    if (!response.ok) return { error: `HTTP ${response.status}` };
    const baseURL = websiteFromDeclaration(await response.text());
    return baseURL ? { baseURL } : { error: 'No HTTP(S) website link on the declaration' };
}

async function main() {
    const { values, positionals } = parseArgs({
        allowPositionals: true,
        options: { 'fetch-limit': { type: 'string', default: '0' } },
    });
    const [snapshotPath, outputPath] = positionals;
    const fetchLimit = Number(values['fetch-limit']);
    if (positionals.length !== 2 || !Number.isSafeInteger(fetchLimit) || fetchLimit < 0) {
        throw new Error('Usage: node js/declaration-candidates.js <snapshot.json> <output.json> [--fetch-limit N]');
    }
    const snapshot = JSON.parse(await fs.readFile(snapshotPath, 'utf8'));
    const projects = JSON.parse(await fs.readFile(path.join(__dirname, '../projects.json'), 'utf8'));
    if (snapshot.items.length !== snapshot.totalMatched) throw new Error('The declaration snapshot is incomplete');
    const lookups = Object.create(null);
    try {
        const previous = JSON.parse(await fs.readFile(outputPath, 'utf8'));
        if (!previous.lookups) throw new Error('Refusing to overwrite an unrelated JSON file');
        if (previous.snapshotUpdatedAt === snapshot.cacheUpdatedAt) Object.assign(lookups, previous.lookups);
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
    }
    const items = snapshot.items.toSorted((a, b) => b.visits365 - a.visits365);
    const knownOrgs = new Set(projects.map(project => orgNumber(project.organisasjonsnummer)).filter(Boolean));
    const pending = items.filter(item => !lookups[item.id]);
    pending.sort((a, b) => Number(knownOrgs.has(orgNumber(a.orgNumber))) - Number(knownOrgs.has(orgNumber(b.orgNumber))));
    let lookupFailure;
    for (const item of pending.slice(0, fetchLimit)) {
        try {
            lookups[item.id] = await lookupWebsite(item);
        } catch (error) {
            lookupFailure = error;
            break;
        }
        if (lookups[item.id].error) console.warn(`${item.url}: ${lookups[item.id].error}`);
        await delay(500);
    }
    const report = buildReport(items, projects, lookups);
    await fs.writeFile(outputPath, `${JSON.stringify({ snapshotUpdatedAt: snapshot.cacheUpdatedAt, ...report }, null, 2)}\n`);
    console.log(report.summary);
    if (lookupFailure) throw lookupFailure;
}

if (require.main === module) {
    main().catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = { buildReport, websiteFromDeclaration, websiteHint, lookupWebsite };
