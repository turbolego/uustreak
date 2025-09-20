import json
import os

def create_spec_file(project_name, project_url):
    # Convert spaces to underscores in filename
    filename = f"{project_name.replace(' ', '_')}.spec.ts"

    # Create the test file content - using raw string (r) prefix to handle escape sequences
    content = rf'''import {{ test, chromium, firefox }} from '@playwright/test';
import {{ AxeBuilder }} from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';
import {{ generateTagSummary }} from '../tag-summary';

// Configure test for this specific project
test.use({{
    baseURL: '{project_url}',
}});

test('WCAG accessibility check for {project_name}', async ({{ page, browser }}) => {{
    test.setTimeout(180000);
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
        
        // Try Chromium with both URL variants
        for (const [index, candidateUrl] of urlCandidates.entries()) {{
            try {{
                console.log(`🔄 Chromium attempt ${{index + 1}}: ${{candidateUrl}}`);
                await currentPage.goto(candidateUrl, {{ waitUntil: 'domcontentloaded', timeout: 45000 }});
                console.log('✅ Chromium navigation successful');
                navigationSuccess = true;
                break;
            }} catch (chromiumError) {{
                console.log(`❌ Chromium attempt ${{index + 1}} failed: ${{chromiumError.message}}`);
                lastError = chromiumError;
            }}
        }}
        
        // If Chromium failed, try Firefox with both URL variants
        if (!navigationSuccess) {{
            console.log('🔄 Trying Firefox fallback with both URL variants...');
            
            // Close current page/context
            await currentPage.close().catch(() => {{}});
            
            // Launch Firefox browser
            fallbackBrowser = await firefox.launch({{
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
            }});
            
            currentContext = await fallbackBrowser.newContext({{
                ignoreHTTPSErrors: true,
                viewport: {{ width: 1280, height: 720 }},
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
            }});
            
            currentPage = await currentContext.newPage();
            usingFallback = true;
            
            for (const [index, candidateUrl] of urlCandidates.entries()) {{
                try {{
                    console.log(`🔄 Firefox attempt ${{index + 1}}: ${{candidateUrl}}`);
                    await currentPage.goto(candidateUrl, {{ waitUntil: 'domcontentloaded', timeout: 75000 }});
                    console.log('✅ Firefox navigation successful');
                    navigationSuccess = true;
                    break;
                }} catch (firefoxError) {{
                    console.log(`❌ Firefox attempt ${{index + 1}} failed: ${{firefoxError.message}}`);
                    lastError = firefoxError;
                }}
            }}
        }}
        
        if (!navigationSuccess) {{
            throw new Error(`All navigation attempts failed. Last error: ${{lastError?.message || 'Unknown error'}}`);
        }}
        
        // Wait for page to stabilize
        console.log('Page loaded, waiting for stabilization...');
        await currentPage.waitForTimeout(5000);
        
        console.log(`Final URL: ${{currentPage.url()}}`);
        console.log(`Page title: ${{await currentPage.title()}}`);
        console.log(`Browser used: ${{usingFallback ? 'Firefox' : 'Chromium'}}`);

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
            browser_used: usingFallback ? 'firefox' : 'chromium',
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

        console.log(`✅ Found ${{accessibilityResults.violations.length}} accessibility violations (using ${{usingFallback ? 'Firefox' : 'Chromium'}})`);

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
            url: currentPage.isClosed() ? 'Page Closed' : currentPage.url(),
            total_violations: -1,
            violations: [],
            browser_used: usingFallback ? 'firefox' : 'chromium',
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