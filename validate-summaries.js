const fs = require('fs');
const path = require('path');

/**
 * Validate and repair JSON summary files
 * @param {string} summaryPath - Path to the summary file
 * @returns {boolean} - True if file is valid or was successfully repaired
 */
function validateAndRepairSummary(summaryPath) {
    if (!fs.existsSync(summaryPath)) {
        console.log(`Summary file does not exist: ${summaryPath}`);
        return false;
    }

    try {
        const content = fs.readFileSync(summaryPath, 'utf8');
        const summary = JSON.parse(content);

        // Validate structure
        if (!summary || typeof summary !== 'object') {
            throw new Error('Invalid summary structure');
        }

        // Ensure required sections exist and are arrays
        summary.tags = Array.isArray(summary.tags) ? summary.tags : [];
        summary.rule_ids = Array.isArray(summary.rule_ids) ? summary.rule_ids : [];

        // Validate and clean tags
        summary.tags = summary.tags.filter(tag => {
            return tag && typeof tag === 'object' &&
                typeof tag.tag === 'string' &&
                Array.isArray(tag.urls);
        });

        // Validate and clean rule_ids
        summary.rule_ids = summary.rule_ids.filter(rule => {
            return rule && typeof rule === 'object' &&
                typeof rule.rule_id === 'string' &&
                Array.isArray(rule.urls);
        });

        // Write back the cleaned version
        fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
        console.log(`✓ Validated and cleaned: ${summaryPath}`);
        return true;

    } catch (error) {
        console.error(`✗ Corrupted summary file: ${summaryPath}`);
        console.error(`Error: ${error.message}`);

        try {
            // Try to create a backup of the corrupted file
            const backupPath = `${summaryPath}.corrupted.${Date.now()}`;
            fs.copyFileSync(summaryPath, backupPath);
            console.log(`Created backup: ${backupPath}`);

            // Create a new empty summary
            const newSummary = {
                tags: [],
                rule_ids: []
            };

            fs.writeFileSync(summaryPath, JSON.stringify(newSummary, null, 2));
            console.log(`Created new empty summary: ${summaryPath}`);
            return true;

        } catch (repairError) {
            console.error(`Failed to repair: ${repairError.message}`);
            return false;
        }
    }
}

/**
 * Validate all summary files in the accessibility reports directory
 */
function validateAllSummaries() {
    const reportsDir = 'accessibility-reports';
    const summariesDir = path.join(reportsDir, 'summaries');

    if (!fs.existsSync(summariesDir)) {
        console.log(`Summaries directory does not exist: ${summariesDir}`);
        return;
    }

    let totalFiles = 0;
    let validFiles = 0;
    let repairedFiles = 0;

    const dateDirs = fs.readdirSync(summariesDir);

    for (const dateDir of dateDirs) {
        const dateDirPath = path.join(summariesDir, dateDir);

        if (!fs.statSync(dateDirPath).isDirectory()) {
            continue;
        }

        const summaryPath = path.join(dateDirPath, 'daily_summary.json');

        if (fs.existsSync(summaryPath)) {
            totalFiles++;
            console.log(`\nValidating: ${summaryPath}`);

            const wasValid = validateAndRepairSummary(summaryPath);
            if (wasValid) {
                validFiles++;
            } else {
                repairedFiles++;
            }
        }
    }

    console.log(`\n=== Validation Summary ===`);
    console.log(`Total files: ${totalFiles}`);
    console.log(`Valid/Repaired files: ${validFiles}`);
    console.log(`Failed repairs: ${repairedFiles}`);
}

// Run validation if called directly
if (require.main === module) {
    console.log('Starting summary validation...');
    validateAllSummaries();
}

module.exports = {
    validateAndRepairSummary,
    validateAllSummaries
};
