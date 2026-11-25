const assert = require('node:assert/strict');
const { test } = require('node:test');
const { planImport } = require('./import-declaration-projects');

const declaration = (overrides = {}) => ({
    siteName: 'Nytt nettsted', baseURL: 'https://example.no/',
    orgName: 'EXAMPLE KOMMUNE', orgNumber: '123 456 789',
    url: 'https://uustatus.no/nn/erklaringer/publisert/example',
    ...overrides,
});

test('imports Unicode URLs, deduplicates URL aliases, and preserves distinct pages', () => {
    const plan = planImport([{ name: 'Existing', baseURL: 'https://www.existing.no/' }], [
        declaration({ baseURL: 'http://existing.no' }),
        declaration({ baseURL: 'https://godtjenestestøtte.no', siteName: 'godtjenestestøtte.no' }),
        declaration({ baseURL: 'https://www.godtjenestestøtte.no/' }),
        declaration({ baseURL: 'https://godtjenestestøtte.no/service' }),
    ]);
    assert.equal(plan.added.length, 2);
    assert.equal(plan.skipped.length, 2);
    assert.equal(new URL(plan.added[0].baseURL).hostname, new URL('https://godtjenestestøtte.no').hostname);
    assert.equal(plan.added[0].organisasjonsnummer, '123456789');
    assert.deepEqual(plan.added[0].achievements, []);
});

test('does not assign shared websites to an arbitrary organization or import unresolved entries', () => {
    const plan = planImport([], [
        declaration(),
        declaration({ orgNumber: '987654321' }),
        declaration({ baseURL: null, lookupError: 'No website link' }),
        declaration({ baseURL: 'javascript:alert(1)' }),
    ]);
    assert.equal(plan.added.length, 0);
    assert.equal(plan.skipped.length, 4);
});

test('avoids unsafe or case-insensitively colliding generated filenames', () => {
    const plan = planImport([{ name: 'SERVICE', baseURL: 'https://old.no' }], [
        declaration({ siteName: 'service', baseURL: "https://example.no/page'one" }),
        declaration({ siteName: 'a/b:c', baseURL: 'https://example.no/two' }),
    ]);
    assert.equal(plan.added[0].name, 'service (123456789)');
    assert.ok(!plan.added[1].name.match(/[/:]/));
    assert.ok(plan.added[0].baseURL.includes('%27'));
});
