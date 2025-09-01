// Functions for handling tag summary reports

// Check if running in a module context
const isModuleContext = typeof initializeLoading === 'undefined' && typeof updateProgress === 'undefined';

// Import functions from loading.js if we're using ES modules
if (isModuleContext) {
    console.error('Loading functions not found. Make sure loading.js is loaded before summary.js');
}

/**
 * Fetch the latest tag summary for a specific date
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Object|null>} - The summary report or null if not found
 */
async function fetchTagSummary(date) {
    try {
        // Build path to the summary file for the selected date - use consistent daily_summary.json filename
        const summaryPath = `accessibility-reports/summaries/${date}/daily_summary.json`;

        try {
            const response = await fetch(summaryPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch summary: ${response.statusText}`);
            }

            const summary = await response.json();
            return summary;
        } catch (e) {
            console.error('Failed to fetch tag summary:', e);
            return null;
        }

    } catch (error) {
        console.error('Error fetching tag summary:', error);
        return null;
    }
}

/**
 * Download the tag summary as a JSON file
 * @param {Object} summary - The summary object to download
 * @param {string} date - Date in YYYY-MM-DD format
 */
function downloadTagSummary(summary, date) {
    try {
        // Convert the summary object to a JSON string
        const jsonString = JSON.stringify(summary, null, 2);

        // Create a Blob with the JSON data
        const blob = new Blob([jsonString], {type: 'application/json'});

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a temporary link element for downloading
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = `daily_summary_${date}.json`;

        // Trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading tag summary:', error);
        alert('Could not download tag summary. See console for details.');
    }
}

/**
 * Expand all collapsible tag lists in the summary dialog
 */
function expandAllTagLists() {
    const details = document.querySelectorAll('#summary-dialog-content details');
    details.forEach(detail => {
        detail.setAttribute('open', 'true');
    });
}

/**
 * Toggle between Tags and Rule IDs view
 */
function toggleSummaryView() {
    const viewButton = document.getElementById('toggle-view-button');
    const summaryContent = document.getElementById('summary-dialog-content');
    const summaryData = summaryContent.dataset.summaryData;
    const summaryDate = summaryContent.dataset.summaryDate;

    if (!summaryData) {
        return; // No data available
    }

    const data = JSON.parse(summaryData);
    const date = summaryDate;

    // Toggle between tags and rule_ids
    const currentView = viewButton.dataset.view || 'tags';
    const newView = currentView === 'tags' ? 'rule_ids' : 'tags';

    // Update button text and data attribute
    viewButton.textContent = newView === 'tags' ? 'View Rule IDs' : 'View Tags';
    viewButton.dataset.view = newView;

    // Re-render the content with the selected view
    renderSummaryContent(data, date, newView);
}

/**
 * Render summary content based on selected view
 * @param {Object} summary - The summary object
 * @param {string} date - Date of the summary
 * @param {string} view - The view to render ('tags' or 'rule_ids')
 */
function renderSummaryContent(summary, date, view = 'tags') {
    const dialogContent = document.getElementById('summary-dialog-content');
    const dialogTitle = document.getElementById('summary-dialog-title');

    // Store the data and date for toggling views
    dialogContent.dataset.summaryData = JSON.stringify(summary);
    dialogContent.dataset.summaryDate = date;

    // Get the display date
    const displayDate = new Date(date).toLocaleDateString();

    // Update dialog title based on view
    dialogTitle.textContent = view === 'tags' ?
        `Tag Summary for ${displayDate}` :
        `Rule IDs Summary for ${displayDate}`;

    // Get the correct data section based on view
    const items = view === 'tags' ? summary.tags : summary.rule_ids;
    const itemLabel = view === 'tags' ? 'tag' : 'rule_id';

    if (!items || items.length === 0) {
        dialogContent.innerHTML = `<p>No ${view.replace('_', ' ')} data available for this date.</p>`;
        return;
    }

    // Create header with buttons
    let content = `
        <div class="tag-summary-header">
            <div class="tag-summary-date">Summary for ${displayDate}</div>
            <div class="tag-summary-actions">
                <button id="expand-all-tags" class="expand-all-button">Expand All</button>
                <button id="toggle-view-button" data-view="${view}" class="view-toggle-button">
                    ${view === 'tags' ? 'View Rule IDs' : 'View Tags'}
                </button>
                <button id="download-summary" class="download-button">Download Summary</button>
            </div>
        </div>
    `;

    // Sort items alphabetically
    items.sort((a, b) => a[itemLabel].localeCompare(b[itemLabel]));

    // Generate HTML for each item with collapsible URL list
    items.forEach(item => {
        const itemValue = item[itemLabel];
        let extraInfo = '';

        // Add description and help for rule IDs
        if (view === 'rule_ids' && item.description) {
            extraInfo = `<p class="rule-description">${item.description}</p>`;
            if (item.help) {
                extraInfo += `<p class="rule-help">Help: ${item.help}</p>`;
            }
        }

        content += `
            <div class="tag-summary-item">
                <h3>${itemValue}</h3>
                ${extraInfo}
                <details>
                    <summary>Found on ${item.urls.length} page${item.urls.length !== 1 ? 's' : ''} (click to view)</summary>
                    <ul class="tag-urls-list">
                        ${item.urls.map(url => `<li><a href="${url}" target="_blank">${url}</a></li>`).join('')}
                    </ul>
                </details>
            </div>
        `;
    });

    // Set the generated HTML content
    dialogContent.innerHTML = content;

    // Add event listeners for buttons
    const expandAllButton = document.getElementById('expand-all-tags');
    if (expandAllButton) {
        expandAllButton.addEventListener('click', expandAllTagLists);
    }

    const toggleViewButton = document.getElementById('toggle-view-button');
    if (toggleViewButton) {
        toggleViewButton.addEventListener('click', toggleSummaryView);
    }

    const downloadButton = document.getElementById('download-summary');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => downloadTagSummary(summary, date));
    }
}

/**
 * Display the tag summary in a dialog
 * @param {Object} summary - The tag summary object
 * @param {string} date - The date of the summary
 */
function showTagSummaryDialog(summary, date) {
    const dialog = document.getElementById('summary-dialog');

    if (!summary) {
        const dialogContent = document.getElementById('summary-dialog-content');
        dialogContent.innerHTML = '<p>No summary data available for this date.</p>';
        dialog.showModal();
        return;
    }

    // Ensure we have both tags and rule_ids sections
    summary.tags = summary.tags || [];
    summary.rule_ids = summary.rule_ids || [];

    // Render the content with tags view by default
    renderSummaryContent(summary, date, 'tags');

    // Show the dialog
    dialog.showModal();
}

/**
 * Button click handler for showing tag summary
 */
async function viewTagSummary() {
    try {
        // Get the current date from the UI
        const currentDateElement = document.getElementById('current-date');

        if (!currentDateElement || !currentDateElement.textContent) {
            throw new Error('Current date not found in UI');
        }

        // Find the date in availableDates that corresponds to our current position
        const formattedDate = availableDates[availableDates.indexOf(currentDate)];

        if (!formattedDate) {
            throw new Error('Cannot determine the current date in YYYY-MM-DD format');
        }

        // Fetch the tag summary
        const summary = await fetchTagSummary(formattedDate);

        // Show the summary dialog
        showTagSummaryDialog(summary, formattedDate);
    } catch (error) {
        console.error('Error viewing tag summary:', error);
        alert('Could not load tag summary. See console for details.');
    }
}

// Expose functions globally
window.viewTagSummary = viewTagSummary;
window.fetchTagSummary = fetchTagSummary;
window.showTagSummaryDialog = showTagSummaryDialog;
window.expandAllTagLists = expandAllTagLists;
window.downloadTagSummary = downloadTagSummary;
window.toggleSummaryView = toggleSummaryView;
