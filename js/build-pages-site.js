const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

function log(message) {
    console.log(`[build-pages-site] ${message}`);
}

function resolvePath(value, fallback) {
    return path.resolve(value || fallback);
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function removeIfExists(targetPath) {
    if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true, force: true });
    }
}

function normalizeRelative(filePath) {
    return filePath.split(path.sep).join('/');
}

function isSameOrNestedPath(parentPath, candidatePath) {
    const relativePath = path.relative(parentPath, candidatePath);
    return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

function copyFile(sourcePath, targetPath) {
    ensureDir(path.dirname(targetPath));
    fs.copyFileSync(sourcePath, targetPath);
}

function copyRecursive(sourcePath, targetPath, filter = () => true) {
    const stats = fs.statSync(sourcePath);
    if (!filter(sourcePath, stats)) {
        return;
    }

    if (stats.isDirectory()) {
        ensureDir(targetPath);
        for (const entry of fs.readdirSync(sourcePath)) {
            copyRecursive(path.join(sourcePath, entry), path.join(targetPath, entry), filter);
        }
        return;
    }

    copyFile(sourcePath, targetPath);
}

function listFilesRecursive(baseDir, matcher) {
    if (!baseDir || !fs.existsSync(baseDir)) {
        return [];
    }

    const files = [];

    function visit(currentDir) {
        for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
                visit(fullPath);
                continue;
            }

            if (!matcher || matcher(fullPath, entry.name)) {
                files.push(fullPath);
            }
        }
    }

    visit(baseDir);
    return files;
}

function listDirectoriesRecursive(baseDir, matcher) {
    if (!baseDir || !fs.existsSync(baseDir)) {
        return [];
    }

    const dirs = [];

    function visit(currentDir) {
        for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
            const fullPath = path.join(currentDir, entry.name);
            if (!entry.isDirectory()) {
                continue;
            }

            if (!matcher || matcher(fullPath, entry.name)) {
                dirs.push(fullPath);
            }

            visit(fullPath);
        }
    }

    visit(baseDir);
    return dirs;
}

function parseReportDate(fileName) {
    const match = fileName.match(/-(\d{4}-\d{2}-\d{2})T/);
    return match ? match[1] : null;
}

function parseSummaryDate(relativePath) {
    const match = normalizeRelative(relativePath).match(/(?:^|\/)(\d{4}-\d{2}-\d{2})\/[^/]+\.json$/);
    return match ? match[1] : null;
}

function parseProjectAndCount(fileName) {
    const projectMatch = fileName.match(/^violations-(.+?)-\d{4}-\d{2}-\d{2}T/);
    const countMatch = fileName.match(/-count-(\d+)\.json$/);
    if (!projectMatch) {
        return null;
    }

    return {
        project: projectMatch[1],
        count: countMatch ? Number.parseInt(countMatch[1], 10) : -1,
    };
}

function readJson(filePath, fallback) {
    if (!fs.existsSync(filePath)) {
        return fallback;
    }

    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        log(`Failed to parse JSON from ${filePath}: ${error.message}`);
        return fallback;
    }
}

function writeJson(filePath, value) {
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, JSON.stringify(value), 'utf8');
}

function writeRelativeIndex(baseDir, outputFilePath, matcher) {
    if (!fs.existsSync(baseDir)) {
        removeIfExists(outputFilePath);
        return;
    }

    const entries = listFilesRecursive(baseDir, matcher)
        .map((filePath) => normalizeRelative(path.relative(baseDir, filePath)))
        .sort();
    writeJson(outputFilePath, entries);
}

function hasFiles(dirPath) {
    return fs.existsSync(dirPath) && fs.readdirSync(dirPath).length > 0;
}

function createPlaceholder(targetDir, currentDate) {
    ensureDir(targetDir);
    const placeholderPath = path.join(targetDir, 'placeholder.json');
    const placeholder = {
        date: currentDate,
        status: 'no_violations_found',
        message: 'No accessibility violations were detected or tests did not complete',
        timestamp: new Date().toISOString(),
    };
    fs.writeFileSync(placeholderPath, JSON.stringify(placeholder, null, 2), 'utf8');
}

function listExistingReportDates(outputDir) {
    const reportsRoot = path.join(outputDir, 'accessibility-reports');
    if (!fs.existsSync(reportsRoot)) {
        return [];
    }

    return fs.readdirSync(reportsRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(entry.name))
        .map((entry) => entry.name)
        .sort();
}

function overlayStaticSite(sourceDir, outputDir) {
    const rootEntries = fs.readdirSync(sourceDir, { withFileTypes: true });
    const allowedRootFiles = new Set([
        'README.md',
        'site.webmanifest',
        'styles.css',
        'projects.json',
        'results.json',
        'test-results.json',
        'favicon.ico',
    ]);

    for (const entry of rootEntries) {
        const sourcePath = path.join(sourceDir, entry.name);
        const targetPath = path.join(outputDir, entry.name);

        if (entry.isFile()) {
            const shouldCopy = entry.name.endsWith('.html') || entry.name.endsWith('.ico') || allowedRootFiles.has(entry.name);
            if (shouldCopy) {
                copyFile(sourcePath, targetPath);
            }
            continue;
        }

        if (entry.isDirectory() && (entry.name === 'assets' || entry.name === 'js')) {
            removeIfExists(targetPath);
            copyRecursive(sourcePath, targetPath);
        }
    }
}

function buildArchive(sourceOutputDir, date) {
    const reportsDir = path.join(sourceOutputDir, 'accessibility-reports', date);
    const summariesDir = path.join(sourceOutputDir, 'accessibility-reports', 'summaries', date);
    const archiveDir = path.join(sourceOutputDir, 'accessibility-reports', 'archives');
    ensureDir(archiveDir);

    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `uustreak-${date}-`));
    try {
        if (fs.existsSync(reportsDir)) {
            for (const reportFile of listFilesRecursive(reportsDir, (fullPath, name) => name.endsWith('.json'))) {
                copyFile(reportFile, path.join(tempDir, path.basename(reportFile)));
            }
        }

        if (fs.existsSync(summariesDir)) {
            for (const summaryFile of listFilesRecursive(summariesDir, (fullPath, name) => name.endsWith('.json'))) {
                copyFile(summaryFile, path.join(tempDir, path.basename(summaryFile)));
            }
        }

        const jsonFiles = listFilesRecursive(tempDir, (fullPath, name) => name.endsWith('.json'));
        const archivePath = path.join(archiveDir, `reports_${date}.tar.gz`);
        const manifestPath = path.join(archiveDir, `reports_${date}.manifest`);

        if (jsonFiles.length === 0) {
            removeIfExists(archivePath);
            removeIfExists(manifestPath);
            return null;
        }

        execFileSync('tar', ['-czf', archivePath, '-C', tempDir, '.'], { stdio: 'inherit' });
        const manifest = execFileSync('tar', ['-tzf', archivePath], { encoding: 'utf8' })
            .split(/\r?\n/)
            .filter(Boolean)
            .sort();
        fs.writeFileSync(manifestPath, `${manifest.join('\n')}\n`, 'utf8');

        return {
            date,
            filename: path.basename(archivePath),
            size: String(fs.statSync(archivePath).size),
            fileCount: manifest.length,
        };
    } finally {
        removeIfExists(tempDir);
    }
}

function updateArchiveIndex(outputDir, touchedDates) {
    const archiveIndexPath = path.join(outputDir, 'accessibility-reports', 'archives', 'archive_index.json');
    const existing = readJson(archiveIndexPath, []);
    const retainedEntries = Array.isArray(existing)
        ? existing.filter((entry) => entry && !touchedDates.has(entry.date))
        : [];

    for (const date of Array.from(touchedDates).sort()) {
        const archiveEntry = buildArchive(outputDir, date);
        if (archiveEntry) {
            retainedEntries.push(archiveEntry);
        }
    }

    retainedEntries.sort((left, right) => right.date.localeCompare(left.date));
    writeJson(archiveIndexPath, retainedEntries);
}

function updateReportList(outputDir, touchedDates) {
    const reportListPath = path.join(outputDir, 'historical-data', 'report-list.json');
    const existing = readJson(reportListPath, []);
    const nextEntries = new Set();

    if (Array.isArray(existing)) {
        for (const entry of existing) {
            if (typeof entry !== 'string') {
                continue;
            }

            const keepEntry = !Array.from(touchedDates).some((date) => entry.includes(`/${date}/`));
            if (keepEntry) {
                nextEntries.add(entry);
            }
        }
    }

    for (const date of touchedDates) {
        const reportDir = path.join(outputDir, 'accessibility-reports', date);
        if (!fs.existsSync(reportDir)) {
            continue;
        }

        for (const reportFile of listFilesRecursive(reportDir, (fullPath, name) => name.startsWith('violations-') && name.endsWith('.json') && !name.includes('-FAILED'))) {
            nextEntries.add(normalizeRelative(path.relative(outputDir, reportFile)));
        }
    }

    writeJson(reportListPath, Array.from(nextEntries).sort());
}

function updateStreakIndex(outputDir, touchedDates) {
    const streakIndexPath = path.join(outputDir, 'historical-data', 'streak-index.json');
    const streakIndex = readJson(streakIndexPath, {});
    const dates = Array.from(touchedDates);

    for (const project of Object.keys(streakIndex)) {
        for (const date of dates) {
            delete streakIndex[project][date];
        }
    }

    for (const date of dates) {
        const reportDir = path.join(outputDir, 'accessibility-reports', date);
        if (!fs.existsSync(reportDir)) {
            continue;
        }

        for (const reportFile of listFilesRecursive(reportDir, (fullPath, name) => name.startsWith('violations-') && name.endsWith('.json') && !name.includes('-FAILED'))) {
            const parsed = parseProjectAndCount(path.basename(reportFile));
            if (!parsed) {
                continue;
            }

            if (!streakIndex[parsed.project]) {
                streakIndex[parsed.project] = {};
            }

            const existingCount = streakIndex[parsed.project][date];
            if (existingCount === undefined || parsed.count < existingCount) {
                streakIndex[parsed.project][date] = parsed.count;
            }
        }
    }

    writeJson(streakIndexPath, streakIndex);
}

function main() {
    const sourceDir = resolvePath(process.env.SOURCE_DIR, process.cwd());
    const seedDir = process.env.GH_PAGES_SEED_DIR ? resolvePath(process.env.GH_PAGES_SEED_DIR) : null;
    const artifactsDir = process.env.ARTIFACTS_DIR ? resolvePath(process.env.ARTIFACTS_DIR) : null;
    const mergedSummaryDir = process.env.MERGED_SUMMARY_DIR ? resolvePath(process.env.MERGED_SUMMARY_DIR) : null;
    const invalidUrlsDir = process.env.INVALID_URLS_DIR ? resolvePath(process.env.INVALID_URLS_DIR) : null;
    const outputDir = resolvePath(process.env.PAGES_OUTPUT_DIR, path.join(sourceDir, 'site-output'));
    const currentDate = process.env.CURRENT_DATE || new Date().toISOString().split('T')[0];
    const forceFullMetadataRebuild = process.env.FORCE_FULL_METADATA_REBUILD === 'true';

    removeIfExists(outputDir);
    ensureDir(outputDir);

    if (seedDir && fs.existsSync(seedDir)) {
        log(`Seeding site output from ${seedDir}`);
        for (const entry of fs.readdirSync(seedDir)) {
            if (entry === '.git') {
                continue;
            }

             const seedEntryPath = path.join(seedDir, entry);
             if (isSameOrNestedPath(seedEntryPath, outputDir)) {
                 log(`Skipping seed entry that would recurse into output: ${seedEntryPath}`);
                 continue;
             }

            copyRecursive(
                seedEntryPath,
                path.join(outputDir, entry),
                (candidatePath) => path.basename(candidatePath) !== '.git' && !isSameOrNestedPath(candidatePath, outputDir)
            );
        }
    }

    removeIfExists(path.join(outputDir, '.gitignore'));
    overlayStaticSite(sourceDir, outputDir);

    const touchedDates = new Set();
    const clearedReportDates = new Set();
    const clearedSummaryDates = new Set();

    if (artifactsDir && fs.existsSync(artifactsDir)) {
        const violationFiles = listFilesRecursive(
            artifactsDir,
            (fullPath, name) => !isSameOrNestedPath(outputDir, fullPath) && name.startsWith('violations-') && name.endsWith('.json')
        );
        log(`Found ${violationFiles.length} violation files in artifacts`);

        for (const reportFile of violationFiles) {
            const fileName = path.basename(reportFile);
            const date = parseReportDate(fileName) || currentDate;
            const targetDir = path.join(outputDir, 'accessibility-reports', date);

            if (!clearedReportDates.has(date)) {
                removeIfExists(targetDir);
                ensureDir(targetDir);
                clearedReportDates.add(date);
            }

            copyFile(reportFile, path.join(targetDir, fileName));
            touchedDates.add(date);
        }
    }

    if (mergedSummaryDir && fs.existsSync(mergedSummaryDir)) {
        const summaryFiles = listFilesRecursive(mergedSummaryDir, (fullPath, name) => name.endsWith('.json'));
        log(`Found ${summaryFiles.length} merged summary files`);

        for (const summaryFile of summaryFiles) {
            const relativePath = path.relative(mergedSummaryDir, summaryFile);
            const date = parseSummaryDate(relativePath);
            if (!date) {
                continue;
            }

            const targetDir = path.join(outputDir, 'accessibility-reports', 'summaries', date);
            if (!clearedSummaryDates.has(date)) {
                removeIfExists(targetDir);
                ensureDir(targetDir);
                clearedSummaryDates.add(date);
            }

            copyFile(summaryFile, path.join(targetDir, path.basename(summaryFile)));
            touchedDates.add(date);
        }
    } else if (artifactsDir && fs.existsSync(artifactsDir)) {
        const fallbackSummaries = listFilesRecursive(
            artifactsDir,
            (fullPath, name) => !isSameOrNestedPath(outputDir, fullPath) && name.endsWith('.json') && normalizeRelative(fullPath).includes('/accessibility-reports/summaries/')
        );
        for (const summaryFile of fallbackSummaries) {
            const relativePath = normalizeRelative(path.relative(artifactsDir, summaryFile));
            const date = parseSummaryDate(relativePath);
            if (!date) {
                continue;
            }

            const targetDir = path.join(outputDir, 'accessibility-reports', 'summaries', date);
            if (!clearedSummaryDates.has(date)) {
                removeIfExists(targetDir);
                ensureDir(targetDir);
                clearedSummaryDates.add(date);
            }

            copyFile(summaryFile, path.join(targetDir, path.basename(summaryFile)));
            touchedDates.add(date);
        }
    }

    if (invalidUrlsDir && fs.existsSync(invalidUrlsDir)) {
        const targetDir = path.join(outputDir, 'historical-data', 'invalid-urls');
        ensureDir(targetDir);
        for (const invalidFile of listFilesRecursive(invalidUrlsDir, (fullPath, name) => name.startsWith('invalid_urls_') && name.endsWith('.json'))) {
            copyFile(invalidFile, path.join(targetDir, path.basename(invalidFile)));
        }
        writeRelativeIndex(targetDir, path.join(targetDir, 'index.json'), (fullPath, name) => name.startsWith('invalid_urls_') && name.endsWith('.json'));
    }

    if (artifactsDir && fs.existsSync(artifactsDir)) {
        const playwrightRoot = path.join(outputDir, 'playwright-reports', currentDate);
        const reportDirs = listDirectoriesRecursive(
            artifactsDir,
            (fullPath, name) => !isSameOrNestedPath(outputDir, fullPath) && name === 'playwright-report'
        );

        if (reportDirs.length > 0) {
            removeIfExists(playwrightRoot);
            ensureDir(playwrightRoot);
        }

        let index = 0;
        for (const reportDir of reportDirs) {
            const relativeParent = normalizeRelative(path.relative(artifactsDir, path.dirname(reportDir)));
            const candidateName = relativeParent && relativeParent !== '.'
                ? relativeParent.replace(/[^a-zA-Z0-9._/-]+/g, '_').replace(/\//g, '__')
                : `report-${index + 1}`;
            const targetDir = path.join(playwrightRoot, candidateName);
            copyRecursive(reportDir, targetDir);
            index += 1;
        }

        writeRelativeIndex(
            path.join(outputDir, 'playwright-reports'),
            path.join(outputDir, 'playwright-reports', 'index.json'),
            (fullPath, name) => name.endsWith('.html')
        );
    }

    const currentDateDir = path.join(outputDir, 'accessibility-reports', currentDate);
    if (!hasFiles(currentDateDir)) {
        createPlaceholder(currentDateDir, currentDate);
        touchedDates.add(currentDate);
    }

    ensureDir(path.join(outputDir, 'historical-data'));
    ensureDir(path.join(outputDir, 'accessibility-reports', 'archives'));

    const reportListPath = path.join(outputDir, 'historical-data', 'report-list.json');
    const streakIndexPath = path.join(outputDir, 'historical-data', 'streak-index.json');
    const archiveIndexPath = path.join(outputDir, 'accessibility-reports', 'archives', 'archive_index.json');
    const shouldRebuildAllMetadata = forceFullMetadataRebuild
        || !fs.existsSync(reportListPath)
        || !fs.existsSync(streakIndexPath)
        || !fs.existsSync(archiveIndexPath);

    if (shouldRebuildAllMetadata) {
        for (const date of listExistingReportDates(outputDir)) {
            touchedDates.add(date);
        }
        log(`Rebuilding metadata from all existing report dates (${touchedDates.size} dates)`);
    }

    if (touchedDates.size > 0) {
        updateArchiveIndex(outputDir, touchedDates);
        updateReportList(outputDir, touchedDates);
        updateStreakIndex(outputDir, touchedDates);
    } else {
        if (!fs.existsSync(archiveIndexPath)) {
            writeJson(archiveIndexPath, []);
        }
    }

    const archivesDir = path.join(outputDir, 'accessibility-reports', 'archives');
    const archiveCount = listFilesRecursive(archivesDir, (fullPath, name) => name.endsWith('.tar.gz')).length;
    log(`Built Pages site in ${outputDir} with ${touchedDates.size} touched dates and ${archiveCount} archives`);
}

main();