import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { plural } from './plural.ts';

describe('plural', () => {
  it('uses the singular for exactly one', () => {
    assert.equal(plural(1, 'resenha', 'resenhas'), '1 resenha');
  });

  it('uses the plural for zero and for more than one', () => {
    assert.equal(plural(0, 'resenha', 'resenhas'), '0 resenhas');
    assert.equal(plural(4, 'resenha', 'resenhas'), '4 resenhas');
  });
});
