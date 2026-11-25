const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { registryRecords, assessProject } = require('./validate-brreg');

test('streams complete registry objects including nested structures', async t => {
    const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'brreg-test-'));
    t.after(() => fs.rm(directory, { recursive: true }));
    const input = path.join(directory, 'registry.json');
    await fs.writeFile(input, JSON.stringify([
        { organisasjonsnummer: '123456789', navn: 'FIRST', hjemmeside: 'example.no', nested: { list: [1, 2] } },
        { organisasjonsnummer: '987654321', navn: 'SECOND' },
    ]));
    const records = [];
    for await (const record of registryRecords(input)) records.push(record);
    assert.deepEqual(records.map(record => [record.organisasjonsnummer, record.navn]), [
        ['123456789', 'FIRST'], ['987654321', 'SECOND'],
    ]);
});

test('only confirms unique name-and-URL matches and never reassigns an existing number', () => {
    const project = { name: 'Example AS', baseURL: 'https://www.example.no/' };
    const record = { navn: 'EXAMPLE AS', hjemmeside: 'example.no', organisasjonsnummer: '123456789' };
    assert.equal(assessProject(project, [record]).status, 'confirmed');
    assert.equal(assessProject(project, [record, { ...record, organisasjonsnummer: '987654321' }]).status, 'review');
    assert.equal(assessProject(project, [{ ...record, hjemmeside: 'other.no' }]).status, 'review');
    assert.equal(assessProject(project, [{ ...record, navn: 'OTHER AS' }]).status, 'review');
    assert.equal(assessProject(project, [{ ...record, slettedato: '2025-01-01' }]).status, 'review');
    assert.equal(assessProject({ ...project, organisasjonsnummer: '987654321' }, [record]).status, 'number-not-found');
});
