/**
 * Turns the value the CMS saves for a reference into an Astro entry id.
 *
 * `.pages.yml` tells Pages CMS to save the referenced file's path
 * ("src/content/integrantes/maria-eduarda.md"), while Astro's glob loader
 * identifies entries by file name without extension ("maria-eduarda").
 * Normalizing here keeps the content readable either way, including
 * hand-written files that use the bare id.
 */
export function toEntryId(value: string): string {
  const fileName = value.trim().split('/').pop() ?? '';
  return fileName.replace(/\.mdx?$/i, '').toLowerCase();
}
