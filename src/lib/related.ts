import { categoryAnchor } from './categories.ts';

/**
 * "Leituras que se ligam": other reviews linked to this one, for the end of a
 * review page. The strongest link comes first: the same category, then more
 * themes in common, then the same author; the newest first among equals.
 * Reviews linked by nothing are left out instead of padding the list.
 *
 * Authors type categories and themes freely, so both are compared through the
 * same normalization as the category archive ("Saúde mental", "saude mental").
 */
type Linkable = {
  id: string;
  data: {
    category: string;
    themes: string[];
    author: { id: string };
    publishedAt: Date;
  };
};

const normalize = categoryAnchor;

export function relatedReviews<T extends Linkable>(current: T, all: T[], limit = 3): T[] {
  const category = normalize(current.data.category);
  const themes = new Set(current.data.themes.map(normalize));

  return all
    .filter((other) => other.id !== current.id)
    .map((other) => ({
      other,
      sameCategory: normalize(other.data.category) === category ? 1 : 0,
      sharedThemes: other.data.themes.filter((theme) => themes.has(normalize(theme))).length,
      sameAuthor: other.data.author.id === current.data.author.id ? 1 : 0,
    }))
    .filter((link) => link.sameCategory || link.sharedThemes || link.sameAuthor)
    .sort(
      (a, b) =>
        b.sameCategory - a.sameCategory ||
        b.sharedThemes - a.sharedThemes ||
        b.sameAuthor - a.sameAuthor ||
        b.other.data.publishedAt.getTime() - a.other.data.publishedAt.getTime(),
    )
    .slice(0, limit)
    .map((link) => link.other);
}
