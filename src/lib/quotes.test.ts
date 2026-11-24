import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { firstQuote } from './quotes.ts';

describe('firstQuote', () => {
  it('returns the text of the first blockquote', () => {
    const body = 'Intro.\n\n> Primeira citação.\n\nMeio.\n\n> Segunda citação.';
    assert.equal(firstQuote(body), 'Primeira citação.');
  });

  it('joins a quote that spans several lines', () => {
    const body = '> Uma frase que\n> continua aqui.\n\nDepois.';
    assert.equal(firstQuote(body), 'Uma frase que continua aqui.');
  });

  it('strips inline markdown', () => {
    const body = '> Um *destaque*, um **negrito** e um [link](https://exemplo.com).';
    assert.equal(firstQuote(body), 'Um destaque, um negrito e um link.');
  });

  it('accepts a marker without a following space and indented markers', () => {
    assert.equal(firstQuote('>colado'), 'colado');
    assert.equal(firstQuote('   > recuado'), 'recuado');
  });

  it('returns undefined when there is no quote or it is empty', () => {
    assert.equal(firstQuote('Texto sem citação.'), undefined);
    assert.equal(firstQuote('>\n>   \n\nTexto.'), undefined);
    assert.equal(firstQuote(''), undefined);
  });
});
