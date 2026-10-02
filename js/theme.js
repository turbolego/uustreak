// Light/dark mode: follows the OS setting (prefers-color-scheme) until the user picks a mode.
// Loaded in <head> so data-theme is set before first paint (no flash of the wrong theme).
(function () {
    const STORAGE_KEY = 'uustreak-theme';
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function storedTheme() {
        try {
            const value = localStorage.getItem(STORAGE_KEY);
            return value === 'light' || value === 'dark' ? value : null;
        } catch {
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            if (theme) localStorage.setItem(STORAGE_KEY, theme);
            else localStorage.removeItem(STORAGE_KEY);
        } catch {
            // Storage may be unavailable (private mode); the choice then lasts for this page view.
        }
    }

    function systemTheme() {
        return systemDark.matches ? 'dark' : 'light';
    }

    function updateButton() {
        const button = document.getElementById('theme-toggle');
        if (!button) return;
        const isDark = root.dataset.theme === 'dark';
        button.setAttribute('aria-pressed', String(isDark));
        const icon = button.querySelector('.theme-toggle-icon');
        if (icon) icon.textContent = isDark ? '🌙' : '☀️';
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;
        updateButton();
    }

    applyTheme(storedTheme() || systemTheme());

    systemDark.addEventListener('change', () => {
        if (!storedTheme()) applyTheme(systemTheme());
    });

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('theme-toggle');
        if (!button) return;
        updateButton();
        button.addEventListener('click', () => {
            const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
            // Choosing the same mode as the OS clears the override, so OS changes are followed again.
            storeTheme(next === systemTheme() ? null : next);
            applyTheme(next);
        });
    });
})();
