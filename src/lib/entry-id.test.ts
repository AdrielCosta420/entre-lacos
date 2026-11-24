import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { toEntryId } from './entry-id.ts';

describe('toEntryId', () => {
  it('extracts the id from the file path saved by the CMS', () => {
    assert.equal(toEntryId('src/content/integrantes/maria-eduarda.md'), 'maria-eduarda');
  });

  it('keeps a bare id untouched', () => {
    assert.equal(toEntryId('maria-eduarda'), 'maria-eduarda');
  });

  it('ignores surrounding whitespace and letter case', () => {
    assert.equal(toEntryId('  Maria-Eduarda.MD '), 'maria-eduarda');
  });
});
