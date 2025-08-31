import { defineConfig } from '@playwright/test';
import * as path from 'path';

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: 3,
    workers: '25%', // Reduced parallelism to avoid overwhelming slow sites
    use: {
        navigationTimeout: 60000, // Standard timeout for most sites
        actionTimeout: 15000,
        viewport: { width: 1280, height: 720 },
        trace: 'off',
        browserName: 'chromium', // Default to Chromium, fallback handled in test
        ignoreHTTPSErrors: true, // Required for sites with SSL issues
        launchOptions: {
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-http2'  // Helps with some sites
            ]
        }
    },
    reporter: [
        ['html', { outputFolder: path.resolve(__dirname, 'playwright-report'), open: 'never' }],
        ['list']
    ],
    timeout: 120000
});
