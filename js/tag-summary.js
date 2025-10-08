const fs = require('fs');
const path = require('path');

/**
 * Generates or updates a summary of accessibility violations by tag
 * @param {string} reportPath - Path to the JSON report file containing violations
 */
function generateTagSummary(reportPath) {
    try {
        // Get current date for organizing summaries - use only YYYY-MM-DD format
        const today = new Date();
        const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD

        // Create directory structure - no timestamp in folder structure
        const summaryDir = path.join('accessibility-reports', 'summaries', dateStr);
        if (!fs.existsSync(summaryDir)) {
            fs.mkdirSync(summaryDir, {recursive: true});
        }

        // Check if we're running in parallel mode (GitHub Actions matrix)
        const batchIndex = process.env.BATCH_INDEX;
        let summaryPath;
        
        console.log(`Environment check - BATCH_INDEX: ${process.env.BATCH_INDEX}`);
        
        if (batchIndex !== undefined && batchIndex !== null && batchIndex !== '') {
            // Running in parallel - use part files
            summaryPath = path.join(summaryDir, `daily_summary_part_${batchIndex}.json`);
            console.log(`Running in parallel mode, batch ${batchIndex}, using part file: ${summaryPath}`);
        } else {
            // Running standalone - use main file
            summaryPath = path.join(summaryDir, `daily_summary.json`);
            console.log(`Running in standalone mode, using main file: ${summaryPath}`);
        }

        let summary = {
            tags: [],
            rule_ids: []
        };

        // Load existing summary if it exists
        if (fs.existsSync(summaryPath)) {
            try {
                const data = fs.readFileSync(summaryPath, 'utf8');
                summary = JSON.parse(data);
                // Ensure both sections exist
                summary.tags = summary.tags || [];
                summary.rule_ids = summary.rule_ids || [];
                console.log(`Loaded existing summary from ${summaryPath}`);
            } catch (e) {
                console.log(`Error loading existing summary: ${e.message}`);
                // Create a new summary if loading fails
                summary = {tags: [], rule_ids: []};
            }
        }

        // Load the new report
        const reportData = fs.readFileSync(reportPath, 'utf8');
        const report = JSON.parse(reportData);

        // Extract URL from the report
        const url = report.url;
        if (!url) {
            console.log(`Warning: No URL found in report ${reportPath}`);
            return;
        }

        // Process each violation in the report
        for (const violation of report.violations || []) {
            // Process tags
            const tags = violation.tags || [];
            tags.forEach(tag => {
                // Find if this tag already exists in summary
                const tagEntry = summary.tags.find(item => item.tag === tag);

                if (tagEntry) {
                    // Add URL to existing tag if not already present
                    if (!tagEntry.urls.includes(url)) {
                        tagEntry.urls.push(url);
                    }
                } else {
                    // Create new tag entry
                    summary.tags.push({
                        tag: tag,
                        urls: [url]
                    });
                }
            });

            // Process rule IDs
            const ruleId = violation.id;
            if (ruleId) {
                // Find if this rule ID already exists in summary
                const ruleEntry = summary.rule_ids.find(item => item.rule_id === ruleId);

                if (ruleEntry) {
                    // Add URL to existing rule ID if not already present
                    if (!ruleEntry.urls.includes(url)) {
                        ruleEntry.urls.push(url);
                    }
                } else {
                    // Create new rule ID entry
                    summary.rule_ids.push({
                        rule_id: ruleId,
                        help: violation.help || '',
                        description: violation.description || '',
                        urls: [url]
                    });
                }
            }
        }

        // Sort both lists
        summary.tags.sort((a, b) => a.tag.localeCompare(b.tag));
        summary.rule_ids.sort((a, b) => a.rule_id.localeCompare(b.rule_id));

        // Save updated summary
        fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
        console.log(`Updated tag summary saved to ${summaryPath}`);

    } catch (e) {
        console.error(`Error processing report for tag summary: ${e.message}`);
    }
}

/**
 * Merges multiple daily summary part files into a single daily summary
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @param {number} totalParts - Expected number of parts (for verification)
 * @returns {boolean} - Success status
 */
function mergeDailySummaryParts(dateStr, totalParts) {
    try {
        console.log(`Starting merge process for date: ${dateStr}, expected parts: ${totalParts}`);
        
        const summaryDir = path.join('accessibility-reports', 'summaries', dateStr);
        
        if (!fs.existsSync(summaryDir)) {
            console.log(`Summary directory ${summaryDir} does not exist, creating it...`);
            fs.mkdirSync(summaryDir, { recursive: true });
        }

        // Find all part files
        const partFiles = fs.readdirSync(summaryDir)
            .filter(file => file.startsWith('daily_summary_part_') && file.endsWith('.json'))
            .sort();

        console.log(`Found ${partFiles.length} part files in ${summaryDir}:`, partFiles);

        // Check if there's already a merged file
        const mergedPath = path.join(summaryDir, 'daily_summary.json');
        const mergedExists = fs.existsSync(mergedPath);
        console.log(`Merged file ${mergedPath} exists: ${mergedExists}`);

        // If no part files but merged file exists, consider it success
        if (partFiles.length === 0 && mergedExists) {
            console.log('No part files found, but merged file already exists - treating as success');
            return true;
        }

        // If no part files and no merged file, create an empty summary as fallback
        if (partFiles.length === 0) {
            console.log('No part files found, creating empty summary file');
            const emptySummary = {
                tags: [],
                rule_ids: [],
                note: `No accessibility data found for ${dateStr}`
            };
            fs.writeFileSync(mergedPath, JSON.stringify(emptySummary, null, 2));
            return true;
        }

        // Initialize merged summary
        let mergedSummary = {
            tags: [],
            rule_ids: []
        };

        // Process each part file
        for (const partFile of partFiles) {
            const partPath = path.join(summaryDir, partFile);
            console.log(`Processing part file: ${partFile}`);

            try {
                const partData = JSON.parse(fs.readFileSync(partPath, 'utf8'));
                
                // Merge tags
                if (partData.tags) {
                    for (const tagEntry of partData.tags) {
                        const existingTag = mergedSummary.tags.find(t => t.tag === tagEntry.tag);
                        if (existingTag) {
                            // Merge URLs, avoiding duplicates
                            for (const url of tagEntry.urls || []) {
                                if (!existingTag.urls.includes(url)) {
                                    existingTag.urls.push(url);
                                }
                            }
                        } else {
                            // Add new tag entry
                            mergedSummary.tags.push({
                                tag: tagEntry.tag,
                                urls: [...(tagEntry.urls || [])]
                            });
                        }
                    }
                }

                // Merge rule IDs
                if (partData.rule_ids) {
                    for (const ruleEntry of partData.rule_ids) {
                        const existingRule = mergedSummary.rule_ids.find(r => r.rule_id === ruleEntry.rule_id);
                        if (existingRule) {
                            // Merge URLs, avoiding duplicates
                            for (const url of ruleEntry.urls || []) {
                                if (!existingRule.urls.includes(url)) {
                                    existingRule.urls.push(url);
                                }
                            }
                        } else {
                            // Add new rule entry
                            mergedSummary.rule_ids.push({
                                rule_id: ruleEntry.rule_id,
                                help: ruleEntry.help || '',
                                description: ruleEntry.description || '',
                                urls: [...(ruleEntry.urls || [])]
                            });
                        }
                    }
                }
            } catch (parseError) {
                console.error(`Error parsing part file ${partFile}: ${parseError.message}`);
                continue;
            }
        }

        // Sort the merged results
        mergedSummary.tags.sort((a, b) => a.tag.localeCompare(b.tag));
        mergedSummary.rule_ids.sort((a, b) => a.rule_id.localeCompare(b.rule_id));

        // Write merged summary
        fs.writeFileSync(mergedPath, JSON.stringify(mergedSummary, null, 2));

        console.log(`Successfully merged ${partFiles.length} parts into ${mergedPath}`);
        console.log(`Final summary contains ${mergedSummary.tags.length} tags and ${mergedSummary.rule_ids.length} rule IDs`);

        return true;
    } catch (error) {
        console.error(`Error merging summary parts: ${error.message}`);
        return false;
    }
}

module.exports = {generateTagSummary, mergeDailySummaryParts};
