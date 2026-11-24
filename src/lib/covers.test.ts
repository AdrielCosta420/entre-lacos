import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { COVER_TONES, coverTone } from './covers.ts';

describe('coverTone', () => {
  it('always gives the same book the same tone', () => {
    assert.equal(coverTone('o-alienista'), coverTone('o-alienista'));
  });

  it('only returns known tones', () => {
    for (const id of ['a', 'dom-casmurro', 'memórias-póstumas', '']) {
      assert.ok(COVER_TONES.includes(coverTone(id)));
    }
  });

  it('varies between books, so a shelf of generated covers is not one color', () => {
    const ids = Array.from({ length: 30 }, (_, i) => `resenha-${i}`);
    const tones = new Set(ids.map(coverTone));
    assert.equal(tones.size, COVER_TONES.length);
  });
});
