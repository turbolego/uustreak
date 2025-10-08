// Explicitly assign functions to window object to ensure global availability
// Loading overlay HTML template
const loadingHTML = `
    <div id="loading-container" class="loading-overlay">
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <div class="loading-text">Laster rapporter...</div>
            <div class="loading-progress">
                <div class="progress-bar">
                    <div id="progress-fill"></div>
                </div>
                <div id="progress-text">0%</div>
            </div>
        </div>
    </div>
`;

// Loading overlay styles
const loadingStyles = `
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .loading-content {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }

    .loading-text {
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }

    .progress-bar {
        height: 20px;
        background-color: #f3f3f3;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }

    #progress-fill {
        height: 100%;
        background-color: #3498db;
        width: 0%;
        transition: width 0.3s ease;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Initialize loading overlay
function initializeLoading() {
    const styleEl = document.createElement('style');
    styleEl.textContent = loadingStyles;
    document.head.appendChild(styleEl);

    const loadingEl = document.createElement('div');
    loadingEl.innerHTML = loadingHTML;
    document.body.appendChild(loadingEl);

    return loadingEl.firstElementChild;
}

// Update progress bar
function updateProgress(current, total) {
    const percentage = Math.round((current / total) * 100);
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent = `${percentage}%`;
}

// Ensure functions are accessible globally
window.initializeLoading = initializeLoading;
window.updateProgress = updateProgress;
