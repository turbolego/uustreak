const fs = require('fs');
const path = require('path');

function sanitizeFilename(name) {
    return name.replace(/[^a-z0-9_\-]/gi, '_');
}

function truncateIssueBody(body, maxLength = 65000) {
    if (body.length <= maxLength) {
        return body;
    }

    const notice = '\n\n---\n\n**⚠️ This issue body was truncated due to size limitations.**\n\nThe full report is available in the markdown file linked above.';
    return `${body.slice(0, maxLength - notice.length)}${notice}`;
}

function findLatestDatedDirectory(baseDir, excludes = new Set()) {
    if (!fs.existsSync(baseDir)) {
        return null;
    }

    const subdirs = fs.readdirSync(baseDir)
        .filter((name) => {
            const fullPath = path.join(baseDir, name);
            return fs.statSync(fullPath).isDirectory() && !excludes.has(name) && /^\d{4}-\d{2}-\d{2}$/.test(name);
        })
        .sort((left, right) => right.localeCompare(left));

    return subdirs.length > 0 ? path.join(baseDir, subdirs[0]) : null;
}

function getLatestSummaryFile(siteDir) {
    const summariesDir = path.join(siteDir, 'accessibility-reports', 'summaries');
    const latestDir = findLatestDatedDirectory(summariesDir);
    if (!latestDir) {
        return null;
    }

    const summaryPath = path.join(latestDir, 'daily_summary.json');
    return fs.existsSync(summaryPath) ? summaryPath : null;
}

function getLatestReportFiles(siteDir) {
    const latestDir = findLatestDatedDirectory(path.join(siteDir, 'accessibility-reports'), new Set(['summaries', 'archives']));
    if (!latestDir) {
        return [];
    }

    return fs.readdirSync(latestDir)
        .filter((fileName) => fileName.startsWith('violations-') && fileName.endsWith('.json'))
        .map((fileName) => path.join(latestDir, fileName));
}

function writeMarkdown(siteDir, projectName, content) {
    const markdownDir = path.join(siteDir, 'issues-markdown');
    fs.mkdirSync(markdownDir, { recursive: true });

    const fileName = `${sanitizeFilename(projectName)}.md`;
    fs.writeFileSync(path.join(markdownDir, fileName), content, 'utf8');
    return fileName;
}

function isRetryableGithubError(error) {
    const status = error?.status || error?.response?.status;
    const code = error?.code || error?.cause?.code;

    if (status === 429) {
        return true;
    }

    if (typeof status === 'number' && status >= 500) {
        return true;
    }

    return ['ETIMEDOUT', 'ECONNRESET', 'ECONNABORTED', 'EAI_AGAIN', 'ENOTFOUND'].includes(code);
}

async function withGithubRetries(core, operationName, fn, options = {}) {
    const maxAttempts = options.maxAttempts || 5;
    const baseDelayMs = options.baseDelayMs || 1000;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt >= maxAttempts || !isRetryableGithubError(error)) {
                throw error;
            }

            const delayMs = baseDelayMs * Math.pow(2, attempt - 1);
            core.warning(`${operationName} failed on attempt ${attempt}/${maxAttempts}: ${error.message}. Retrying in ${delayMs}ms...`);
            await new Promise((resolve) => setTimeout(resolve, delayMs));
        }
    }

    throw new Error(`${operationName} failed after ${maxAttempts} attempts`);
}

async function loadIssuesByTitle(github, context, core, labels) {
    const issues = await withGithubRetries(core, `list issues for labels=${labels}`, () =>
        github.paginate(github.rest.issues.listForRepo, {
            owner: context.repo.owner,
            repo: context.repo.repo,
            state: 'all',
            labels,
            per_page: 100,
        })
    );

    const byTitle = new Map();
    for (const issue of issues) {
        if (!issue || !issue.title || issue.pull_request) {
            continue;
        }
        if (!byTitle.has(issue.title)) {
            byTitle.set(issue.title, issue);
        }
    }
    return byTitle;
}

function writeMarkdownIndex(siteDir) {
    const markdownDir = path.join(siteDir, 'issues-markdown');
    if (!fs.existsSync(markdownDir)) {
        return;
    }

    const entries = fs.readdirSync(markdownDir)
        .filter((name) => name.endsWith('.md'))
        .sort();
    fs.writeFileSync(path.join(markdownDir, 'index.json'), JSON.stringify(entries), 'utf8');
}

module.exports = async function updateIssuesFromSite({ github, context, core, siteDir, siteBaseUrl }) {
    const summaryIssuesByTitle = await loadIssuesByTitle(github, context, core, 'wcag-summary');
    const violationIssuesByTitle = await loadIssuesByTitle(github, context, core, 'wcag-violation');

    const summaryFile = getLatestSummaryFile(siteDir);
    if (summaryFile) {
        const summary = JSON.parse(fs.readFileSync(summaryFile, 'utf8'));
        const body = [
            '## WCAG Daily Summary Report',
            '',
            `**Date:** ${summary.date}`,
            `**Total Projects Scanned:** ${summary.total_projects}`,
            `**Total Violations Found:** ${summary.total_violations}`,
            `**Projects with Violations:** ${summary.projects_with_violations}`,
            '',
            '### Summary Statistics:',
            '',
            ...Object.entries(summary.summary_stats || {}).map(([key, value]) => `- **${key}:** ${value}`),
            '',
            '### Project Details:',
            '',
            ...(summary.projects || []).map((project) => [
                `#### ${project.name}`,
                `- **URL:** [${project.url}](${project.url})`,
                `- **Total Violations:** ${project.total_violations}`,
                `- **Status:** ${project.status}`,
                ...(project.violations_by_impact ? Object.entries(project.violations_by_impact).map(([impact, count]) => `- **${impact}:** ${count}`) : []),
                '',
            ]).flat(),
        ].join('\n');

        const existingSummaryIssue = summaryIssuesByTitle.get('WCAG Daily Summary Report');
        if (existingSummaryIssue) {
            const updatedSummaryIssue = await withGithubRetries(core, `update summary issue #${existingSummaryIssue.number}`, () =>
                github.rest.issues.update({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    issue_number: existingSummaryIssue.number,
                    body,
                    state: 'open',
                })
            );
            summaryIssuesByTitle.set('WCAG Daily Summary Report', updatedSummaryIssue.data || existingSummaryIssue);
        } else {
            const createdSummaryIssue = await withGithubRetries(core, 'create summary issue', () =>
                github.rest.issues.create({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    title: 'WCAG Daily Summary Report',
                    body,
                    labels: ['wcag-summary', 'automated-report'],
                })
            );
            summaryIssuesByTitle.set('WCAG Daily Summary Report', createdSummaryIssue.data);
        }
    } else {
        core.info('No daily summary file found in the built site output.');
    }

    const processedProjects = new Set();
    for (const reportPath of getLatestReportFiles(siteDir)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        if (!report || typeof report !== 'object' || !Array.isArray(report.violations) || !report.project) {
            continue;
        }

        if (processedProjects.has(report.project)) {
            continue;
        }

        const violationsWithCount = report.violations.filter((violation) => violation && typeof violation === 'object' && violation.violation_count > 0);
        if (violationsWithCount.length === 0) {
            const emptyTitle = `[${report.project}] WCAG Violations Report`;
            const existingViolationIssue = violationIssuesByTitle.get(emptyTitle);
            if (existingViolationIssue && existingViolationIssue.state !== 'closed') {
                const closedIssue = await withGithubRetries(core, `close issue #${existingViolationIssue.number}`, () =>
                    github.rest.issues.update({
                        owner: context.repo.owner,
                        repo: context.repo.repo,
                        issue_number: existingViolationIssue.number,
                        state: 'closed',
                    })
                );
                violationIssuesByTitle.set(emptyTitle, closedIssue.data || { ...existingViolationIssue, state: 'closed' });
            }
            processedProjects.add(report.project);
            continue;
        }

        const markdownContent = [
            `# WCAG Violations Report for ${report.project}`,
            '',
            `**Timestamp:** ${report.timestamp}`,
            `**URL:** [${report.url}](${report.url})`,
            `**Total Violations:** ${report.total_violations}`,
            '',
            '## Violation Details',
            '',
            ...violationsWithCount.map((violation) => [
                `### ${violation.help || 'Violation'}`,
                '',
                `- **Impact:** ${violation.impact || 'N/A'}`,
                `- **Description:** ${violation.description || 'N/A'}`,
                `- **Help URL:** ${violation.helpUrl || 'N/A'}`,
                `- **Tags:** ${violation.tags ? violation.tags.join(', ') : 'N/A'}`,
                `- **Count:** ${violation.violation_count}`,
                '',
                '#### Affected Elements:',
                '',
                ...(violation.nodes || []).map((node) => `- \`${(node.target || []).join(', ')}\``),
                '',
            ]).flat(),
        ].join('\n');

        const markdownFile = writeMarkdown(siteDir, report.project, markdownContent);
        const markdownUrl = `${siteBaseUrl.replace(/\/$/, '')}/issues-markdown/${markdownFile}`;
        const issueBody = truncateIssueBody([
            `## WCAG Violations Report for ${report.project}`,
            '',
            `📥 **[Download Full Report (Markdown)](${markdownUrl})**`,
            '',
            `**Timestamp:** ${report.timestamp}`,
            `**URL:** [${report.url}](${report.url})`,
            `**Total Violations:** ${report.total_violations}`,
            '',
            '### Violation Details:',
            '',
            ...violationsWithCount.map((violation) => [
                `- **Impact:** ${violation.impact || 'N/A'}`,
                `- **Description:** ${violation.description || 'N/A'}`,
                `- **Help:** ${violation.help || 'N/A'}`,
                `- **Help URL:** ${violation.helpUrl || 'N/A'}`,
                `- **Tags:** ${violation.tags ? violation.tags.join(', ') : 'N/A'}`,
                `- **Count:** ${violation.violation_count}`,
                '- **Affected Elements:**',
                ...(violation.nodes || []).map((node) => `  - \`${(node.target || []).join(', ')}\``),
                '',
            ]).flat(),
        ].join('\n'));

        const labels = new Set(['wcag-violation', 'automated-report']);
        for (const violation of violationsWithCount) {
            for (const tag of violation.tags || []) {
                labels.add(tag);
            }
        }

        const title = `[${report.project}] WCAG Violations Report`;
        const existingIssue = violationIssuesByTitle.get(title);
        if (existingIssue) {
            const updatedIssue = await withGithubRetries(core, `update issue #${existingIssue.number}`, () =>
                github.rest.issues.update({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    issue_number: existingIssue.number,
                    body: issueBody,
                    state: 'open',
                    labels: Array.from(labels),
                })
            );
            violationIssuesByTitle.set(title, updatedIssue.data || existingIssue);
        } else {
            const createdIssue = await withGithubRetries(core, `create issue for ${report.project}`, () =>
                github.rest.issues.create({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    title,
                    body: issueBody,
                    labels: Array.from(labels),
                })
            );
            violationIssuesByTitle.set(title, createdIssue.data);
        }

        processedProjects.add(report.project);
    }

    writeMarkdownIndex(siteDir);
    core.info(`Processed ${processedProjects.size} project issues from ${siteDir}`);
};