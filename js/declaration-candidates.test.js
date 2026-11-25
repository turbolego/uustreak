const assert = require('node:assert/strict');
const { test } = require('node:test');
const { buildReport, websiteFromDeclaration } = require('./declaration-candidates');

test('extracts the declared website, not other links on the page', () => {
    assert.equal(websiteFromDeclaration(`
        <link rel="canonical" href="https://uustatus.no/nn/erklaringer/publisert/example">
        <div class="statement-actions"><a href="https://wrong.no/">Other link</a></div>
        <div class="statement-box--values">
            <dl><dt>Namn på nettstaden:</dt><dd>Example</dd></dl>
            <dl><dt>Denne erklæringa gjeld nettstaden:</dt>
            <dd><a href="https://example.no/path?a=1&amp;b=2">Website</a></dd></dl>
        </div>
    `), 'https://example.no/path?a=1&b=2');
    assert.equal(websiteFromDeclaration('<a href="https://example.no/">Other link</a>'), null);
    assert.equal(websiteFromDeclaration(`<div class='other statement-box--values extra'>
        <dl><dt>Denne erklæringen gjelder nettstedet:</dt>
        <dd><a href='https://example.no/&#112;ath'>Website</a></dd></dl></div>`), 'https://example.no/path');
    assert.equal(websiteFromDeclaration('<div class="statement-box--values"><dd><a href="javascript:alert(1)">Invalid</a></dd></div>'), null);
    assert.equal(websiteFromDeclaration(`<div class="statement-box--values">
        <dl><dt>Denne erklæringa gjeld appen:</dt>
        <dd><a href="https://apps.apple.com/example">App</a></dd></dl></div>`), null);
});

test('counts unmatched organizations separately from candidate declarations and links', () => {
    const projects = [
        { organisasjonsnummer: '123456789', baseURL: 'https://existing.no/' },
        { baseURL: 'https://www.duplicate.no/' },
    ];
    const items = [
        { id: 'matched', orgNumber: '123 456 789', siteName: 'same organization, other site' },
        { id: 'duplicate', orgNumber: '987 654 321', siteName: 'Already listed' },
        { id: 'verified', orgNumber: '987 654 321', siteName: 'New service' },
        { id: 'hint', orgNumber: '987 654 321', siteName: 'www.duplicate.no' },
        { id: 'unresolved', orgNumber: '222 222 222', siteName: 'Unresolved service' },
    ];
    const report = buildReport(items, projects, {
        duplicate: { baseURL: 'https://duplicate.no' },
        verified: { baseURL: 'https://example.no/service/' },
    });
    assert.equal(report.summary.matchedOrganization, 1);
    assert.equal(report.summary.unmatchedOrganization, 4);
    assert.equal(report.summary.unmatchedOrganizations, 2);
    assert.equal(report.summary.alreadyListedUrl, 1);
    assert.deepEqual(report.candidates.map(item => [
        item.name, item.baseURL, item.baseURLHint, item.possiblyAlreadyListed,
    ]), [
        ['New service', 'https://example.no/service/', null, false],
        ['www.duplicate.no', null, 'https://www.duplicate.no', true],
        ['Unresolved service', null, null, false],
    ]);
});
