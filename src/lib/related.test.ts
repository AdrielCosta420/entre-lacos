import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { relatedReviews } from './related.ts';

const review = (
  id: string,
  { category = 'Outra', themes = [] as string[], author = 'x', date = '2026-11-01' } = {},
) => ({ id, data: { category, themes, author: { id: author }, publishedAt: new Date(date) } });

const ids = (list: { id: string }[]) => list.map((r) => r.id);

describe('relatedReviews', () => {
  const current = review('atual', { category: 'Saúde mental', themes: ['luto', 'memória'], author: 'ana' });

  it('never lists the review itself', () => {
    assert.deepEqual(ids(relatedReviews(current, [current])), []);
  });

  it('ranks the same category first, then shared themes, then the same author', () => {
    const all = [
      review('autora', { author: 'ana' }),
      review('tema', { themes: ['luto'] }),
      review('categoria', { category: 'Saúde mental' }),
    ];
    assert.deepEqual(ids(relatedReviews(current, all)), ['categoria', 'tema', 'autora']);
  });

  it('puts more themes in common first', () => {
    const all = [review('um', { themes: ['luto'] }), review('dois', { themes: ['luto', 'memória'] })];
    assert.deepEqual(ids(relatedReviews(current, all)), ['dois', 'um']);
  });

  it('matches themes and categories typed differently', () => {
    const all = [review('variante', { category: 'saude  mental', themes: ['Memoria'] })];
    assert.deepEqual(ids(relatedReviews(current, all)), ['variante']);
  });

  it('lists the newest first among equally linked reviews', () => {
    const all = [
      review('antiga', { themes: ['luto'], date: '2026-01-01' }),
      review('nova', { themes: ['luto'], date: '2026-10-01' }),
    ];
    assert.deepEqual(ids(relatedReviews(current, all)), ['nova', 'antiga']);
  });

  it('leaves out reviews linked by nothing', () => {
    assert.deepEqual(ids(relatedReviews(current, [review('solta')])), []);
  });

  it('stops at the limit', () => {
    const all = ['a', 'b', 'c', 'd'].map((id) => review(id, { category: 'Saúde mental' }));
    assert.equal(relatedReviews(current, all).length, 3);
    assert.equal(relatedReviews(current, all, 2).length, 2);
  });
});
