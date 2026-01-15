#!/usr/bin/env node

/**
 * Achievement Tracking Script
 * Runs as part of GitHub Actions workflow to track project achievements
 */

const fs = require('fs');
const path = require('path');

/**
 * Track achievements for all projects
 * Updates projects.json with new achievements based on streaks and metrics
 */
async function trackAchievements() {
    try {
        // Read projects.json
        const projectsPath = path.join(process.cwd(), 'projects.json');
        const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

        // Read report-list.json to analyze streaks
        const reportListPath = path.join(process.cwd(), 'historical-data', 'report-list.json');
        const reportList = JSON.parse(fs.readFileSync(reportListPath, 'utf8'));

        // Get today's date
        const today = new Date().toISOString().split('T')[0];

        console.log(`🏆 Starting achievement tracking for ${today}`);
        console.log(`Processing ${projects.length} projects...`);

        let updatedCount = 0;

        // Process each project
        for (const project of projects) {
            const achievements = project.achievements || [];

            // Calculate current streak
            const streak = calculateStreak(project.name, reportList);
            
            // Check for new achievements
            const newAchievements = checkForNewAchievements(project.name, streak, achievements);

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
 * Calculate current no-violations streak for a project
 * @param {string} projectName - Name of the project
 * @param {array} reportList - List of report filenames
 * @returns {number} - Current streak in days
 */
function calculateStreak(projectName, reportList) {
    // Filter reports for this project and sort by date descending
    const projectReports = reportList
        .filter(filename => !filename.includes('-FAILED.json'))
        .filter(filename => filename.includes(projectName))
        .sort()
        .reverse();

    if (projectReports.length === 0) return 0;

    let streak = 0;
    let currentDate = new Date();
    currentDate = new Date(currentDate.toISOString().split('T')[0]);

    // Count backwards from today
    for (let i = 0; i < projectReports.length; i++) {
        const filename = projectReports[i];
        const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
        if (!dateMatch) continue;

        const reportDate = new Date(dateMatch[1]);
        const daysDiff = Math.floor((currentDate - reportDate) / (1000 * 60 * 60 * 24));

        // If we skip more than 1 day, streak is broken (unless checking past streaks)
        if (daysDiff > 1 && streak === 0) break;

        // Check if report has 0 violations
        if (filename.includes('-count-0')) {
            streak++;
            currentDate = new Date(reportDate);
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break; // Violations found, streak ends
        }
    }

    return streak;
}

/**
 * Check for new achievements based on metrics
 * @param {string} projectName - Name of the project
 * @param {number} currentStreak - Current streak days
 * @param {array} existingAchievements - Existing achievements
 * @returns {array} - New achievements to add
 */
function checkForNewAchievements(projectName, currentStreak, existingAchievements = []) {
    const today = new Date().toISOString().split('T')[0];
    const newAchievements = [];

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
