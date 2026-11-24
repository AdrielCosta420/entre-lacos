import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { byNewestFirst, isPublished } from './reviews.ts';

export type Review = CollectionEntry<'resenhas'>;
export type Member = CollectionEntry<'integrantes'>;

/**
 * The only way pages read reviews. Filtering drafts here, once, means a new
 * page can't forget the rule and leak an unpublished review.
 */
export async function getPublishedReviews(): Promise<Review[]> {
  const reviews = await getCollection('resenhas', isPublished);
  return reviews.sort(byNewestFirst);
}

export async function getPublishedReviewsBy(memberId: string): Promise<Review[]> {
  const reviews = await getPublishedReviews();
  return reviews.filter((review) => review.data.author.id === memberId);
}

export async function getMembers(): Promise<Member[]> {
  const members = await getCollection('integrantes');
  return members.sort((a, b) => a.data.name.localeCompare(b.data.name, 'pt-BR'));
}

export type ReviewWithAuthor = { review: Review; author: Member };

/** Lookups are independent, so they run in parallel. Any missing author fails the build. */
export function withAuthors(reviews: Review[]): Promise<ReviewWithAuthor[]> {
  return Promise.all(
    reviews.map(async (review) => ({ review, author: await getReviewAuthor(review) })),
  );
}

export async function getReviewAuthor(review: Review): Promise<Member> {
  const member = await getEntry(review.data.author);
  if (!member) {
    // Fail the build loudly instead of publishing a review with no author.
    throw new Error(
      `Review "${review.id}" points to member "${review.data.author.id}", which does not exist.`,
    );
  }
  return member;
}
