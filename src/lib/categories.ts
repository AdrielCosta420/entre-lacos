/**
 * The review archive is organized in sections, one per category. Authors
 * type the category freely in the CMS, so the same section may arrive as
 * "Saúde mental", "saúde  mental" or "Saude-mental"; grouping by the anchor
 * slug merges those into one section instead of splitting it (and instead of
 * emitting duplicate anchor ids).
 */

/** Anchor id for a category section: "Saúde mental" → "categoria-saude-mental". */
export function categoryAnchor(category: string): string {
  const slug = category
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `categoria-${slug || 'sem-nome'}`;
}

export type CategoryGroup<T> = { category: string; anchor: string; reviews: T[] };

/**
 * Sections in alphabetical order (pt-BR). Each keeps the input order of its
 * items (newest first, as pages receive them) and takes its display name
 * from the first one. `categoryOf` reads the category from whatever shape the
 * caller has (a review, a review with its author...).
 */
export function groupByCategory<T>(
  items: T[],
  categoryOf: (item: T) => string,
): CategoryGroup<T>[] {
  const groups = new Map<string, CategoryGroup<T>>();
  for (const item of items) {
    const category = categoryOf(item);
    const anchor = categoryAnchor(category);
    const group = groups.get(anchor);
    if (group) {
      group.reviews.push(item);
    } else {
      groups.set(anchor, { category: category.trim(), anchor, reviews: [item] });
    }
  }
  return [...groups.values()].sort((a, b) => a.category.localeCompare(b.category, 'pt-BR'));
}
