#!/usr/bin/env node

/**
 * Achievement Tracking Script
 * Runs as part of GitHub Actions workflow to track project achievements
 */

const fs = require('fs');
const path = require('path');

/**
 * Calculate days since a given date until today
 * @param {string} dateStr - Date in YYYY-MM-DD format
 * @returns {number} - Number of days since that date
 */
function calculateDaysSinceDate(dateStr) {
    if (!dateStr) return 0;
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return Math.floor((today - date) / (1000 * 60 * 60 * 24));
}

function formatViolationReason(violation) {
    if (!violation || typeof violation !== 'object') {
        return null;
    }

    const label = violation.help || violation.rule_id || violation.description || 'Violation';
    const countValue = Number(violation.violation_count);
    const count = Number.isFinite(countValue) ? countValue : null;

    return count && count > 1 ? `${label} (${count})` : label;
}

function classifyViolationSource(violation) {
    const nodes = Array.isArray(violation?.nodes) ? violation.nodes : [];
    const evidence = [
        violation?.id,
        violation?.help,
        violation?.description,
        ...nodes.flatMap(node => [node?.html, ...(node?.target || []), node?.failureSummary]),
    ].filter(Boolean).join(' ').toLowerCase();

    const embeddedCode = /\b(onetrust|trustarc|cookiebot|didomi|consentmanager|quantcast|usercentrics|cookie consent)\b|<(?:iframe|script|embed|object)\b|(?:^|[#.\s])(?:ot-|onetrust-|cmp[-_])/i.test(evidence);
    return embeddedCode ? 'embedded' : 'page';
}

function formatLostStreakCause(violations) {
    const sources = new Set(violations.map(classifyViolationSource));
    if (sources.size === 1 && sources.has('embedded')) {
        return 'Embedded code';
    }
    if (sources.size === 1) {
        return 'Page content';
    }
    return 'Embedded code and page content';
}

async function getLostStreakReason(projectName, lostDate, reportList) {
    if (!Array.isArray(reportList) || reportList.length === 0 || !projectName || !lostDate) {
        console.warn(`Cannot look up lost streak reason for ${projectName} on ${lostDate}: report list or streak metadata is missing`);
        return null;
    }

    const matchingReports = reportList
        .map((entry) => {
            const parsed = path.basename(entry);
            const reportMeta = parsed.match(/^violations-(.+?)-(\d{4}-\d{2}-\d{2})T(\d{2}-\d{2}-\d{2}_\d{3}Z)(?:-count-(\d+))?\.json$/);
            if (!reportMeta) {
                return null;
            }

            return {
                project: reportMeta[1],
                date: reportMeta[2],
                timestamp: reportMeta[3],
                count: reportMeta[4] ? Number.parseInt(reportMeta[4], 10) : -1,
                entry,
            };
        })
        .filter((report) => report && report.project === projectName && report.date === lostDate)
        .sort((left, right) => right.timestamp.localeCompare(left.timestamp));

    const report = matchingReports[0];
    if (!report) {
        console.warn(`No report found for lost streak reason for ${projectName} on ${lostDate}`);
        return null;
    }

    const reportPath = path.join(process.cwd(), report.entry);
    try {
        let reportData;
        if (fs.existsSync(reportPath)) {
            reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        } else {
            const baseUrl = process.env.SITE_BASE_URL;
            if (!baseUrl) {
                throw new Error('Report is not available locally and SITE_BASE_URL is not set');
            }
            const relativePath = report.entry.split('/').map(encodeURIComponent).join('/');
            const response = await fetch(`${baseUrl.replace(/\/$/, '')}/${relativePath}`, {
                signal: AbortSignal.timeout(30000),
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            reportData = await response.json();
        }
        if (!reportData || !Array.isArray(reportData.violations)) {
            throw new Error('Report does not contain a violations array');
        }
        const violations = Array.isArray(reportData.violations)
            ? reportData.violations.filter((violation) => violation && typeof violation === 'object' && Number(violation.violation_count) > 0)
            : [];
        const totalViolationsValue = reportData.total_violations;
        const totalViolations = Number.isFinite(totalViolationsValue) && totalViolationsValue > 0
            ? totalViolationsValue
            : (report.count >= 0 ? report.count : violations.reduce((sum, violation) => sum + Number(violation.violation_count || 0), 0));

        const summary = violations
            .slice(0, 3)
            .map(formatViolationReason)
            .filter(Boolean);
        const cause = formatLostStreakCause(violations);

        if (summary.length > 0) {
            const remaining = violations.length - summary.length;
            const suffix = remaining > 0 ? `, and ${remaining} more` : '';
            return `${cause}: ${totalViolations} violation${totalViolations === 1 ? '' : 's'} found: ${summary.join(', ')}${suffix}`;
        }

        if (totalViolations > 0) {
            return `${cause}: ${totalViolations} violation${totalViolations === 1 ? '' : 's'} found`;
        }
        throw new Error('Loss-date report does not contain positive violations');
    } catch (error) {
        console.warn(`Could not read lost streak reason for ${projectName} on ${lostDate}:`, error.message);
    }

    return null;
}

async function enrichLostStreakReasons(projectName, lostStreaks, reportList, achievements) {
    const enriched = [];
    for (const lostStreak of lostStreaks || []) {
        const existing = achievements.find(
            achievement => achievement.type === 'nobodys_perfect' && achievement.toDate === lostStreak.endDate
        );
        enriched.push({
            ...lostStreak,
            reason: lostStreak.reason || existing?.lostReason
                || await getLostStreakReason(projectName, lostStreak.lostDate, reportList),
        });
    }
    return enriched;
}

/**
 * Track achievements for all projects
 * Updates projects.json with new achievements based on streaks and metrics
 */
async function trackAchievements() {
    try {
        // Read projects.json
        const projectsPath = path.join(process.cwd(), 'projects.json');
        const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

        // Prefer the compact streak-index.json (one entry per project×date) over the
        // full report-list.json (one entry per file path).  The streak-index is built
        // incrementally by the deploy workflow so it never needs to be rebuilt in full.
        const streakIndexPath = path.join(process.cwd(), 'historical-data', 'streak-index.json');
        const reportListPath  = path.join(process.cwd(), 'historical-data', 'report-list.json');

        let useStreakIndex = false;
        let streakIndex = null;
        let reportList  = null;

        if (fs.existsSync(streakIndexPath)) {
            try {
                streakIndex = JSON.parse(fs.readFileSync(streakIndexPath, 'utf8'));
                useStreakIndex = true;
                const projectCount = Object.keys(streakIndex).length;
                const totalEntries = Object.values(streakIndex)
                    .reduce((sum, dates) => sum + Object.keys(dates).length, 0);
                console.log(`Using streak-index.json: ${projectCount} projects, ${totalEntries} date entries`);
            } catch (e) {
                console.warn('Could not parse streak-index.json, falling back to report-list.json:', e.message);
            }
        }

        if (!useStreakIndex) {
            reportList = JSON.parse(fs.readFileSync(reportListPath, 'utf8'));
            console.log(`Using report-list.json: ${reportList.length} entries`);
        }

        if (!reportList && fs.existsSync(reportListPath)) {
            try {
                reportList = JSON.parse(fs.readFileSync(reportListPath, 'utf8'));
            } catch (e) {
                console.warn('Could not parse report-list.json for lost streak reasons:', e.message);
            }
        }

        // Get today's date
        const today = new Date().toISOString().split('T')[0];

        console.log(`🏆 Starting achievement tracking for ${today}`);
        console.log(`Processing ${projects.length} projects...`);

        let updatedCount = 0;

        // Process each project
        for (const project of projects) {
            const achievements = project.achievements || [];

            // Calculate current streak
            const streakResult = useStreakIndex
                ? calculateStreakFromIndex(project.name, streakIndex)
                : calculateStreak(project.name, reportList);

            const streak = streakResult.days;
            const streakStartDate = streakResult.startDate;
            const streakEndDate = streakResult.endDate;
            const longestStreak = streakResult.longestStreak;
            const longestStreakStart = streakResult.longestStreakStart;
            const longestStreakEnd = streakResult.longestStreakEnd;
            const lostStreaks = await enrichLostStreakReasons(project.name, streakResult.lostStreaks || [], reportList, achievements);

            let backfilledLostReasons = false;
            let projectUpdated = false;
            for (const lostStreak of lostStreaks) {
                const existingLostAchievement = achievements.find(
                    (achievement) => achievement.type === 'nobodys_perfect' && achievement.toDate === lostStreak.endDate
                );

                if (existingLostAchievement && !existingLostAchievement.lostReason && lostStreak.reason) {
                    existingLostAchievement.lostReason = lostStreak.reason;
                    backfilledLostReasons = true;
                }
            }
            
            // Check for new achievements
            const newAchievements = checkForNewAchievements(
                project.name, 
                streak, 
                achievements, 
                { startDate: streakStartDate, endDate: streakEndDate, longestStreak, longestStreakStart, longestStreakEnd, lostStreaks }
            );

            if (newAchievements.length > 0) {
                // Add new achievements
                newAchievements.forEach(achievement => {
                    if (!achievements.some(a => a.type === achievement.type && a.toDate === achievement.toDate)) {
                        achievements.push(achievement);
                        console.log(`✅ ${project.name}: Unlocked ${achievement.type}`);
                    }
                });

                projectUpdated = true;
            }

            if (backfilledLostReasons) {
                projectUpdated = true;
            }

            if (projectUpdated) {
                updatedCount++;
            }

            // Ensure achievements array exists
            if (!project.achievements) {
                project.achievements = [];
            }
            project.achievements = achievements;
        }

        // Write updated projects.json
        fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));

        console.log(`\n✅ Achievement tracking complete!`);
        console.log(`Updated ${updatedCount} projects with new achievements`);

    } catch (error) {
        console.error('❌ Error tracking achievements:', error);
        process.exit(1);
    }
}

/**
 * Calculate current no-violations streak using the compact streak-index.json.
 * streak-index format: { projectName: { "YYYY-MM-DD": violationCount, ... } }
 * Processed in date-sorted batches to stay efficient for large histories.
 * @param {string} projectName
 * @param {object} streakIndex
 * @returns {object} {days, startDate, longestStreak, longestStreakStart}
 */
function calculateStreakFromIndex(projectName, streakIndex) {
    const dateMap = streakIndex[projectName] || {};
    // Process dates in ascending order; only explicit violation reports break a streak.
    const BATCH_SIZE = 500;
    const dates = Object.keys(dateMap).sort();

    if (dates.length === 0) return { days: 0, startDate: null, longestStreak: 0, longestStreakStart: null, lostStreaks: [] };

    let currentRunStart = null;
    let currentRunEnd = null;
    let longestStreak = 0;
    let longestStreakStart = null;
    let longestStreakEnd = null;
    const lostStreaks = [];

    for (let batchStart = 0; batchStart < dates.length; batchStart += BATCH_SIZE) {
        const batch = dates.slice(batchStart, batchStart + BATCH_SIZE);
        for (const dateStr of batch) {
            if (dateMap[dateStr] === 0) {
                if (!currentRunStart) currentRunStart = dateStr;
                currentRunEnd = dateStr;
                const days = calculateCalendarDays(currentRunStart, currentRunEnd);
                if (days > longestStreak) {
                    longestStreak = days;
                    longestStreakStart = currentRunStart;
                    longestStreakEnd = currentRunEnd;
                }
            } else {
                recordLostStreak(lostStreaks, currentRunStart, currentRunEnd, dateStr);
                currentRunStart = null;
                currentRunEnd = null;
            }
        }
    }

    const latestDate = dates[dates.length - 1];
    const currentStreak = dateMap[latestDate] === 0 && currentRunStart
        ? calculateCalendarDays(currentRunStart, latestDate)
        : 0;
    return {
        days: currentStreak,
        startDate: currentStreak ? currentRunStart : null,
        endDate: currentStreak ? latestDate : null,
        longestStreak,
        longestStreakStart,
        longestStreakEnd,
        lostStreaks
    };
}

// A streak of at least NOBODYS_PERFECT_MIN_DAYS that ended with a violation report.
const NOBODYS_PERFECT_MIN_DAYS = 365;

function recordLostStreak(lostStreaks, runStart, runEnd, lostDate) {
    if (!runStart || !runEnd) return;
    const days = calculateCalendarDays(runStart, runEnd);
    if (days >= NOBODYS_PERFECT_MIN_DAYS) {
        lostStreaks.push({ startDate: runStart, endDate: runEnd, lostDate, days });
    }
}

function calculateCalendarDays(fromDate, toDate) {
    const from = new Date(`${fromDate}T00:00:00Z`);
    const to = new Date(`${toDate}T00:00:00Z`);
    return Math.floor((to - from) / (1000 * 60 * 60 * 24)) + 1;
}

/**
 * Calculate current no-violations streak for a project
 * @param {string} projectName - Name of the project
 * @param {array} reportList - List of report filenames
 * @returns {object} - Object with {days, startDate, longestStreak, longestStreakStart}
 */
function calculateStreak(projectName, reportList) {
    // Filter reports for this project
    const projectReports = reportList
        .filter(filename => !filename.includes('-FAILED.json'))
        .filter(filename => filename.includes(projectName));

    if (projectReports.length === 0) return { days: 0, startDate: null, longestStreak: 0, longestStreakStart: null, lostStreaks: [] };

    // Deduplicate reports by date - keep only the newest report per date
    const reportsByDate = new Map();
    projectReports.forEach(filename => {
        const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
        if (!dateMatch) return;
        
        const date = dateMatch[1];
        const existing = reportsByDate.get(date);
        
        // Keep the report with the latest timestamp for this date
        if (!existing || filename > existing) {
            reportsByDate.set(date, filename);
        }
    });

    // Convert to array of unique reports, sorted by date descending
    const uniqueReports = Array.from(reportsByDate.values())
        .sort()
        .reverse();

    const reports = uniqueReports.map(filename => {
        const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
        return dateMatch ? { date: dateMatch[1], clear: filename.includes('-count-0') } : null;
    }).filter(Boolean).sort((a, b) => a.date.localeCompare(b.date));

    let runStart = null;
    let runEnd = null;
    let longestStreak = 0;
    let longestStreakStart = null;
    let longestStreakEnd = null;
    const lostStreaks = [];
    for (const report of reports) {
        if (report.clear) {
            if (!runStart) runStart = report.date;
            runEnd = report.date;
            const days = calculateCalendarDays(runStart, runEnd);
            if (days > longestStreak) {
                longestStreak = days;
                longestStreakStart = runStart;
                longestStreakEnd = runEnd;
            }
        } else {
            recordLostStreak(lostStreaks, runStart, runEnd, report.date);
            runStart = null;
            runEnd = null;
        }
    }

    const latest = reports[reports.length - 1];
    const currentStreak = latest?.clear && longestStreakStart === runStart
        ? calculateCalendarDays(runStart, latest.date)
        : 0;
    return {
        days: currentStreak,
        startDate: currentStreak ? runStart : null,
        endDate: currentStreak ? latest.date : null,
        longestStreak,
        longestStreakStart,
        longestStreakEnd,
        lostStreaks
    };
}

/**
 * Check for new achievements based on metrics
 * @param {string} projectName - Name of the project
 * @param {number} currentStreak - Current streak days
 * @param {array} existingAchievements - Existing achievements
 * @param {object} streakData - Object with {startDate, longestStreak, longestStreakStart, lostStreaks}
 * @returns {array} - New achievements to add
 */
function checkForNewAchievements(projectName, currentStreak, existingAchievements = [], streakData = {}) {
    const today = new Date().toISOString().split('T')[0];
    const newAchievements = [];

    // Check for longest_streak achievement
    // Track the longest streak ever achieved
    if (streakData.longestStreak >= 1) {
        const existingLongest = existingAchievements.find(a => a.type === 'longest_streak');
        const existingLongestDays = existingLongest ? parseInt(existingLongest.streakDays) : 0;
        
        // Only create/update if longest streak is better than previous record
        if (streakData.longestStreak > existingLongestDays ||
            (streakData.longestStreak === existingLongestDays &&
             streakData.longestStreakEnd > existingLongest?.toDate)) {
            // Remove old longest_streak achievement if it exists
            const filteredForLongest = existingAchievements.filter(a => a.type !== 'longest_streak');
            existingAchievements.length = 0;
            existingAchievements.push(...filteredForLongest);
            
            newAchievements.push({
                type: 'longest_streak',
                fromDate: streakData.longestStreakStart,
                toDate: streakData.longestStreakEnd || today,
                unlockedDate: today,
                streakDays: streakData.longestStreak
            });
        }
    }

    // Define achievement thresholds
    const streakThresholds = [
        { type: 'streak_30', days: 30 },
        { type: 'streak_100', days: 100 },
        { type: 'streak_365', days: 365 }
    ];

    // Check streak achievements
    for (const threshold of streakThresholds) {
        if (currentStreak >= threshold.days) {
            const alreadyHas = existingAchievements.some(a => a.type === threshold.type);
            if (!alreadyHas) {
                newAchievements.push({
                    type: threshold.type,
                    fromDate: streakData.startDate,
                    toDate: streakData.endDate || today,
                    unlockedDate: today
                });
            }
        }
    }

    // "Nobody's Perfect": one per streak of 365+ days that was lost
    for (const lost of streakData.lostStreaks || []) {
        const alreadyHas = existingAchievements.some(a => a.type === 'nobodys_perfect' && a.toDate === lost.endDate);
        if (!alreadyHas) {
            newAchievements.push({
                type: 'nobodys_perfect',
                fromDate: lost.startDate,
                toDate: lost.endDate,
                lostDate: lost.lostDate,
                lostReason: lost.reason || null,
                unlockedDate: today,
                streakDays: lost.days
            });
        }
    }

    return newAchievements;
}

if (require.main === module) {
    trackAchievements();
}

module.exports = { calculateStreakFromIndex, calculateStreak, checkForNewAchievements, getLostStreakReason };
