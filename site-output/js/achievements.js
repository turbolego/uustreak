/**
 * Achievements System for WCAG Leaderboard
 * Tracks and displays project achievements like streaks
 */

/**
 * Format date to readable string
 * @param {string} dateStr - Date in YYYY-MM-DD format
 * @returns {string} - Formatted date (e.g., "Jan 15, 2026")
 */
function formatAchievementDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr + 'T12:00:00Z');
    return date.toLocaleDateString('no-NO', { year: 'numeric', month: 'short', day: 'numeric' });
}

/**
 * Calculate days between two dates
 * @param {string} fromDate - Start date in YYYY-MM-DD format
 * @param {string} toDate - End date in YYYY-MM-DD format
 * @returns {number} - Number of days
 */
function calculateDaysBetween(fromDate, toDate) {
    const from = new Date(fromDate + 'T12:00:00Z');
    const to = new Date(toDate + 'T12:00:00Z');
    return Math.floor((to - from) / (1000 * 60 * 60 * 24)) + 1;
}

/**
 * Get achievement icon based on type
 * @param {string} type - Achievement type (e.g., 'streak_30', 'streak_100')
 * @returns {string} - Emoji icon
 */
function getAchievementIcon(type) {
    const icons = {
        'streak_30': '🥉',      // Bronze
        'streak_100': '🥈',     // Silver
        'streak_365': '🥇',     // Gold
        'longest_streak': '👑', // Champion
        'improved': '📈'        // Improvement
    };
    return icons[type] || '🏆';
}

/**
 * Get achievement description
 * @param {object} achievement - Achievement object
 * @returns {string} - Human-readable description
 */
function getAchievementDescription(achievement) {
    const descriptions = {
        'streak_30': '30 Days Without Violations',
        'streak_100': '100 Days Without Violations',
        'streak_365': '1 Year Without Violations',
        'longest_streak': 'Longest Streak',
        'improved': 'Major Improvement'
    };
    return descriptions[achievement.type] || achievement.type;
}

/**
 * Show achievements dialog for a project
 * @param {string} projectName - Name of the project
 * @param {array} achievements - Array of achievement objects
 */
function showAchievementsDialog(projectName, achievements = []) {
    const dialog = document.getElementById('achievements-dialog');
    const dialogTitle = document.getElementById('achievements-dialog-title');
    const dialogContent = document.getElementById('achievements-dialog-content');

    dialogTitle.textContent = `${projectName} - Achievements 🏆`;

    if (!achievements || achievements.length === 0) {
        dialogContent.innerHTML = `
            <div class="achievements-empty">
                <p>No achievements yet.</p>
                <p style="font-size: 0.9rem; color: #666; margin-top: 1rem;">
                    Keep improving accessibility to unlock achievements!
                </p>
            </div>
        `;
    } else {
        dialogContent.innerHTML = `
            <div class="achievements-list">
                ${achievements.map(achievement => `
                    <div class="achievement-item">
                        <div class="achievement-header">
                            <span class="achievement-icon">${getAchievementIcon(achievement.type)}</span>
                            <div class="achievement-text">
                                <h3>${getAchievementDescription(achievement)}</h3>
                                <p class="achievement-dates">
                                    ${formatAchievementDate(achievement.fromDate)} → ${formatAchievementDate(achievement.toDate)}
                                </p>
                            </div>
                        </div>
                        <div class="achievement-duration">
                            ${calculateDaysBetween(achievement.fromDate, achievement.toDate)} days
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    dialog.setAttribute('aria-labelledby', 'achievements-dialog-title');
    dialog.showModal();
}

/**
 * Initialize achievements dialog event listeners
 */
function initializeAchievementsDialogs() {
    const achievementsDialog = document.getElementById('achievements-dialog');
    const closeButton = document.getElementById('close-achievements-dialog');

    if (!achievementsDialog || !closeButton) return;

    // Close button
    closeButton.addEventListener('click', () => {
        achievementsDialog.close();
    });

    // Click outside to close
    achievementsDialog.addEventListener('click', (e) => {
        if (e.target === achievementsDialog) {
            achievementsDialog.close();
        }
    });

    // Escape key to close
    achievementsDialog.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            achievementsDialog.close();
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAchievementsDialogs);
} else {
    initializeAchievementsDialogs();
}
