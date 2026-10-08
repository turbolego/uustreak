// Explicitly assign functions to window object to ensure global availability
// Loading overlay HTML template
const loadingHTML = `
    <div id="loading-container" class="loading-overlay">
        <div class="loading-content" role="status" aria-live="polite">
            <div class="loading-spinner" aria-hidden="true"></div>
            <div class="loading-text">Laster rapporter...</div>
            <div class="loading-progress">
                <div class="progress-bar" aria-hidden="true">
                    <div id="progress-fill"></div>
                </div>
                <div id="progress-text">0%</div>
                <div id="progress-status" class="loading-status"></div>
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
        background: color-mix(in srgb, var(--color-bg) 90%, transparent);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .loading-content {
        text-align: center;
        padding: 2rem;
        background: var(--color-bg-secondary);
        color: var(--color-text);
        border-radius: 8px;
        border: 1px solid var(--color-border);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid var(--color-bg-alt3);
        border-top: 5px solid var(--color-accent);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }

    .loading-text {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: var(--color-text);
    }

    .progress-bar {
        height: 20px;
        background-color: var(--color-bg-alt3);
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }

    #progress-fill {
        height: 100%;
        background-color: var(--color-accent);
        width: 0%;
        transition: width 0.3s ease;
    }

    .loading-status {
        min-height: 1.2em;
        margin-top: 0.25rem;
        font-size: 0.9rem;
        opacity: 0.8;
    }

    /* Indeterminate stripe shown while work continues after downloads reach 100% */
    .loading-overlay.is-finishing #progress-fill {
        width: 100% !important;
        background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.25) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0.25) 75%, transparent 75%, transparent
        );
        background-size: 1.5rem 1.5rem;
        animation: progress-stripes 0.8s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @keyframes progress-stripes {
        from { background-position: 1.5rem 0; }
        to { background-position: 0 0; }
    }

    @media (prefers-reduced-motion: reduce) {
        .loading-spinner,
        .loading-overlay.is-finishing #progress-fill {
            animation-duration: 3s;
        }
    }
`;

function getLoadingOverlay() {
    return document.querySelector('.loading-overlay');
}

// Initialize (or reuse) the loading overlay and reset it to 0%
function initializeLoading() {
    if (!document.getElementById('loading-overlay-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'loading-overlay-styles';
        styleEl.textContent = loadingStyles;
        document.head.appendChild(styleEl);
    }

    let overlay = getLoadingOverlay();
    if (!overlay) {
        const loadingEl = document.createElement('div');
        loadingEl.innerHTML = loadingHTML.trim();
        overlay = loadingEl.firstElementChild;
        document.body.appendChild(overlay);
    }

    overlay.classList.remove('is-finishing');
    overlay.style.display = '';
    updateProgress(0, 1, '');
    return overlay;
}

// Update progress bar; optional message is shown below the percentage
function updateProgress(current, total, message) {
    const overlay = getLoadingOverlay();
    if (!overlay) return;

    const percentage = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
    overlay.querySelector('#progress-fill').style.width = `${percentage}%`;
    overlay.querySelector('#progress-text').textContent = `${percentage}%`;
    if (message !== undefined) {
        overlay.querySelector('#progress-status').textContent = message;
    }
}

// Switch to an indeterminate "still working" state for post-download processing
function setLoadingFinishing(message) {
    const overlay = getLoadingOverlay();
    if (!overlay) return;

    overlay.classList.add('is-finishing');
    overlay.querySelector('#progress-text').textContent = '100%';
    if (message !== undefined) {
        overlay.querySelector('#progress-status').textContent = message;
    }
}

function hideLoading() {
    const overlay = getLoadingOverlay();
    if (!overlay) return;

    overlay.classList.remove('is-finishing');
    overlay.style.display = 'none';
}

// Ensure functions are accessible globally
window.initializeLoading = initializeLoading;
window.updateProgress = updateProgress;
window.setLoadingFinishing = setLoadingFinishing;
window.hideLoading = hideLoading;
window.removeLoadingOverlay = hideLoading;
