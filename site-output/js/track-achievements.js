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
            const longestStreak = streakResult.longestStreak;
            const longestStreakStart = streakResult.longestStreakStart;
            
            // Check for new achievements
            const newAchievements = checkForNewAchievements(
                project.name, 
                streak, 
                achievements, 
                { startDate: streakStartDate, longestStreak, longestStreakStart }
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
    // Process dates in descending order (newest first), batched
    const BATCH_SIZE = 500;
    const dates = Object.keys(dateMap).sort().reverse();

    if (dates.length === 0) return { days: 0, startDate: null, longestStreak: 0, longestStreakStart: null };

    let currentStreak = 0;
    let currentStreakStartDate = null;
    let longestStreak = 0;
    let longestStreakStart = null;
    let currentDate = new Date(new Date().toISOString().split('T')[0]);
    let done = false;

    for (let batchStart = 0; batchStart < dates.length && !done; batchStart += BATCH_SIZE) {
        const batch = dates.slice(batchStart, batchStart + BATCH_SIZE);
        for (const dateStr of batch) {
            const reportDate = new Date(dateStr);
            const daysDiff = Math.floor((currentDate - reportDate) / (1000 * 60 * 60 * 24));

            if (daysDiff > 1 && currentStreak === 0) { done = true; break; }

            if (dateMap[dateStr] === 0) {
                currentStreak++;
                currentStreakStartDate = dateStr;
                currentDate = new Date(reportDate);
                currentDate.setDate(currentDate.getDate() - 1);
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                    longestStreakStart = currentStreakStartDate;
                }
            } else {
                done = true; break;
            }
        }
    }

    return { days: currentStreak, startDate: currentStreakStartDate, longestStreak, longestStreakStart };
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

    let currentStreak = 0;
    let currentStreakStartDate = null;
    let longestStreak = 0;
    let longestStreakStart = null;
    let currentDate = new Date();
    currentDate = new Date(currentDate.toISOString().split('T')[0]);

    // Count backwards from today to find current streak (now with deduplicated dates)
    for (let i = 0; i < uniqueReports.length; i++) {
        const filename = uniqueReports[i];
        const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
        if (!dateMatch) continue;

        const reportDate = new Date(dateMatch[1]);
        const daysDiff = Math.floor((currentDate - reportDate) / (1000 * 60 * 60 * 24));

        // If we skip more than 1 day, streak is broken (unless checking past streaks)
        if (daysDiff > 1 && currentStreak === 0) break;

        // Check if report has 0 violations
        if (filename.includes('-count-0')) {
            currentStreak++;
            currentStreakStartDate = dateMatch[1]; // Update start date as we go back
            currentDate = new Date(reportDate);
            currentDate.setDate(currentDate.getDate() - 1);
            
            // Track longest streak
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
                longestStreakStart = currentStreakStartDate;
            }
        } else {
            break; // Violations found, current streak ends
        }
    }

    return { days: currentStreak, startDate: currentStreakStartDate, longestStreak, longestStreakStart };
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
        if (streakData.longestStreak > existingLongestDays) {
            // Remove old longest_streak achievement if it exists
            const filteredForLongest = existingAchievements.filter(a => a.type !== 'longest_streak');
            existingAchievements.length = 0;
            existingAchievements.push(...filteredForLongest);
            
            newAchievements.push({
                type: 'longest_streak',
                fromDate: streakData.longestStreakStart,
                toDate: today,
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
                const streakStart = new Date();
                streakStart.setDate(streakStart.getDate() - threshold.days);
                const fromDate = streakStart.toISOString().split('T')[0];

                newAchievements.push({
                    type: threshold.type,
                    fromDate: fromDate,
                    toDate: today,
                    unlockedDate: today
                });
            }
        }
    }

    return newAchievements;
}

// Run the script
trackAchievements();
