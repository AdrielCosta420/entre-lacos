import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULTS,
  TEXT_SCALES,
  isDefault,
  parseSettings,
  scaleLabel,
  stepScale,
} from './reading-settings.ts';

describe('parseSettings', () => {
  it('returns the defaults when nothing is stored', () => {
    assert.deepEqual(parseSettings(null), DEFAULTS);
  });

  it('reads valid stored settings', () => {
    const raw = JSON.stringify({ scale: 3, contrast: true, spacing: true, motion: false });
    assert.deepEqual(parseSettings(raw), { scale: 3, contrast: true, spacing: true, motion: false });
  });

  it('keeps the valid fields when one is broken', () => {
    const raw = JSON.stringify({ scale: 99, contrast: 'sim', spacing: true });
    assert.deepEqual(parseSettings(raw), { ...DEFAULTS, spacing: true });
  });

  it('falls back to the defaults on text that is not JSON', () => {
    assert.deepEqual(parseSettings('{quebrado'), DEFAULTS);
    assert.deepEqual(parseSettings('"texto"'), DEFAULTS);
  });
});

describe('stepScale', () => {
  it('moves one step up or down', () => {
    assert.equal(stepScale(DEFAULTS, 1).scale, DEFAULTS.scale + 1);
    assert.equal(stepScale(DEFAULTS, -1).scale, DEFAULTS.scale - 1);
  });

  it('stops at both ends', () => {
    const last = TEXT_SCALES.length - 1;
    assert.equal(stepScale({ ...DEFAULTS, scale: last }, 1).scale, last);
    assert.equal(stepScale({ ...DEFAULTS, scale: 0 }, -1).scale, 0);
  });

  it('leaves the other settings alone', () => {
    const settings = { ...DEFAULTS, contrast: true };
    assert.equal(stepScale(settings, 1).contrast, true);
  });
});

describe('scaleLabel', () => {
  it('shows the scale as a whole percentage', () => {
    assert.equal(scaleLabel(DEFAULTS.scale), '100%');
    assert.equal(scaleLabel(TEXT_SCALES.indexOf(1.125)), '113%');
  });
});

describe('isDefault', () => {
  it('is true only when nothing was changed', () => {
    assert.equal(isDefault(DEFAULTS), true);
    assert.equal(isDefault({ ...DEFAULTS, motion: true }), false);
  });
});
