const FILE_SYSTEM = {
    root: [
        { name: 'Uustreak App', icon: '📊', action: 'uustreak' },
        { name: 'README.md', icon: '📄', action: 'readme' },
        { name: 'GitHub Repo', icon: '🌐', action: 'github' },
        { name: 'start.html', icon: '▶', action: 'restart' },
    ],
    app: [
        { name: 'index.html', icon: '🖥️', action: 'uustreak' },
        { name: 'launch.html', icon: '🪟', action: 'launch' },
        { name: 'desktop.html', icon: '🪟', action: 'desktop' },
    ],
    docs: [
        { name: 'README.md', icon: '📄', action: 'readme' },
        { name: 'LICENSE', icon: '📜', action: 'docs' },
        { name: 'projects.json', icon: '🗂️', action: 'docs' },
    ],
    assets: [
        { name: 'assets/', icon: '🖼️', action: 'docs' },
        { name: 'js/', icon: '🧩', action: 'docs' },
        { name: 'styles.css', icon: '🎨', action: 'docs' },
        { name: 'favicon.ico', icon: '💿', action: 'docs' },
    ],
};

const APP_ACTIONS = {
    uustreak: {
        title: 'Uustreak App',
        html: `
            <h3>Uustreak App</h3>
            <p>The WCAG leaderboard lives in the existing site shell.</p>
            <button type="button" class="launch-button" data-external="https://turbolego.github.io/uustreak/">Launch Web App</button>
        `,
    },
    github: {
        title: 'GitHub Repository',
        html: `
            <h3>GitHub Repository</h3>
            <p>Open the project on GitHub.</p>
            <button type="button" class="launch-button" data-external="https://github.com/turbolego/uustreak">Open Repo</button>
        `,
    },
    readme: {
        title: 'README.md',
        html: `
            <h3>README.md</h3>
            <p>Open the project README in a new tab.</p>
            <button type="button" class="launch-button" data-external="README.md">Open README</button>
        `,
    },
    launch: {
        title: 'Launcher',
        html: `
            <h3>Launcher</h3>
            <p>Legacy disc launcher.</p>
        `,
    },
    desktop: {
        title: 'Windows 98 Desktop',
        html: `
            <h3>Windows 98 Desktop</h3>
            <p>The simulated shell is already running.</p>
        `,
    },
    docs: {
        title: 'File',
        html: `
            <h3>File</h3>
            <p>Browse the disc contents from the file explorer.</p>
        `,
    },
};

const windowElement = document.getElementById('main-window');
const windowContent = document.getElementById('window-content');
const windowTitle = document.getElementById('window-title');
const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');
const clockElement = document.getElementById('clock');
const fileGrid = document.getElementById('file-grid');
const fileTemplate = document.getElementById('file-template');
const dragHandle = windowElement?.querySelector('[data-drag-handle]');

let activeFolder = 'root';
let dragState = null;

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function updateClock() {
    clockElement.textContent = formatTime(new Date());
}

function toggleStart(forceState) {
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !startMenu.classList.contains('open');
    startMenu.classList.toggle('open', shouldOpen);
}

function openWindow(title, html) {
    windowTitle.textContent = title;
    windowContent.innerHTML = html;
    windowElement.classList.add('active');
}

function closeWindow() {
    windowElement.classList.remove('active');
}

function renderFiles(folderName) {
    activeFolder = folderName;
    const entries = FILE_SYSTEM[folderName] || FILE_SYSTEM.root;
    fileGrid.innerHTML = '';

    for (const entry of entries) {
        const item = fileTemplate.content.firstElementChild.cloneNode(true);
        item.querySelector('.file-icon').textContent = entry.icon;
        item.querySelector('.file-name').textContent = entry.name;
        item.addEventListener('click', () => openApp(entry.action));
        fileGrid.appendChild(item);
    }

    document.querySelectorAll('.tree-item').forEach((button) => {
        button.classList.toggle('active', button.dataset.folder === folderName);
    });
}

function openApp(app) {
    toggleStart(false);

    if (app === 'restart') {
        window.location.href = 'start.html';
        return;
    }

    if (app === 'computer') {
        windowElement.classList.add('active');
        windowTitle.textContent = 'My Computer';
        renderFiles(activeFolder);
        return;
    }

    const action = APP_ACTIONS[app] || APP_ACTIONS.docs;
    openWindow(action.title, action.html);

    const launchButton = windowContent.querySelector('[data-external]');
    if (launchButton) {
        launchButton.addEventListener('click', () => {
            const target = launchButton.dataset.external;
            if (target === 'README.md') {
                window.open('README.md', '_blank', 'noopener');
                return;
            }

            window.open(target, '_blank', 'noopener');
        });
    }
}

function setupDragging() {
    if (!dragHandle) {
        return;
    }

    dragHandle.addEventListener('pointerdown', (event) => {
        dragState = {
            offsetX: event.clientX - windowElement.offsetLeft,
            offsetY: event.clientY - windowElement.offsetTop,
        };
        dragHandle.setPointerCapture(event.pointerId);
    });

    dragHandle.addEventListener('pointermove', (event) => {
        if (!dragState) {
            return;
        }

        const maxLeft = window.innerWidth - windowElement.offsetWidth - 8;
        const maxTop = window.innerHeight - windowElement.offsetHeight - 50;
        const left = Math.min(Math.max(event.clientX - dragState.offsetX, 8), maxLeft);
        const top = Math.min(Math.max(event.clientY - dragState.offsetY, 8), maxTop);

        windowElement.style.left = `${left}px`;
        windowElement.style.top = `${top}px`;
    });

    dragHandle.addEventListener('pointerup', () => {
        dragState = null;
    });

    dragHandle.addEventListener('pointercancel', () => {
        dragState = null;
    });
}

document.getElementById('start-button').addEventListener('click', () => toggleStart());

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target instanceof HTMLElement) {
        const appButton = target.closest('[data-app]');
        if (appButton) {
            openApp(appButton.dataset.app);
            return;
        }

        const folderButton = target.closest('[data-folder]');
        if (folderButton) {
            renderFiles(folderButton.dataset.folder);
            return;
        }

        const actionButton = target.closest('[data-window-action]');
        if (actionButton) {
            const action = actionButton.dataset.windowAction;
            if (action === 'close') {
                closeWindow();
            }
            if (action === 'minimize') {
                windowElement.classList.remove('active');
            }
            return;
        }

        const externalButton = target.closest('[data-external]');
        if (externalButton) {
            const externalTarget = externalButton.dataset.external;
            if (externalTarget === 'README.md') {
                window.open('README.md', '_blank', 'noopener');
            } else {
                window.open(externalTarget, '_blank', 'noopener');
            }
            return;
        }
    }

    if (!event.target.closest('.start-menu') && !event.target.closest('#start-button')) {
        toggleStart(false);
    }
});

window.addEventListener('resize', () => {
    if (windowElement.classList.contains('active')) {
        const maxLeft = window.innerWidth - windowElement.offsetWidth - 8;
        const maxTop = window.innerHeight - windowElement.offsetHeight - 50;
        windowElement.style.left = `${Math.min(parseInt(windowElement.style.left || '180', 10), maxLeft)}px`;
        windowElement.style.top = `${Math.min(parseInt(windowElement.style.top || '84', 10), maxTop)}px`;
    }
});

startButton.addEventListener('click', () => toggleStart());
document.querySelectorAll('[data-app]').forEach((button) => {
    if (button.id !== 'start-button') {
        button.addEventListener('click', () => openApp(button.dataset.app));
    }
});

renderFiles(activeFolder);
updateClock();
setInterval(updateClock, 1000);
setupDragging();