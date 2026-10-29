const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

function readConfig(ci) {
    const env = { ...process.env };
    if (ci) {
        env.CI = 'true';
    } else {
        delete env.CI;
    }
    const result = spawnSync(process.execPath, [
        '-e',
        "console.log(JSON.stringify(require('./playwright.config.ts').default.use))"
    ], { cwd: root, env, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return JSON.parse(result.stdout);
}

for (const ci of [false, true]) {
    test(`full Chromium configuration in ${ci ? 'CI' : 'local'} mode`, () => {
        const use = readConfig(ci);
        assert.equal(use.channel, 'chromium');
        assert.equal(use.headless, ci);
        // A launch-level override would prevent Playwright's --headed flag from working.
        assert.equal(use.launchOptions.headless, undefined);
    });
}

for (const args of [[], ['ftp://example.com/']]) {
    test(`browser comparison rejects ${args.length ? 'non-HTTP URLs' : 'missing URLs'}`, () => {
        const result = spawnSync(process.execPath, [
            'js/compare-browser-modes.js', ...args
        ], { cwd: root, encoding: 'utf8' });
        assert.notEqual(result.status, 0);
        assert.match(result.stderr, args.length ? /Expected an HTTP\(S\) URL/ : /Usage:/);
        assert.doesNotMatch(result.stderr, /Scanning /);
    });
}
