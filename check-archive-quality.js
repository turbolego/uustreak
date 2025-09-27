#!/usr/bin/env node

/**
 * Archive Quality Checker
 * 
 * This script compares the current test results against existing archives to determine
 * if the new results are better quality (more projects tested, fewer failures).
 * It prevents overwriting good archives with bad ones.
 * 
 * Usage: node check-archive-quality.js <date> <new-results-dir> [existing-archive-url]
 * 
 * Returns:
 * - Exit code 0: New results are better or equal, proceed with archiving
 * - Exit code 1: Existing archive is better, skip archiving
 * - Exit code 2: Error occurred
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const PROJECTS_FILE = './projects.json';

/**
 * Fetch content from URL
 */
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

/**
 * Load projects from projects.json
 */
function loadProjects() {
    try {
        const projectsData = fs.readFileSync(PROJECTS_FILE, 'utf8');
        const projects = JSON.parse(projectsData);
        return projects.map(p => p.name);
    } catch (error) {
        console.error('Error loading projects.json:', error.message);
        return [];
    }
}

/**
 * Analyze violation files in a directory
 */
function analyzeResults(resultsDir) {
    const analysis = {
        totalProjects: 0,
        successfulProjects: 0,
        failedProjects: 0,
        missingProjects: 0,
        projects: {},
        failedProjectNames: [],
        missingProjectNames: []
    };

    try {
        const files = fs.readdirSync(resultsDir);
        const violationFiles = files.filter(f => f.startsWith('violations-') && f.endsWith('.json'));

        const expectedProjects = loadProjects();
        const foundProjects = new Set();

        for (const file of violationFiles) {
            // Extract project name from filename
            // Format: violations-ProjectName-YYYY-MM-DDTHH-MM-SS_sssZ-count-N.json
            const match = file.match(/^violations-(.+?)-\d{4}-\d{2}-\d{2}T/);
            if (!match) continue;

            const projectName = match[1];
            foundProjects.add(projectName);

            const isFailed = file.includes('-FAILED.json');

            analysis.projects[projectName] = {
                filename: file,
                failed: isFailed
            };

            if (isFailed) {
                analysis.failedProjects++;
                analysis.failedProjectNames.push(projectName);
            } else {
                analysis.successfulProjects++;
            }
        }

        analysis.totalProjects = foundProjects.size;

        // Find missing projects
        for (const expectedProject of expectedProjects) {
            if (!foundProjects.has(expectedProject)) {
                analysis.missingProjects++;
                analysis.missingProjectNames.push(expectedProject);
            }
        }

        return analysis;
    } catch (error) {
        console.error('Error analyzing results:', error.message);
        return null;
    }
}

/**
 * Analyze existing archive manifest
 */
function analyzeManifest(manifestContent) {
    const analysis = {
        totalProjects: 0,
        successfulProjects: 0,
        failedProjects: 0,
        missingProjects: 0,
        projects: {},
        failedProjectNames: [],
        missingProjectNames: []
    };

    try {
        const lines = manifestContent.split('\n').filter(line => line.trim());
        const expectedProjects = loadProjects();
        const foundProjects = new Set();

        for (const line of lines) {
            if (!line.startsWith('./violations-')) continue;

            // Extract project name from manifest line
            const match = line.match(/^\.\/violations-(.+?)-\d{4}-\d{2}-\d{2}T/);
            if (!match) continue;

            const projectName = match[1];
            foundProjects.add(projectName);

            const isFailed = line.includes('-FAILED.json');

            analysis.projects[projectName] = {
                filename: line,
                failed: isFailed
            };

            if (isFailed) {
                analysis.failedProjects++;
                analysis.failedProjectNames.push(projectName);
            } else {
                analysis.successfulProjects++;
            }
        }

        analysis.totalProjects = foundProjects.size;

        // Find missing projects
        for (const expectedProject of expectedProjects) {
            if (!foundProjects.has(expectedProject)) {
                analysis.missingProjects++;
                analysis.missingProjectNames.push(expectedProject);
            }
        }

        return analysis;
    } catch (error) {
        console.error('Error analyzing manifest:', error.message);
        return null;
    }
}

/**
 * Compare two analyses and determine which is better
 */
function compareQuality(newAnalysis, existingAnalysis) {
    console.log('\n=== QUALITY COMPARISON ===');

    console.log('\nNew Results:');
    console.log(`  Total projects: ${newAnalysis.totalProjects}`);
    console.log(`  Successful: ${newAnalysis.successfulProjects}`);
    console.log(`  Failed: ${newAnalysis.failedProjects}`);
    console.log(`  Missing: ${newAnalysis.missingProjects}`);

    if (existingAnalysis) {
        console.log('\nExisting Archive:');
        console.log(`  Total projects: ${existingAnalysis.totalProjects}`);
        console.log(`  Successful: ${existingAnalysis.successfulProjects}`);
        console.log(`  Failed: ${existingAnalysis.failedProjects}`);
        console.log(`  Missing: ${existingAnalysis.missingProjects}`);
    }

    // If no existing archive, new results are always better
    if (!existingAnalysis) {
        console.log('\n✅ DECISION: No existing archive found, proceeding with new results');
        return true;
    }

    // Calculate quality scores
    const newScore = calculateQualityScore(newAnalysis);
    const existingScore = calculateQualityScore(existingAnalysis);

    console.log(`\nQuality Scores:`);
    console.log(`  New results: ${newScore.toFixed(2)}`);
    console.log(`  Existing archive: ${existingScore.toFixed(2)}`);

    const isNewBetter = newScore >= existingScore;

    if (isNewBetter) {
        console.log('\n✅ DECISION: New results are better or equal, proceeding with archiving');

        if (newAnalysis.failedProjects > 0) {
            console.log(`\n⚠️  WARNING: New results contain ${newAnalysis.failedProjects} failed projects:`);
            newAnalysis.failedProjectNames.forEach(name => console.log(`    - ${name}`));
        }

        if (newAnalysis.missingProjects > 0) {
            console.log(`\n⚠️  WARNING: New results are missing ${newAnalysis.missingProjects} projects:`);
            newAnalysis.missingProjectNames.slice(0, 10).forEach(name => console.log(`    - ${name}`));
            if (newAnalysis.missingProjects > 10) {
                console.log(`    ... and ${newAnalysis.missingProjects - 10} more`);
            }
        }
    } else {
        console.log('\n❌ DECISION: Existing archive is better, skipping archiving');

        console.log('\n📊 Comparison details:');
        console.log(`  New results would lose ${existingAnalysis.successfulProjects - newAnalysis.successfulProjects} successful projects`);
        console.log(`  New results would add ${newAnalysis.failedProjects - existingAnalysis.failedProjects} failed projects`);
        console.log(`  New results would miss ${newAnalysis.missingProjects - existingAnalysis.missingProjects} additional projects`);
    }

    return isNewBetter;
}

/**
 * Calculate a quality score for test results
 * Higher score = better quality
 */
function calculateQualityScore(analysis) {
    const expectedProjectCount = loadProjects().length;

    if (expectedProjectCount === 0) {
        console.error('Warning: No projects found in projects.json');
        return 0;
    }

    // Base score: percentage of expected projects successfully tested
    const successRate = analysis.successfulProjects / expectedProjectCount;

    // Penalty for failed projects (failed projects count as partial success)
    const failureCredit = (analysis.failedProjects * 0.5) / expectedProjectCount;

    // Total coverage (successful + partial credit for failed)
    const totalCoverage = successRate + failureCredit;

    // Final score (0-100)
    const score = Math.max(0, totalCoverage * 100);

    return score;
}

/**
 * Main function
 */
async function main() {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.error('Usage: node check-archive-quality.js <date> <new-results-dir> [existing-archive-url]');
        console.error('');
        console.error('Example:');
        console.error('  node check-archive-quality.js YYYY-MM-DD ./accessibility-reports/YYYY-MM-DD');
        console.error('  node check-archive-quality.js YYYY-MM-DD ./accessibility-reports/YYYY-MM-DD https://example.com/reports_YYYY-MM-DD.manifest');
        process.exit(2);
    }

    const [date, newResultsDir, existingArchiveUrl] = args;

    console.log(`🔍 Checking archive quality for ${date}`);
    console.log(`📁 New results directory: ${newResultsDir}`);

    if (existingArchiveUrl) {
        console.log(`🌐 Existing archive URL: ${existingArchiveUrl}`);
    }

    // Analyze new results
    console.log('\n📊 Analyzing new results...');
    if (!fs.existsSync(newResultsDir)) {
        console.error(`❌ Error: Results directory not found: ${newResultsDir}`);
        process.exit(2);
    }

    const newAnalysis = analyzeResults(newResultsDir);
    if (!newAnalysis) {
        console.error('❌ Error: Failed to analyze new results');
        process.exit(2);
    }

    // Analyze existing archive if URL provided
    let existingAnalysis = null;
    if (existingArchiveUrl) {
        try {
            console.log('\n📊 Analyzing existing archive...');
            const manifestContent = await fetchUrl(existingArchiveUrl);
            existingAnalysis = analyzeManifest(manifestContent);
            if (!existingAnalysis) {
                console.log('⚠️  Warning: Failed to analyze existing archive, proceeding with new results');
            }
        } catch (error) {
            console.log(`⚠️  Warning: Could not fetch existing archive (${error.message}), proceeding with new results`);
        }
    }

    // Compare and decide
    const shouldProceed = compareQuality(newAnalysis, existingAnalysis);

    console.log('\n' + '='.repeat(50));

    if (shouldProceed) {
        console.log('✅ RECOMMENDATION: Proceed with creating/updating archive');
        process.exit(0);
    } else {
        console.log('❌ RECOMMENDATION: Skip archiving to preserve better existing results');
        process.exit(1);
    }
}

// Error handling
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught exception:', error.message);
    process.exit(2);
});

process.on('unhandledRejection', (error) => {
    console.error('❌ Unhandled rejection:', error.message);
    process.exit(2);
});

if (require.main === module) {
    main();
}