import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { coverTransitionName } from './view-transitions.ts';

describe('coverTransitionName', () => {
  it('prefixes a plain slug', () => {
    assert.equal(coverTransitionName('resenha-de-exemplo'), 'cover-resenha-de-exemplo');
  });

  it('keeps accented letters, which are valid in CSS identifiers', () => {
    assert.equal(coverTransitionName('coração'), 'cover-coração');
  });

  it('accepts an id that starts with a digit', () => {
    assert.equal(coverTransitionName('1984-george-orwell'), 'cover-1984-george-orwell');
  });

  it('escapes punctuation, spaces and underscores to code points', () => {
    assert.equal(coverTransitionName('a.b'), 'cover-a_2e_b');
    assert.equal(coverTransitionName('a b'), 'cover-a_20_b');
    assert.equal(coverTransitionName('a_b'), 'cover-a_5f_b');
  });

  it('keeps distinct ids distinct', () => {
    const ids = ['a.b', 'a_2e_b', 'a-b', 'a b'];
    const names = new Set(ids.map(coverTransitionName));
    assert.equal(names.size, ids.length);
  });

  it('only produces CSS identifier characters', () => {
    for (const id of ['livro: parte 2!', 'ação & reação', '“citação”']) {
      assert.match(coverTransitionName(id), /^[\p{L}\p{N}_-]+$/u);
    }
  });
});
