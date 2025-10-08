import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: 3,
    workers: process.env.CI ? '25%' : '50%', // More workers for local/self-hosted runners
    use: {
        navigationTimeout: 90000,
        actionTimeout: 20000,
        viewport: { width: 1920, height: 1080 }, // More realistic viewport
        trace: 'off',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        browserName: 'chromium',
        ignoreHTTPSErrors: true,
        // Enhanced launch options for stealth
        launchOptions: {
            headless: true, // Always use headless mode for CI compatibility
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-http2',  // Disable HTTP2 to avoid protocol errors
                '--disable-quic',    // Disable QUIC protocol
                '--disable-blink-features=AutomationControlled',
                '--disable-features=IsolateOrigins,site-per-process',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--start-maximized'
            ]
        },
        contextOptions: {
            // Anti-bot detection settings
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            locale: 'nb-NO',
            timezoneId: 'Europe/Oslo',
            geolocation: { latitude: 59.9139, longitude: 10.7522 }, // Oslo
            permissions: ['geolocation']
        }
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
        // Removed firefox and webkit projects - they will be used as fallbacks in the test code
    ],
    reporter: [
        ['html', { outputFolder: path.resolve(process.cwd(), 'playwright-report'), open: 'never' }],
        ['list'],
        ['json', { outputFile: 'test-results.json' }]
    ],
    timeout: 300000 // 5 minutes to accommodate all fallback strategies
});
