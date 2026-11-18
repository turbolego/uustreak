const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { join } = require('node:path');
const { test } = require('node:test');
const projects = require('../projects.json');
const report = require('../forenkla_kontroll_2025.json');

const browser = vm.createContext({ URL });
vm.runInContext(fs.readFileSync(join(__dirname, 'forenkla-kontroll.js'), 'utf8'), browser);
const { forenklaKontrollUrlKey: key, indexForenklaKontrollScores: indexScores } = browser;

test('all 2025 scores match project URLs, including labels that require correction', () => {
    const scores = indexScores(report);
    const projectUrls = new Set(projects.map(project => key(project.baseURL)));
    assert.equal(scores.size, report.length);
    for (const url of scores.keys()) assert.ok(projectUrls.has(url), url);

    const amot = scores.get(key('https://www.amot.kommune.no/'));
    assert.equal(amot.score, 84);
    assert.equal(amot.reportUrl, 'https://kontroll.uutilsynet.no/base/resultat/rapport/fc39bbee4e58d76a/organisasjon/940152496');
    assert.equal(scores.get(key('http://www.abakus.as/')).score, 100);
    assert.equal(scores.get(key('http://www.abakus.as/')).reportUrl,
        'https://kontroll.uutilsynet.no/base/resultat/rapport/fc39bbee4e58d76a/organisasjon/983335543');
    assert.equal(scores.get(key('https://www.sporveien.no/')).score, 99);
    assert.equal(scores.get(key('https://bremanger.kommune.no/')).score, 82);
    assert.equal(scores.get(key('https://bygland.kommune.no/')).score, 91);
    assert.equal(scores.get(key('https://www.politiet.no/')), undefined);
});

test('keeps pages on the same host separate and preserves a real zero score', () => {
    const scores = indexScores([
        { loeysingNamn: 'example.com', score: 0 },
        { loeysingNamn: 'www.example.com/avdeling', score: 0.856 },
    ].map(row => ({ ...row, rapportId: 'fc39bbee4e58d76a', organisasjonsnummer: '940152496' })));
    assert.equal(scores.get(key('https://www.example.com/')).score, 0);
    assert.equal(scores.get(key('http://example.com/avdeling/')).score, 85);
    assert.equal(scores.get(key('https://example.com/annet/')), undefined);
});
