/**
 * A book without a cover image gets a typographic cover in one of these
 * bookcloth tones (styles in BookCover.astro). The tone comes from the review
 * id, so a book keeps its color on every page and build, and a shelf of
 * generated covers isn't a single flat color. Two hues are left out on
 * purpose: wine, because the lead feature sits on a wine field where a wine
 * book would vanish; and rose, which is reserved for the highlighter.
 */
export const COVER_TONES = ['linen', 'paper', 'ink'] as const;
export type CoverTone = (typeof COVER_TONES)[number];

export function coverTone(id: string): CoverTone {
  let hash = 0;
  for (const char of id) {
    hash = (hash * 31 + char.codePointAt(0)!) >>> 0;
  }
  return COVER_TONES[hash % COVER_TONES.length]!;
}
