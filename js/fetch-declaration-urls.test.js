const assert = require('node:assert/strict');
const { test } = require('node:test');
const { fetchDeclarationUrls } = require('./fetch-declaration-urls');

test('preserves records, resumes successful lookups, and retries failures within the limit', async () => {
    const items = ['cached', 'retry', 'pending'].map(id => ({ id, url: `https://example.no/${id}`, orgNumber: '123 456 789' }));
    const previous = [
        { ...items[0], baseURL: 'https://cached.no/' },
        { ...items[1], baseURL: null, lookupError: 'HTTP 404' },
    ];
    const called = [];
    let saved;
    const { results, fetched } = await fetchDeclarationUrls(items, previous, {
        limit: 1, delayMs: 0,
        lookup: async item => { called.push(item.id); return { baseURL: 'https://retry.no/' }; },
        save: async records => { saved = structuredClone(records); },
    });
    assert.deepEqual(called, ['retry']);
    assert.equal(fetched, 1);
    assert.equal(results[1].baseURL, 'https://retry.no/');
    assert.equal(results[1].lookupError, null);
    assert.equal(results[2].baseURL, null);
    assert.deepEqual(results.map(({ baseURL, baseURLSource, lookupError, ...record }) => record), items);
    assert.deepEqual(saved, results);
});

test('uses URL-shaped site names, including Unicode domains, and limits concurrent requests', async () => {
    let active = 0;
    let peak = 0;
    const { results, fetched } = await fetchDeclarationUrls([
        { url: 'https://example.no/a', siteName: 'godtjenestestøtte.no' },
        ...['b', 'c', 'd'].map(id => ({ url: `https://example.no/${id}`, siteName: `Service ${id}` })),
    ], [], {
        useSiteName: true, concurrency: 2, delayMs: 0,
        lookup: async () => {
            active++;
            peak = Math.max(peak, active);
            await new Promise(resolve => setTimeout(resolve, 5));
            active--;
            return { baseURL: 'https://resolved.no/' };
        },
        save: async () => {},
    });
    assert.equal(results[0].baseURL, 'https://godtjenestestøtte.no');
    assert.equal(results[0].baseURLSource, 'siteName');
    assert.equal(fetched, 3);
    assert.equal(peak, 2);
});

test('reports individual errors and checkpoints progress if the server stops the crawl', async () => {
    let saved;
    const items = [{ url: 'https://example.no/first' }, { url: 'https://example.no/second' }];
    const warnings = [];
    await assert.rejects(fetchDeclarationUrls(items, [], {
        delayMs: 0,
        lookup: async item => {
            if (item.url.endsWith('first')) return { error: 'No HTTP(S) website link on the declaration' };
            throw new Error('HTTP 429; stopping lookups');
        },
        warn: message => warnings.push(message),
        save: async records => { saved = structuredClone(records); },
    }), /HTTP 429/);
    assert.equal(warnings.length, 1);
    assert.equal(saved[0].lookupError, 'No HTTP(S) website link on the declaration');
    assert.equal(saved[1].baseURL, null);
});
