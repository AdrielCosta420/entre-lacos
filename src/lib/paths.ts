/**
 * Joins the site's base path with an internal path.
 *
 * GitHub Pages serves project sites under `/<repo-name>/`, so every internal
 * link and public asset needs that prefix. The base is a parameter (not read
 * from `import.meta.env` here) so this stays testable outside Astro.
 */
export function joinBase(base: string, path: string): string {
  const trimmedBase = base.replace(/\/+$/, '');
  const trimmedPath = path.replace(/^\/+/, '');
  return `${trimmedBase}/${trimmedPath}`;
}
