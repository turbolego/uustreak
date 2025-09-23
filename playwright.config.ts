import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: 3,
    workers: '25%', // Reduced parallelism to avoid overwhelming slow sites
    use: {
        navigationTimeout: 90000, // Increased for slow sites
        actionTimeout: 20000, // Increased for slow interactions
        viewport: { width: 1280, height: 720 },
        trace: 'off',
        browserName: 'chromium', // Default to Chromium, fallback handled in test
        ignoreHTTPSErrors: true, // Required for sites with SSL issues
        launchOptions: {
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-http2',  // Helps with some sites
                '--disable-web-security', // For sites with CORS issues
                '--disable-features=VizDisplayCompositor' // Stability fix
            ]
        }
    },
    reporter: [
        ['html', { outputFolder: path.resolve(process.cwd(), 'playwright-report'), open: 'never' }],
        ['list']
    ],
    timeout: 180000 // Increased timeout for slow sites
});
