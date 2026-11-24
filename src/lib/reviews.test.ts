import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { byNewestFirst, countByAuthor, estimateReadingMinutes, isPublished } from './reviews.ts';

const review = (draft: boolean, publishedAt: string) => ({
  data: { draft, publishedAt: new Date(publishedAt) },
});

describe('isPublished', () => {
  it('hides drafts', () => {
    assert.equal(isPublished(review(true, '2026-11-20')), false);
  });

  it('shows reviews that are not drafts', () => {
    assert.equal(isPublished(review(false, '2026-11-20')), true);
  });
});

describe('byNewestFirst', () => {
  it('puts the most recent review first', () => {
    const older = review(false, '2026-10-01');
    const newer = review(false, '2026-11-15');
    assert.deepEqual([older, newer].sort(byNewestFirst), [newer, older]);
  });
});

describe('estimateReadingMinutes', () => {
  it('estimates at 200 words per minute', () => {
    assert.equal(estimateReadingMinutes('palavra '.repeat(1000)), 5);
  });

  it('never shows less than one minute', () => {
    assert.equal(estimateReadingMinutes('texto curto'), 1);
    assert.equal(estimateReadingMinutes(''), 1);
  });
});

describe('countByAuthor', () => {
  const by = (id: string) => ({ data: { author: { id } } });

  it('counts reviews per author id', () => {
    const counts = countByAuthor([by('ana'), by('bia'), by('ana')]);
    assert.equal(counts.get('ana'), 2);
    assert.equal(counts.get('bia'), 1);
  });

  it('has no entry for an author without reviews', () => {
    assert.equal(countByAuthor([by('ana')]).get('carla'), undefined);
  });
});
