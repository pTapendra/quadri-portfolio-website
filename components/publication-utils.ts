
import {
  publications as publicationData,
} from "@/data/publications";

import {
  getPublicationTopics,
  type PublicationTopic,
} from "@/data/publication-topics";

export type Publication =
  (typeof publicationData)[number];

export type PublicationWithTopics =
  Publication & {
    topics: PublicationTopic[];
  };

export function withTopics(
  publications: readonly Publication[]
): PublicationWithTopics[] {
  return publications.map((publication) => ({
    ...publication,
    topics: getPublicationTopics(publication.slug),
  }));
}

export function groupPublicationsByYear(
  publications: PublicationWithTopics[]
) {
  const groups = new Map<
    number,
    PublicationWithTopics[]
  >();

  for (const publication of publications) {
    const year = Number(publication.year);
    const current = groups.get(year) ?? [];

    current.push(publication);
    groups.set(year, current);
  }

  return Array.from(groups.entries())
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, items]) => ({
      year,
      items,
    }));
}
