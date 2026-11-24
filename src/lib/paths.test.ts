import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { joinBase } from './paths.ts';

describe('joinBase', () => {
  it('keeps root-relative paths when the site lives at the domain root', () => {
    assert.equal(joinBase('/', 'resenhas/'), '/resenhas/');
  });

  it('prefixes the repository path on project sites', () => {
    assert.equal(joinBase('/entre-lacos/', 'resenhas/'), '/entre-lacos/resenhas/');
  });

  it('never produces double slashes, whatever the caller passes', () => {
    assert.equal(joinBase('/entre-lacos/', '/resenhas/'), '/entre-lacos/resenhas/');
    assert.equal(joinBase('/entre-lacos', 'resenhas/'), '/entre-lacos/resenhas/');
  });

  it('points to the home page for an empty path', () => {
    assert.equal(joinBase('/entre-lacos/', ''), '/entre-lacos/');
    assert.equal(joinBase('', ''), '/');
  });
});
