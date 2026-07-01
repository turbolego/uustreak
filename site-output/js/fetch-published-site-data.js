const fs = require('fs');
const path = require('path');

function log(message) {
    console.log(`[fetch-published-site-data] ${message}`);
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function normalizeRelative(filePath) {
    return filePath.split(path.sep).join('/');
}

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
}

async function fetchBinary(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    return Buffer.from(await response.arrayBuffer());
}

async function tryFetchJson(url) {
    try {
        return await fetchJson(url);
    } catch (error) {
        log(`Skipping missing JSON ${url}: ${error.message}`);
        return null;
    }
}

async function tryFetchBinary(url) {
    try {
        return await fetchBinary(url);
    } catch (error) {
        log(`Skipping missing file ${url}: ${error.message}`);
        return null;
    }
}

async function downloadRelativeFile(baseUrl, relativePath, targetDir) {
    const normalizedPath = relativePath.replace(/^\/+/, '');
    const targetPath = path.join(targetDir, normalizedPath);
    ensureDir(path.dirname(targetPath));

    const fileBuffer = await tryFetchBinary(`${baseUrl.replace(/\/$/, '')}/${normalizedPath}`);
    if (!fileBuffer) {
        return false;
    }

    fs.writeFileSync(targetPath, fileBuffer);
    return true;
}

async function main() {
    const baseUrl = process.env.SITE_BASE_URL;
    const outputDir = path.resolve(process.env.PAGES_SEED_DIR || 'pages-seed');
    if (!baseUrl) {
        throw new Error('SITE_BASE_URL is required');
    }

    ensureDir(outputDir);

    const reportList = await tryFetchJson(`${baseUrl.replace(/\/$/, '')}/historical-data/report-list.json`);
    if (Array.isArray(reportList)) {
        fs.mkdirSync(path.join(outputDir, 'historical-data'), { recursive: true });
        fs.writeFileSync(path.join(outputDir, 'historical-data', 'report-list.json'), JSON.stringify(reportList), 'utf8');
        for (const entry of reportList) {
            if (typeof entry === 'string') {
                await downloadRelativeFile(baseUrl, entry, outputDir);
            }
        }
        log(`Downloaded ${reportList.length} report JSON files from report-list.json`);
    }

    const streakIndex = await tryFetchJson(`${baseUrl.replace(/\/$/, '')}/historical-data/streak-index.json`);
    if (streakIndex) {
        ensureDir(path.join(outputDir, 'historical-data'));
        fs.writeFileSync(path.join(outputDir, 'historical-data', 'streak-index.json'), JSON.stringify(streakIndex), 'utf8');
    }

    const archiveIndex = await tryFetchJson(`${baseUrl.replace(/\/$/, '')}/accessibility-reports/archives/archive_index.json`);
    if (Array.isArray(archiveIndex)) {
        ensureDir(path.join(outputDir, 'accessibility-reports', 'archives'));
        fs.writeFileSync(path.join(outputDir, 'accessibility-reports', 'archives', 'archive_index.json'), JSON.stringify(archiveIndex), 'utf8');

        for (const entry of archiveIndex) {
            if (!entry || typeof entry.date !== 'string' || typeof entry.filename !== 'string') {
                continue;
            }

            await downloadRelativeFile(baseUrl, `accessibility-reports/archives/${entry.filename}`, outputDir);
            await downloadRelativeFile(baseUrl, `accessibility-reports/archives/reports_${entry.date}.manifest`, outputDir);
            await downloadRelativeFile(baseUrl, `accessibility-reports/summaries/${entry.date}/daily_summary.json`, outputDir);
        }
        log(`Downloaded ${archiveIndex.length} archive entries from archive_index.json`);
    }

    const optionalIndexes = [
        'historical-data/invalid-urls/index.json',
        'issues-markdown/index.json',
        'playwright-reports/index.json',
    ];

    for (const indexPath of optionalIndexes) {
        const indexJson = await tryFetchJson(`${baseUrl.replace(/\/$/, '')}/${indexPath}`);
        if (!Array.isArray(indexJson)) {
            continue;
        }

        ensureDir(path.join(outputDir, path.dirname(indexPath)));
        fs.writeFileSync(path.join(outputDir, indexPath), JSON.stringify(indexJson), 'utf8');
        for (const entry of indexJson) {
            if (typeof entry === 'string') {
                await downloadRelativeFile(baseUrl, normalizeRelative(path.join(path.dirname(indexPath), entry)), outputDir);
            }
        }
        log(`Downloaded ${indexJson.length} files listed in ${indexPath}`);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});