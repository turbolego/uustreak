const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.join(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');

test('skills index advertises an immutable archive with an integrity digest', () => {
    const index = JSON.parse(read('.well-known/agent-skills/index.json'));
    assert.equal(index.$schema, 'https://schemas.agentskills.io/discovery/0.2.0/schema.json');
    assert.equal(index.skills.length, 1);
    const skill = index.skills[0];
    assert.equal(skill.name, 'wcag-skill');
    assert.equal(skill.type, 'archive');
    assert.ok(skill.description.length > 0);
    assert.match(skill.url, /^https:\/\/codeload\.github\.com\/turbolego\/wcag-skill\/tar\.gz\/[a-f0-9]{40}$/);
    assert.match(skill.digest, /^sha256:[a-f0-9]{64}$/);
});

test('all crawler groups retain open access and explicit usage preferences', () => {
    const lines = read('robots.txt').split(/\r?\n/).filter((line) => line && !line.startsWith('#'));
    const firstDirective = lines.findIndex((line) => !line.startsWith('User-agent:'));
    assert.ok(firstDirective > 0);
    const agents = lines.slice(0, firstDirective);
    for (const agent of ['*', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Google-Extended']) {
        assert.ok(agents.includes(`User-agent: ${agent}`));
    }
    assert.ok(lines.includes('Allow: /'));
    assert.ok(lines.includes('Content-Signal: ai-train=yes, search=yes, ai-input=yes'));
    assert.ok(!lines.some((line) => line.startsWith('Disallow:')));
    assert.ok(!lines.slice(firstDirective).some((line) => line.startsWith('User-agent:')));
});

test('homepage discovery links resolve to published source files', () => {
    const head = read('index.html').split('</head>')[0];
    for (const file of ['llms.txt', '.well-known/ai-catalog.json', '.well-known/agent-skills/index.json']) {
        assert.ok(head.includes(`<link rel="describedby" href="${file}"`));
        assert.ok(fs.statSync(path.join(root, file)).isFile());
    }
    assert.ok(read('llms.txt').includes('https://uustreak.no/.well-known/agent-skills/index.json'));
});
