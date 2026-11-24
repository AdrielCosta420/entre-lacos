import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { categoryAnchor, groupByCategory } from './categories.ts';

const review = (id: string, category: string) => ({ id, data: { category } });
const byCategory = (r: ReturnType<typeof review>) => r.data.category;

describe('categoryAnchor', () => {
  it('makes a readable, accent-free anchor id', () => {
    assert.equal(categoryAnchor('Saúde mental'), 'categoria-saude-mental');
  });

  it('collapses punctuation and spaces into single hyphens', () => {
    assert.equal(categoryAnchor('  Infância & Desenvolvimento '), 'categoria-infancia-desenvolvimento');
  });

  it('never returns an empty slug', () => {
    assert.equal(categoryAnchor('!!!'), 'categoria-sem-nome');
  });
});

describe('groupByCategory', () => {
  it('keeps the input order inside each section', () => {
    const groups = groupByCategory([review('a', 'Relações'), review('b', 'Relações')], byCategory);
    assert.deepEqual(
      groups[0]?.reviews.map((r) => r.id),
      ['a', 'b'],
    );
  });

  it('orders sections alphabetically, accents included', () => {
    const groups = groupByCategory([
      review('a', 'Saúde mental'),
      review('b', 'Ética'),
      review('c', 'Autoconhecimento'),
      review('d', 'Relações'),
    ], byCategory);
    assert.deepEqual(
      groups.map((g) => g.category),
      ['Autoconhecimento', 'Ética', 'Relações', 'Saúde mental'],
    );
  });

  it('merges the same category typed differently, naming it after the first review', () => {
    const groups = groupByCategory([
      review('newest', 'Saúde mental'),
      review('older', 'saúde  mental'),
      review('oldest', 'Saude-mental'),
    ], byCategory);
    assert.equal(groups.length, 1);
    assert.equal(groups[0]?.category, 'Saúde mental');
    assert.equal(groups[0]?.anchor, 'categoria-saude-mental');
    assert.equal(groups[0]?.reviews.length, 3);
  });
});
