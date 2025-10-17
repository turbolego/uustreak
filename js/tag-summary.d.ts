/**
 * Generates or updates a summary of accessibility violations by tag
 * @param reportPath - Path to the JSON report file containing violations
 */
export function generateTagSummary(reportPath: string): void;

/**
 * Merges multiple daily summary part files into a single daily summary
 * @param dateStr - Date string in YYYY-MM-DD format
 * @param totalParts - Expected number of parts (for verification)
 * @returns Success status
 */
export function mergeDailySummaryParts(dateStr: string, totalParts: number): boolean;
