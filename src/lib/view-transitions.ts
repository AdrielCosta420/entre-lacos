/**
 * Names for cross-document view transitions (rules in global.css). The
 * browser animates an element from one page to the next only when both pages
 * give it the same name, so names come from here instead of being assembled
 * in each template.
 */

/**
 * The cover that travels from a review card into the review page.
 *
 * A name must be a valid CSS identifier and unique on the page. Review ids
 * come from file names, which may carry punctuation, so every character
 * outside letters, digits and hyphens becomes `_<hex code point>_`. The
 * underscore is escaped too, which keeps distinct ids distinct.
 */
export function coverTransitionName(reviewId: string): string {
  const escaped = reviewId.replace(
    /[^\p{L}\p{N}-]/gu,
    // The `u` flag matches whole code points, so codePointAt(0) is defined.
    (char) => `_${char.codePointAt(0)!.toString(16)}_`,
  );
  return `cover-${escaped}`;
}
