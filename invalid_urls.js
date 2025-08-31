/**
 * Functions for handling invalid URLs reports
 */

/**
 * Fetch invalid URLs for a specific date
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Object|null>} - The invalid URLs report or null if not found
 */
async function fetchInvalidUrls(date) {
    try {
        // Build path to the invalid URLs file for the selected date
        const filePath = `historical-data/invalid-urls/invalid_urls_${date}.json`;
        
        const response = await fetch(filePath);
        if (!response.ok) {
            console.error(`Failed to fetch invalid URLs: ${response.statusText}`);
            return null;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching invalid URLs:', error);
        return null;
    }
}

/**
 * Expand all collapsible lists in the invalid URLs dialog
 */
function expandAllInvalidUrlLists() {
    const details = document.querySelectorAll('#invalid-urls-dialog-content details');
    details.forEach(detail => {
        detail.setAttribute('open', 'true');
    });
}

/**
 * Download the invalid URLs data as a JSON file
 * @param {Object} data - The invalid URLs data to download
 * @param {string} date - Date in YYYY-MM-DD format
 */
function downloadInvalidUrls(data, date) {
    try {
        // Convert the data object to a JSON string
        const jsonString = JSON.stringify(data, null, 2);
        
        // Create a Blob with the JSON data
        const blob = new Blob([jsonString], { type: 'application/json' });
        
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
        
        // Create a temporary link element for downloading
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = `invalid_urls_${date}.json`;
        
        // Trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        // Clean up
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading invalid URLs data:', error);
        alert('Could not download invalid URLs data. See console for details.');
    }
}

/**
 * Group invalid URLs by source page
 * @param {Array} invalidUrls - Array of invalid URL objects
 * @returns {Object} - Object with source pages as keys and arrays of invalid URLs as values
 */
function groupInvalidUrlsBySource(invalidUrls) {
    const grouped = {};
    
    invalidUrls.forEach(item => {
        const source = item.source_page || 'Unknown Source';
        
        if (!grouped[source]) {
            grouped[source] = [];
        }
        
        grouped[source].push(item);
    });
    
    return grouped;
}

/**
 * Display the invalid URLs in a dialog
 * @param {Array} invalidUrls - Array of invalid URL objects
 * @param {string} date - Date of the report
 */
function showInvalidUrlsDialog(invalidUrls, date) {
    const dialog = document.getElementById('invalid-urls-dialog');
    const dialogTitle = document.getElementById('invalid-urls-dialog-title');
    const dialogContent = document.getElementById('invalid-urls-dialog-content');
    
    // Format the date for display
    const displayDate = new Date(date).toLocaleDateString();
    dialogTitle.textContent = `Døde lenker for ${displayDate}`;
    
    if (!invalidUrls || invalidUrls.length === 0) {
        dialogContent.innerHTML = '<p>Ingen døde lenker funnet for denne datoen.</p>';
        dialog.showModal();
        return;
    }
    
    // Group invalid URLs by source page
    const groupedUrls = groupInvalidUrlsBySource(invalidUrls);
    
    // Create header with count and buttons
    let content = `
        <div class="invalid-urls-header">
            <div class="invalid-urls-summary">Fant ${invalidUrls.length} døde lenker fra ${Object.keys(groupedUrls).length} sider</div>
            <div class="invalid-urls-actions">
                <button id="expand-all-invalid-urls" class="expand-all-button">Vis alle detaljer</button>
                <button id="download-invalid-urls" class="download-button">Last ned JSON</button>
            </div>
        </div>
    `;
    
    // Sort source pages alphabetically
    const sortedSources = Object.keys(groupedUrls).sort();
    
    // Generate HTML for each source page and its invalid URLs
    sortedSources.forEach(source => {
        const urls = groupedUrls[source];
        
        content += `
            <div class="invalid-urls-source">
                <h3>Kilde: <a href="${source}" target="_blank">${source}</a></h3>
                <details>
                    <summary>Inneholder ${urls.length} døde ${urls.length === 1 ? 'lenke' : 'lenker'} (klikk for å se)</summary>
                    <ul class="invalid-urls-list">
                        ${urls.map(item => `
                            <li class="invalid-url-item">
                                <div><strong>URL:</strong> <a class="invalid-link">${item.invalid_url}</a></div>
                                <div><strong>Feil:</strong> ${item.error || 'Ukjent feil'}</div>
                                <div><strong>Tidspunkt:</strong> ${new Date(item.timestamp).toLocaleString()}</div>
                            </li>
                        `).join('')}
                    </ul>
                </details>
            </div>
        `;
    });
    
    // Set the generated HTML content
    dialogContent.innerHTML = content;
    
    // Add event listeners for buttons
    const expandAllButton = document.getElementById('expand-all-invalid-urls');
    if (expandAllButton) {
        expandAllButton.addEventListener('click', expandAllInvalidUrlLists);
    }
    
    const downloadButton = document.getElementById('download-invalid-urls');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => downloadInvalidUrls(invalidUrls, date));
    }
    
    // Show the dialog
    dialog.showModal();
}

/**
 * Button click handler for showing invalid URLs
 */
async function viewInvalidUrls() {
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
        
        // Fetch the invalid URLs for the current date
        const invalidUrls = await fetchInvalidUrls(formattedDate);
        
        // Show the invalid URLs dialog
        showInvalidUrlsDialog(invalidUrls, formattedDate);
    } catch (error) {
        console.error('Error viewing invalid URLs:', error);
        alert('Kunne ikke laste døde lenker. Se konsollen for detaljer.');
    }
}

// Expose functions globally
window.viewInvalidUrls = viewInvalidUrls;
window.fetchInvalidUrls = fetchInvalidUrls;
window.showInvalidUrlsDialog = showInvalidUrlsDialog;
