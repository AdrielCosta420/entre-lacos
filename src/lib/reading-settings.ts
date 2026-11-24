/**
 * The reader's own settings from the reading panel (BaseLayout): text size,
 * high contrast, wider line spacing, fewer animations. Stored as JSON in
 * localStorage, which may hold anything (an older version, a broken write),
 * so parsing keeps every valid field and defaults the rest.
 *
 * The inline script in BaseLayout's <head> applies the stored settings before
 * the page paints; it uses STORAGE_KEY and TEXT_SCALES from here.
 */
export const STORAGE_KEY = 'entre-lacos:leitura';

/** Multipliers of the reader's own base font size (browser setting × this). */
export const TEXT_SCALES = [0.9, 1, 1.125, 1.25, 1.4] as const;

export type ReadingSettings = {
  /** Index into TEXT_SCALES. */
  scale: number;
  contrast: boolean;
  spacing: boolean;
  motion: boolean;
};

export const DEFAULTS: ReadingSettings = {
  scale: TEXT_SCALES.indexOf(1),
  contrast: false,
  spacing: false,
  motion: false,
};

export function parseSettings(raw: string | null): ReadingSettings {
  let stored: unknown;
  try {
    stored = raw === null ? null : JSON.parse(raw);
  } catch {
    // Not JSON (a broken or foreign write): start from the defaults.
    return { ...DEFAULTS };
  }
  if (typeof stored !== 'object' || stored === null) return { ...DEFAULTS };

  const value = stored as Record<string, unknown>;
  const flag = (key: keyof ReadingSettings) =>
    typeof value[key] === 'boolean' ? (value[key] as boolean) : DEFAULTS[key];
  const scale =
    Number.isInteger(value.scale) && TEXT_SCALES[value.scale as number] !== undefined
      ? (value.scale as number)
      : DEFAULTS.scale;

  return {
    scale,
    contrast: flag('contrast') as boolean,
    spacing: flag('spacing') as boolean,
    motion: flag('motion') as boolean,
  };
}

export function stepScale(settings: ReadingSettings, delta: 1 | -1): ReadingSettings {
  const scale = Math.min(TEXT_SCALES.length - 1, Math.max(0, settings.scale + delta));
  return { ...settings, scale };
}

export function scaleLabel(scaleIndex: number): string {
  return `${Math.round((TEXT_SCALES[scaleIndex] ?? 1) * 100)}%`;
}

export function isDefault(settings: ReadingSettings): boolean {
  return (Object.keys(DEFAULTS) as (keyof ReadingSettings)[]).every(
    (key) => settings[key] === DEFAULTS[key],
  );
}
