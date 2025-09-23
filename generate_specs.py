import json
import os

def create_spec_file(project_name, project_url):
    # Convert spaces to underscores in filename
    filename = f"{project_name.replace(' ', '_')}.spec.ts"

    # Create the test file content - using raw string (r) prefix to handle escape sequences
    content = rf'''import {{ test, chromium, firefox, webkit }} from '@playwright/test';
import {{ AxeBuilder }} from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';
import {{ generateTagSummary }} from '../tag-summary';

// Configure test for this specific project
test.use({{
    baseURL: '{project_url}',
}});

test('WCAG accessibility check for {project_name}', async ({{ page, browser }}) => {{
    test.setTimeout(300000); // 5 minutes for difficult sites
    const outputDir = path.resolve(process.cwd(), 'accessibility-reports');
    fs.mkdirSync(outputDir, {{ recursive: true }});

    let currentPage = page;
    let currentContext = null;
    let fallbackBrowser = null;
    let usingFallback = false;

    try {{
        console.log(`Starting accessibility test for {project_name}`);
        
        // Dual URL strategy: try both with and without hash fragment
        const baseUrl = '{project_url}'.replace(/\/#$/, '/');
        const hashUrl = baseUrl.endsWith('/') ? baseUrl + '#' : baseUrl + '/#';
        
        // Different strategies for different environments
        const urlCandidates = process.env.PREFER_HASH_URL === 'true' 
            ? [hashUrl, baseUrl] 
            : [baseUrl, hashUrl];
            
        console.log(`Trying navigation strategies for URLs: ${{urlCandidates.join(', ')}}`);
        
        let navigationSuccess = false;
        let lastError = null;
        let browserUsed = 'chromium';
        
        // Enhanced fallback strategy with multiple browsers and configurations
        const fallbackStrategies = [
            {{
                name: 'Chromium (Standard)',
                browser: 'chromium',
                timeout: 45000,
                waitUntil: 'domcontentloaded',
                extraArgs: [],
                userAgent: null
            }},
            {{
                name: 'Chromium (Extended Timeout)',
                browser: 'chromium',
                timeout: 90000,
                waitUntil: 'networkidle',
                extraArgs: [],
                userAgent: null
            }},
            {{
                name: 'Firefox (Standard)',
                browser: 'firefox',
                timeout: 75000,
                waitUntil: 'domcontentloaded',
                extraArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
            }},
            {{
                name: 'Chromium (Mobile User Agent)',
                browser: 'chromium',
                timeout: 90000,
                waitUntil: 'domcontentloaded',
                extraArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
                userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
            }},
            {{
                name: 'WebKit (Safari)',
                browser: 'webkit',
                timeout: 60000,
                waitUntil: 'domcontentloaded',
                extraArgs: [],
                userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
            }},
            {{
                name: 'Chromium (No-JS Fallback)',
                browser: 'chromium',
                timeout: 60000,
                waitUntil: 'domcontentloaded',
                extraArgs: ['--disable-javascript'],
                userAgent: null
            }}
        ];
        
        // Try each strategy with all URL candidates
        for (const strategy of fallbackStrategies) {{
            if (navigationSuccess) break;
            
            console.log(`🔄 Trying strategy: ${{strategy.name}}`);
            
            try {{
                // Close existing page/context if switching browsers
                if (strategy.browser !== 'chromium' || fallbackBrowser) {{
                    try {{
                        if (currentPage && !currentPage.isClosed()) {{
                            await currentPage.close();
                        }}
                    }} catch (e) {{
                        console.log(`Warning: Error closing page: ${{e.message}}`);
                    }}
                    
                    try {{
                        if (currentContext) {{
                            await currentContext.close();
                            currentContext = null;
                        }}
                    }} catch (e) {{
                        console.log(`Warning: Error closing context: ${{e.message}}`);
                    }}
                    
                    try {{
                        if (fallbackBrowser) {{
                            await fallbackBrowser.close();
                            fallbackBrowser = null;
                        }}
                    }} catch (e) {{
                        console.log(`Warning: Error closing browser: ${{e.message}}`);
                    }}
                    
                    // Wait a moment for cleanup to complete
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    // Launch the appropriate browser
                    const launchOptions = {{
                        headless: true,
                        args: ['--no-sandbox', '--disable-setuid-sandbox', ...strategy.extraArgs]
                    }};
                    
                    if (strategy.browser === 'firefox') {{
                        fallbackBrowser = await firefox.launch(launchOptions);
                    }} else if (strategy.browser === 'webkit') {{
                        fallbackBrowser = await webkit.launch(launchOptions);
                    }} else {{
                        fallbackBrowser = await chromium.launch(launchOptions);
                    }}
                    
                    // Enhanced context options for difficult sites
                    const contextOptions = {{
                        ignoreHTTPSErrors: true,
                        viewport: {{ width: 1280, height: 720 }},
                        userAgent: strategy.userAgent,
                        javaScriptEnabled: !strategy.extraArgs.includes('--disable-javascript'),
                        // Network conditions for slow sites
                        offline: false,
                        // Extra headers for compatibility
                        extraHTTPHeaders: {{
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                            'Accept-Language': 'nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en;q=0.6',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'DNT': '1',
                            'Connection': 'keep-alive',
                            'Upgrade-Insecure-Requests': '1'
                        }}
                    }};
                    
                    // Add mobile viewport for mobile user agent (only for Chromium-based browsers)
                    if (strategy.userAgent && strategy.userAgent.includes('iPhone') && strategy.browser === 'chromium') {{
                        contextOptions.viewport = {{ width: 375, height: 667 }};
                        contextOptions.isMobile = true;
                        contextOptions.hasTouch = true;
                    }}
                    
                    currentContext = await fallbackBrowser.newContext(contextOptions);
                    
                    currentPage = await currentContext.newPage();
                    usingFallback = true;
                    
                    // Add request/response interceptors for problematic sites (skip for WebKit due to compatibility issues)
                    if (strategy.browser !== 'webkit') {{
                        try {{
                            await currentPage.route('**/*', async (route, request) => {{
                                // Block potentially problematic resources for faster loading
                                const resourceType = request.resourceType();
                                const url = request.url();
                                
                                // Block ads, analytics, and tracking that might slow down sites
                                if (
                                    resourceType === 'image' && url.includes('ad') ||
                                    url.includes('google-analytics') ||
                                    url.includes('googletagmanager') ||
                                    url.includes('facebook.net') ||
                                    url.includes('doubleclick') ||
                                    resourceType === 'font' && !url.includes(new URL(candidateUrl).hostname)
                                ) {{
                                    await route.abort();
                                }} else {{
                                    // Continue with modified headers for better compatibility
                                    const headers = {{
                                        ...request.headers(),
                                        'Cache-Control': 'no-cache',
                                        'Pragma': 'no-cache'
                                    }};
                                    await route.continue({{ headers }});
                                }}
                            }});
                        }} catch (routeError) {{
                            console.log(`Warning: Could not set up request interception for ${{strategy.name}}: ${{routeError.message}}`);
                        }}
                    }}
                    
                    // Handle dialogs and popups that might interfere
                    currentPage.on('dialog', async dialog => {{
                        console.log(`Dialog appeared: ${{dialog.message()}}`);
                        try {{
                            await dialog.accept();
                        }} catch (dialogError) {{
                            console.log(`Warning: Could not handle dialog: ${{dialogError.message}}`);
                        }}
                    }});
                }}
                
                // Try both URL variants with current strategy
                for (const [index, candidateUrl] of urlCandidates.entries()) {{
                    try {{
                        console.log(`🔄 ${{strategy.name}} attempt ${{index + 1}}: ${{candidateUrl}}`);
                        
                        await currentPage.goto(candidateUrl, {{ 
                            waitUntil: strategy.waitUntil, 
                            timeout: strategy.timeout 
                        }});
                        
                        console.log(`✅ ${{strategy.name}} navigation successful`);
                        navigationSuccess = true;
                        browserUsed = strategy.browser;
                        break;
                        
                    }} catch (attemptError) {{
                        console.log(`❌ ${{strategy.name}} attempt ${{index + 1}} failed: ${{attemptError.message}}`);
                        lastError = attemptError;
                        
                        // Try with different wait strategies on timeout (only for first URL to avoid too many retries)
                        if (attemptError.message.includes('Timeout') && index === 0 && !attemptError.message.includes('net::ERR_CONNECTION_TIMED_OUT')) {{
                            try {{
                                console.log(`🔄 ${{strategy.name}} retry with load event: ${{candidateUrl}}`);
                                await currentPage.goto(candidateUrl, {{ 
                                    waitUntil: 'load', 
                                    timeout: Math.min(strategy.timeout * 1.5, 120000)
                                }});
                                console.log(`✅ ${{strategy.name}} navigation successful (load event)`);
                                navigationSuccess = true;
                                browserUsed = strategy.browser;
                                break;
                            }} catch (retryError) {{
                                console.log(`❌ ${{strategy.name}} retry failed: ${{retryError.message}}`);
                                lastError = retryError;
                            }}
                        }}
                    }}
                }}
                
            }} catch (strategyError) {{
                console.log(`❌ Strategy ${{strategy.name}} setup failed: ${{strategyError.message}}`);
                lastError = strategyError;
                
                // Continue to next strategy instead of breaking
                continue;
            }}
        }}
        
        if (!navigationSuccess) {{
            console.log('🚨 All navigation strategies failed - creating fallback report');
            
            // Create a comprehensive failure report
            const timestamp = new Date().toISOString()
                .replace(/:/g, '-')
                .replace(/\./g, '_');

            const failureReport = {{
                project: '{project_name}',
                timestamp: new Date().toISOString(),
                url: '{project_url}',
                total_violations: -1,
                violations: [],
                browser_used: 'none_successful',
                fallback_used: true,
                attempted_strategies: fallbackStrategies.map(s => s.name).join(', '),
                attempted_urls: urlCandidates,
                navigation_failure: true,
                error: {{
                    message: `All navigation attempts failed across ${{fallbackStrategies.length}} strategies`,
                    last_error: lastError?.message || 'Unknown error',
                    details: 'Site appears to be inaccessible or incompatible with automated testing'
                }}
            }};

            const failureReportPath = path.join(
                outputDir,
                `violations-{project_name}-${{timestamp}}-NAVIGATION_FAILED.json`
            );

            fs.writeFileSync(failureReportPath, JSON.stringify(failureReport, null, 2));
            console.log(`Failure report saved to ${{failureReportPath}}`);
            
            throw new Error(`All navigation attempts failed across all browsers. Last error: ${{lastError?.message || 'Unknown error'}}`);
        }}
        
        // Wait for page to stabilize
        console.log('Page loaded, waiting for stabilization...');
        await currentPage.waitForTimeout(5000);
        
        console.log(`Final URL: ${{currentPage.url()}}`);
        console.log(`Page title: ${{await currentPage.title()}}`);
        console.log(`Browser used: ${{browserUsed}}`);
        
        // Additional stability checks for problematic sites
        try {{
            // Check if page is responsive
            await currentPage.evaluate(() => document.readyState);
            
            // Wait for potential lazy-loaded content
            await currentPage.waitForTimeout(3000);
            
            // Check for common loading indicators and wait for them to disappear
            const loadingSelectors = [
                '[class*="loading"]',
                '[class*="spinner"]', 
                '[id*="loading"]',
                '.loader'
            ];
            
            for (const selector of loadingSelectors) {{
                try {{
                    await currentPage.waitForSelector(selector, {{ state: 'hidden', timeout: 10000 }});
                    console.log(`Waited for loading indicator: ${{selector}}`);
                }} catch {{
                    // Ignore if selector not found
                }}
            }}
            
        }} catch (stabilityError) {{
            console.log(`Page stability check warning: ${{stabilityError.message}}`);
        }}

        // Check for redirect loops (like nille.no json=true issue)
        const finalUrl = currentPage.url();
        const urlParams = new URL(finalUrl).searchParams;
        const jsonParams = urlParams.getAll('json');
        
        if (jsonParams.length > 5) {{
            throw new Error(`Detected redirect loop with ${{jsonParams.length}} json parameters - site may have issues with automation`);
        }}

        // Run accessibility scan with retry logic
        let retryCount = 0;
        const maxRetries = 3;
        let accessibilityResults;

        while (retryCount < maxRetries) {{
            try {{
                console.log(`Running accessibility analysis (attempt ${{retryCount + 1}}/${{maxRetries}})...`);
                
                if (currentPage.isClosed()) {{
                    throw new Error('Page was closed unexpectedly');
                }}

                const builder = new AxeBuilder({{ page: currentPage }})
                    .options({{
                        frameWaitTime: 5000
                    }});

                accessibilityResults = await builder.analyze();
                console.log('Accessibility analysis completed successfully');
                break;
            }} catch (axeError) {{
                retryCount++;
                const errorMessage = axeError instanceof Error ? axeError.message : String(axeError);
                console.log(`Accessibility analysis attempt ${{retryCount}} failed: ${{errorMessage}}`);

                if (retryCount === maxRetries) {{
                    throw new Error(`Accessibility analysis failed after ${{maxRetries}} attempts: ${{errorMessage}}`);
                }}

                await currentPage.waitForTimeout(5000);
            }}
        }}

        const timestamp = new Date().toISOString()
            .replace(/:/g, '-')
            .replace(/\./g, '_');

        if (!accessibilityResults) {{
            throw new Error('Accessibility analysis failed to produce results');
        }}

        const filePath = path.join(
            outputDir,
            `violations-{project_name}-${{timestamp}}-count-${{accessibilityResults.violations.length}}.json`
        );

        const report = {{
            project: '{project_name}',
            timestamp: new Date().toISOString(),
            url: currentPage.url(),
            total_violations: accessibilityResults.violations.length,
            browser_used: browserUsed,
            fallback_used: usingFallback,
            violations: accessibilityResults.violations.map(violation => ({{
                id: violation.id,
                impact: violation.impact,
                description: violation.description,
                help: violation.help,
                helpUrl: violation.helpUrl,
                tags: violation.tags || [],
                violation_count: violation.nodes.length,
                nodes: violation.nodes.map(node => ({{
                    html: node.html,
                    target: node.target,
                    failureSummary: node.failureSummary
                }}))
            }}))
        }};

        fs.writeFileSync(filePath, JSON.stringify(report, null, 2));
        console.log(`Accessibility report saved to ${{filePath}}`);

        // Generate tag summary using the JavaScript module
        try {{
            generateTagSummary(filePath);
            console.log(`Updated tag summary with data from ${{filePath}}`);
        }} catch (summaryError) {{
            const errorMessage = summaryError instanceof Error ? summaryError.message : String(summaryError);
            console.error(`Failed to update tag summary: ${{errorMessage}}`);
        }}

        console.log(`✅ Found ${{accessibilityResults.violations.length}} accessibility violations (using ${{browserUsed}})`);

    }} catch (error) {{
        console.error(`Error in accessibility test for {project_name}:`, error);

        const timestamp = new Date().toISOString()
            .replace(/:/g, '-')
            .replace(/\./g, '_');

        const fallbackReportPath = path.join(
            outputDir,
            `violations-{project_name}-${{timestamp}}-FAILED.json`
        );

        const fallbackReport = {{
            project: '{project_name}',
            timestamp: new Date().toISOString(),
            url: currentPage && !currentPage.isClosed() ? currentPage.url() : 'Page Closed or Never Loaded',
            total_violations: -1,
            violations: [],
            browser_used: browserUsed || 'unknown',
            fallback_used: usingFallback,
            attempted_strategies: 'chromium,firefox,webkit',
            error: error instanceof Error ? {{
                message: error.message,
                stack: error.stack,
                cause: error.cause
            }} : 'Unknown error'
        }};

        fs.writeFileSync(fallbackReportPath, JSON.stringify(fallbackReport, null, 2));
        throw error;
    }} finally {{
        // Clean up Firefox browser if we used it
        if (fallbackBrowser) {{
            await fallbackBrowser.close().catch(() => {{}});
        }}
    }}
}});'''

    return filename, content

def main():
    # Create tests directory if it doesn't exist
    tests_dir = 'tests'
    if not os.path.exists(tests_dir):
        os.makedirs(tests_dir)

    # Read projects from JSON file
    with open('projects.json', 'r', encoding='utf-8') as f:
        projects = json.load(f)

    # Generate spec files for each project
    for project in projects:
        filename, content = create_spec_file(project['name'], project['baseURL'])
        file_path = os.path.join(tests_dir, filename)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"Created spec file: {file_path}")

if __name__ == "__main__":
    main()