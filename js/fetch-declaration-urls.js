const fs = require('node:fs/promises');
const path = require('node:path');
const { parseArgs } = require('node:util');
const { setTimeout: delay } = require('node:timers/promises');
const { lookupWebsite, websiteHint } = require('./declaration-candidates');

async function fetchDeclarationUrls(items, previous, {
    limit = Infinity, delayMs = 500, concurrency = 1, useSiteName = false,
    lookup = lookupWebsite, save, warn = console.warn,
} = {}) {
    const cache = new Map(previous.map(item => [item.url, item]));
    const results = items.map(item => {
        const cached = cache.get(item.url);
        const baseURL = cached?.baseURL ?? (useSiteName ? websiteHint(item.siteName) : null);
        return {
            ...item, baseURL,
            ...(baseURL ? { baseURLSource: cached?.baseURLSource ?? (cached?.baseURL ? 'declaration' : 'siteName') } : {}),
            lookupError: baseURL ? null : cached?.lookupError ?? null,
        };
    });
    let fetched = 0;
    let failed = false;
    let cursor = 0;
    let scheduled = 0;
    let nextStart = 0;
    let failure;
    let saveQueue = Promise.resolve();
    const checkpoint = () => {
        saveQueue = saveQueue.then(() => save(results));
        return saveQueue;
    };
    async function worker() {
        while (!failure && cursor < results.length && scheduled < limit) {
            const result = results[cursor++];
            if (result.baseURL) continue;
            scheduled++;
            const start = Math.max(Date.now(), nextStart);
            nextStart = start + delayMs;
            await delay(Math.max(0, start - Date.now()));
            if (failure) return;
            try {
                const lookupResult = await lookup(result);
                fetched++;
                result.baseURL = lookupResult.baseURL ?? null;
                if (result.baseURL) result.baseURLSource = 'declaration';
                result.lookupError = lookupResult.error ?? null;
                if (result.lookupError) {
                    failed = true;
                    warn(`${result.url}: ${result.lookupError}`);
                }
                if (fetched % 25 === 0) await checkpoint();
            } catch (error) {
                failure = error;
            }
        }
    }
    try {
        await Promise.all(Array.from({ length: concurrency }, worker));
        if (failure) throw failure;
    } finally {
        await checkpoint();
    }
    return { results, fetched, failed };
}

async function main() {
    const { values, positionals } = parseArgs({
        allowPositionals: true,
        options: {
            limit: { type: 'string' },
            'use-site-name': { type: 'boolean', default: false },
            concurrency: { type: 'string', default: '1' },
            'delay-ms': { type: 'string', default: '500' },
        },
    });
    const [input = 'missing-projects-18112026.json', output = 'missing-projects-with-baseurls-18112026.json'] = positionals;
    const limit = values.limit === undefined ? Infinity : Number(values.limit);
    const concurrency = Number(values.concurrency);
    const delayMs = Number(values['delay-ms']);
    if (positionals.length > 2 || (limit !== Infinity && (!Number.isSafeInteger(limit) || limit < 0)) ||
        !Number.isSafeInteger(concurrency) || concurrency < 1 || concurrency > 4 ||
        !Number.isSafeInteger(delayMs) || delayMs < 0) {
        throw new Error('Usage: node js/fetch-declaration-urls.js [input.json] [output.json] [--limit N] [--use-site-name] [--concurrency 1-4] [--delay-ms N]');
    }
    if (path.resolve(input) === path.resolve(output)) throw new Error('Input and output must be different files');
    const items = JSON.parse(await fs.readFile(input, 'utf8'));
    if (!Array.isArray(items) || items.some(item => typeof item.url !== 'string')) {
        throw new Error('Input must be an array of declaration records with a url');
    }
    let previous = [];
    try {
        previous = JSON.parse(await fs.readFile(output, 'utf8'));
        if (!Array.isArray(previous) || previous.some(item => !Object.hasOwn(item, 'baseURL'))) {
            throw new Error('Refusing to overwrite an unrelated output file');
        }
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
    }
    const save = async results => {
        const temporary = `${output}.tmp`;
        await fs.writeFile(temporary, `${JSON.stringify(results, null, 2)}\n`);
        await fs.rename(temporary, output);
    };
    const { results, fetched, failed } = await fetchDeclarationUrls(items, previous, {
        limit, save, concurrency, delayMs, useSiteName: values['use-site-name'],
    });
    console.log({
        records: results.length,
        fetched,
        resolved: results.filter(item => item.baseURL).length,
        errors: results.filter(item => item.lookupError).length,
        output,
    });
    if (failed) process.exitCode = 1;
}

if (require.main === module) {
    main().catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = { fetchDeclarationUrls };
