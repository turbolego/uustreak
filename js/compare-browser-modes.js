const { chromium, devices } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const config = require('../playwright.config.ts').default;

const urls = process.argv.slice(2);
if (urls.length === 0) {
    throw new Error('Usage: npm run test:browser-modes -- https://www.komplett.no/');
}
for (const url of urls) {
    if (!['http:', 'https:'].includes(new URL(url).protocol)) {
        throw new Error(`Expected an HTTP(S) URL: ${url}`);
    }
}

const modes = [
    { name: 'headless-shell', headless: true, channel: undefined },
    { name: 'full-chromium-headless', headless: true, channel: 'chromium' },
    { name: 'full-chromium-headed', headless: false, channel: 'chromium' }
];

/** @param {import('axe-core').Result[]} rules */
function ruleTargets(rules) {
    return rules.map(rule => ({
        id: rule.id,
        targets: rule.nodes.map(node => JSON.stringify(node.target)).sort()
    })).sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * @param {string} url
 * @param {typeof modes[number]} mode
 */
async function scan(url, mode) {
    /** @type {import('@playwright/test').Browser | undefined} */
    let browser;
    try {
        browser = await chromium.launch({
            ...config.use?.launchOptions,
            headless: mode.headless,
            channel: mode.channel
        });
        /** @type {import('@playwright/test').BrowserContextOptions} */
        const contextOptions = {
            ...devices['Desktop Chrome'],
            viewport: config.use?.viewport,
            ignoreHTTPSErrors: config.use?.ignoreHTTPSErrors,
            ...config.use?.contextOptions
        };
        const context = await browser.newContext(contextOptions);
        const page = await context.newPage();
        const response = await page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: config.use?.navigationTimeout ?? 60000
        });
        if (!response || !response.ok()) {
            throw new Error(`Navigation returned HTTP ${response?.status() ?? 'no response'}`);
        }
        // Match the generated scan's stabilization delay without dismissing consent.
        await page.waitForTimeout(8000);
        const content = await page.evaluate(() => ({
            textLength: document.body.innerText.length,
            links: document.links.length,
            buttons: document.querySelectorAll('button').length
        }));
        const results = await new AxeBuilder({ page }).options({ frameWaitTime: 5000 }).analyze();
        return {
            mode: mode.name,
            version: browser.version(),
            status: response.status(),
            url: page.url(),
            title: await page.title(),
            content,
            violations: ruleTargets(results.violations),
            passes: results.passes.map(rule => rule.id).sort(),
            incomplete: ruleTargets(results.incomplete)
        };
    } catch (error) {
        return { mode: mode.name, error: error instanceof Error ? error.message : String(error) };
    } finally {
        await browser?.close();
    }
}

async function main() {
    const reports = [];
    for (const url of urls) {
        const scans = [];
        for (const mode of modes) {
            console.error(`Scanning ${url}: ${mode.name}`);
            scans.push(await scan(url, mode));
        }
        const [, headless, headed] = scans;
        const bothLoaded = !headless.error && !headed.error;
        const comparison = {
            bothLoaded,
            sameFinalUrl: bothLoaded && headless.url === headed.url,
            sameTitle: bothLoaded && headless.title === headed.title,
            sameViolationsAndTargets: bothLoaded &&
                JSON.stringify(headless.violations) === JSON.stringify(headed.violations),
            samePassedRules: bothLoaded &&
                JSON.stringify(headless.passes) === JSON.stringify(headed.passes),
            sameIncompleteAndTargets: bothLoaded &&
                JSON.stringify(headless.incomplete) === JSON.stringify(headed.incomplete)
        };
        reports.push({ url, scans, comparison });
        if (!Object.values(comparison).every(Boolean)) {
            process.exitCode = 1;
        }
    }
    console.log(JSON.stringify(reports, null, 2));
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
