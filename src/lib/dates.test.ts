import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate, isoDate } from './dates.ts';

// Same parsing the content schema does (z.coerce.date on "YYYY-MM-DD").
const contentDate = new Date('2026-11-20');

describe('formatDate', () => {
  it('keeps the calendar day written in the content, in any timezone', () => {
    assert.equal(formatDate(contentDate), '20 de novembro de 2026');
  });
});

describe('isoDate', () => {
  it('returns the date part only', () => {
    assert.equal(isoDate(contentDate), '2026-11-20');
  });
});
