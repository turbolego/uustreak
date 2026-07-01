#!/usr/bin/env node

/**
 * Standalone script to merge daily summary part files
 * Usage: node merge-summary-parts.js [date] [total-parts]
 * Example: node merge-summary-parts.js 2025-06-16 32
 */

const fs = require('fs');
const path = require('path');

// Import the merge function from tag-summary.js
const { mergeDailySummaryParts } = require('./tag-summary.js');

function main() {
    const args = process.argv.slice(2);
    
    // Default to today and 2 parts if no arguments provided (GitHub Actions uses 2 batches)
    const dateStr = args[0] || new Date().toISOString().split('T')[0];
    const totalParts = parseInt(args[1], 10) || 2;
    
    console.log(`Merging daily summary parts for ${dateStr} (${totalParts} parts)...`);
    
    try {
        const success = mergeDailySummaryParts(dateStr, totalParts);
        
        if (success) {
            console.log('✓ Successfully merged summary parts');
            process.exit(0);
        } else {
            console.log('⚠ No summary parts found to merge, but this may be expected');
            process.exit(0); // Exit successfully even if no parts found
        }
    } catch (error) {
        console.error('✗ Failed to merge summary parts:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { main };
