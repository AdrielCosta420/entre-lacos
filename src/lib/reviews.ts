/**
 * Review rules that don't depend on Astro: whether a review is public, how
 * reviews are ordered, how long one takes to read. Typed structurally so they
 * work on real collection entries and on plain objects in tests.
 */

export function isPublished(review: { data: { draft: boolean } }): boolean {
  return !review.data.draft;
}

type Dated = { data: { publishedAt: Date } };

export function byNewestFirst(a: Dated, b: Dated): number {
  return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
}

const WORDS_PER_MINUTE = 200;

export function estimateReadingMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Published reviews per author id, for the contributor list. */
export function countByAuthor(
  reviews: { data: { author: { id: string } } }[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const review of reviews) {
    const id = review.data.author.id;
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return counts;
}
