const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const vm = require('node:vm');
const { test } = require('node:test');
const { calculateStreakFromIndex, getLostStreakReason } = require('./track-achievements');

const project = 'Example AS';
const startDate = '2025-09-18';
const endDate = '2026-09-30';
const lostDate = '2026-10-01';
const reportFile = `accessibility-reports/${lostDate}/violations-${project}-${lostDate}T12-00-00_000Z-count-2.json`;
const reason = 'Page content: 2 violations found: Elements must meet minimum color contrast ratio thresholds (2)';
const report = {
    total_violations: 2,
    violations: [
        { help: 'Elements must meet minimum color contrast ratio thresholds', violation_count: 2 },
        { help: 'Not a violation', violation_count: 0 },
    ],
};

function writeJson(directory, file, data) {
    const target = path.join(directory, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, JSON.stringify(data));
}

for (const source of ['index', 'report-list']) {
    test(`tracker creates, backfills, and preserves loss reasons using ${source}`, t => {
        const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'uustreak-achievements-'));
        t.after(() => fs.rmSync(directory, { recursive: true }));
        const clearReports = [startDate, endDate].map(
            date => `accessibility-reports/${date}/violations-${project}-${date}T12-00-00_000Z-count-0.json`
        );
        writeJson(directory, 'historical-data/report-list.json', [...clearReports, reportFile]);
        if (source === 'index') {
            writeJson(directory, 'historical-data/streak-index.json', {
                [project]: { [startDate]: 0, [endDate]: 0, [lostDate]: 2 },
            });
        }
        writeJson(directory, reportFile, report);
        for (const existingReason of [undefined, null, 'Previously recorded reason']) {
            const achievements = existingReason === undefined ? [] : [{
                type: 'nobodys_perfect', fromDate: startDate, toDate: endDate,
                lostDate, streakDays: 378, lostReason: existingReason,
            }];
            writeJson(directory, 'projects.json', [{ name: project, achievements }]);
            const run = () => {
                const result = spawnSync(process.execPath, [path.join(__dirname, 'track-achievements.js')], {
                    cwd: directory, encoding: 'utf8',
                });
                assert.equal(result.status, 0, result.stderr);
                return JSON.parse(fs.readFileSync(path.join(directory, 'projects.json'), 'utf8'))[0];
            };
            const result = run();
            const lost = result.achievements.filter(a => a.type === 'nobodys_perfect');
            assert.equal(lost.length, 1);
            assert.equal(lost[0].lostDate, lostDate);
            assert.equal(lost[0].lostReason, existingReason || reason);
            assert.equal(lost[0].streakDays, 378);
            assert.deepEqual(run().achievements, result.achievements);
        }
    });
}

test('only streaks of at least 365 days receive a lost-streak achievement', () => {
    for (const [end, expected] of [['2026-09-16', 0], ['2026-09-17', 1]]) {
        const result = calculateStreakFromIndex(project, {
            [project]: { [startDate]: 0, [end]: 0, [lostDate]: 2 },
        });
        assert.equal(result.lostStreaks.length, expected);
    }
});

test('fetches missing report with an encoded path and summarizes at most three rules', async t => {
    t.mock.method(process, 'cwd', () => os.tmpdir());
    const previousBaseUrl = process.env.SITE_BASE_URL;
    process.env.SITE_BASE_URL = 'https://example.test/';
    t.after(() => {
        if (previousBaseUrl === undefined) delete process.env.SITE_BASE_URL;
        else process.env.SITE_BASE_URL = previousBaseUrl;
    });
    let requestedUrl;
    t.mock.method(globalThis, 'fetch', async url => {
        requestedUrl = url;
        return {
            ok: true,
            json: async () => ({
                total_violations: 4,
                violations: [1, 2, 3, 4].map(n => ({ help: `Rule ${n}`, violation_count: 1 })),
            }),
        };
    });
    const result = await getLostStreakReason(project, lostDate, [reportFile]);
    assert.equal(requestedUrl, `https://example.test/${reportFile.split('/').map(encodeURIComponent).join('/')}`);
    assert.equal(result, 'Page content: 4 violations found: Rule 1, Rule 2, Rule 3, and 1 more');
});

test('classifies embedded, page, and combined violation causes', async t => {
    const previousBaseUrl = process.env.SITE_BASE_URL;
    process.env.SITE_BASE_URL = 'https://example.test';
    t.after(() => {
        if (previousBaseUrl === undefined) delete process.env.SITE_BASE_URL;
        else process.env.SITE_BASE_URL = previousBaseUrl;
    });
    const cases = [
        {
            violations: [{ help: 'All page content should be contained by landmarks', nodes: [{ html: '<div id="onetrust-banner-sdk">' }], violation_count: 1 }],
            expected: 'Embedded code from OneTrust: 1 violation found: All page content should be contained by landmarks',
        },
        {
            violations: [{ help: 'Buttons must have discernible text', nodes: [{ target: ['#checkout'] }], violation_count: 1 }],
            expected: 'Page content: 1 violation found: Buttons must have discernible text',
        },
        {
            violations: [
                { help: 'Cookie banner must be labelled', nodes: [{ target: ['#onetrust-banner-sdk'] }], violation_count: 1 },
                { help: 'Buttons must have discernible text', nodes: [{ target: ['#checkout'] }], violation_count: 1 },
            ],
            expected: 'Embedded code from OneTrust and page content: 2 violations found: Cookie banner must be labelled, Buttons must have discernible text',
        },
    ];
    for (const testCase of cases) {
        t.mock.method(globalThis, 'fetch', async () => ({
            ok: true,
            json: async () => ({ total_violations: testCase.violations.length, violations: testCase.violations }),
        }));
        assert.equal(await getLostStreakReason(project, lostDate, [reportFile]), testCase.expected);
    }
});

test('unavailable reports produce a warning, not a fabricated reason', async t => {
    t.mock.method(globalThis, 'fetch', async () => ({ ok: false, status: 404 }));
    const previousBaseUrl = process.env.SITE_BASE_URL;
    process.env.SITE_BASE_URL = 'https://example.test';
    t.after(() => {
        if (previousBaseUrl === undefined) delete process.env.SITE_BASE_URL;
        else process.env.SITE_BASE_URL = previousBaseUrl;
    });
    const warnings = [];
    t.mock.method(console, 'warn', (...args) => warnings.push(args.join(' ')));
    assert.equal(await getLostStreakReason(project, lostDate, [reportFile]), null);
    assert.match(warnings[0], /HTTP 404/);
});

test('dialog shows loss date and safely escaped reason; legacy achievements still render', () => {
    const elements = {
        'achievements-dialog': { setAttribute() {}, showModal() {} },
        'achievements-dialog-title': {},
        'achievements-dialog-content': {},
    };
    const context = vm.createContext({
        document: {
            readyState: 'loading', addEventListener() {},
            getElementById: id => elements[id],
        },
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, 'achievements.js'), 'utf8'), context);
    context.showAchievementsDialog(project, [{
        type: 'nobodys_perfect', fromDate: startDate, toDate: endDate,
        lostDate, lostReason: 'Rule <img src=x> & contrast',
    }]);
    const html = elements['achievements-dialog-content'].innerHTML;
    assert.match(html, /Streak lost/);
    assert.match(html, /Why:/);
    assert.match(html, /Rule &lt;img src=x&gt; &amp; contrast/);
    assert.doesNotMatch(html, /<img/);
    context.showAchievementsDialog(project, [{
        type: 'nobodys_perfect', fromDate: startDate, toDate: endDate, lostDate,
    }]);
    assert.doesNotMatch(elements['achievements-dialog-content'].innerHTML, /Why:/);
});
