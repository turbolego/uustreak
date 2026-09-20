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
            
            // Check for new achievements
            const newAchievements = checkForNewAchievements(
                project.name, 
                streak, 
                achievements, 
                { startDate: streakStartDate, endDate: streakEndDate, longestStreak, longestStreakStart, longestStreakEnd }
            );

            if (newAchievements.length > 0) {
                // Add new achievements
                newAchievements.forEach(achievement => {
                    if (!achievements.some(a => a.type === achievement.type && a.toDate === achievement.toDate)) {
                        achievements.push(achievement);
                        console.log(`✅ ${project.name}: Unlocked ${achievement.type}`);
                    }
                });

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

    if (dates.length === 0) return { days: 0, startDate: null, longestStreak: 0, longestStreakStart: null };

    let currentRunStart = null;
    let currentRunEnd = null;
    let longestStreak = 0;
    let longestStreakStart = null;
    let longestStreakEnd = null;

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
        longestStreakEnd
    };
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

    if (projectReports.length === 0) return { days: 0, startDate: null, longestStreak: 0, longestStreakStart: null };

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
        longestStreakEnd
    };
}

/**
 * Check for new achievements based on metrics
 * @param {string} projectName - Name of the project
 * @param {number} currentStreak - Current streak days
 * @param {array} existingAchievements - Existing achievements
 * @param {object} streakData - Object with {startDate, longestStreak, longestStreakStart}
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

    return newAchievements;
}

// Run the script
trackAchievements();
