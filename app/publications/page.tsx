"use client";

import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";
import { SiGooglescholar } from "react-icons/si";
import { useMemo, useState } from "react";
import UpSetFilter from "@/components/UpSetFilter";
import { withTopics } from "@/components/publication-utils";

const YEAR_ORDER = [
  2026, 2025, 2024, 2023, 2022,
  2021, 2020, 2019, 2018, 2017,
];

function YearRibbon({ year }: { year: number }) {
  return (
    <div className="relative mb-2">
      <div className="rounded-t-2xl bg-gradient-to-r from-[#841617] to-[#a8201a] px-6 py-3 shadow-md">
        <h2 className="text-xl font-semibold text-white">
          {year}
        </h2>
      </div>

      <div className="absolute -bottom-2 left-0 h-0 w-0 border-l-[16px] border-t-[16px] border-l-transparent border-t-[#5a0f10]" />
    </div>
  );
}

export default function PublicationsPage() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[] | null>(null);
  const [previewSlugs, setPreviewSlugs] = useState<string[] | null>(null);
  const activeSlugs = previewSlugs ?? selectedSlugs;

  const dedupedPublications = useMemo(() => {
    const seen = new Set<string>();
    const dups: string[] = [];
    const out: typeof publications = [];

    for (const p of publications) {
      if (seen.has(p.slug)) {
        dups.push(p.slug);
        continue;
      }

      seen.add(p.slug);
      out.push(p);
    }

    if (dups.length) {
      console.warn(
        "Duplicate publication slugs detected (keeping first):",
        Array.from(new Set(dups))
      );
    }

    return out;
  }, []);


  const allPublications = useMemo(
    () => withTopics(dedupedPublications),
    [dedupedPublications]
  );

  // The UpSet matrix is the only publications filter.
  const filtered = useMemo(() => {
    if (!activeSlugs) return allPublications;
    return allPublications.filter((p) => activeSlugs.includes(p.slug));
  }, [activeSlugs, allPublications]);

  // Only papers with mapped topics appear in the UpSet intersections.
  const topicPublications = useMemo(
    () => allPublications.filter((publication) => publication.topics.length > 0),
    [allPublications]
  );

  const isPreviewing = previewSlugs !== null;
  const isFiltered = activeSlugs !== null;

  const clearFilters = () => {
    setSelectedSlugs(null);
    setPreviewSlugs(null);
  };

  const byYear = YEAR_ORDER.map((year) => ({
    year,
    items: filtered.filter((p) => p.year === year),
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Page heading */}
      <section className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#841617] sm:text-4xl [text-wrap:balance]">
          Publications
        </h1>

        <a
          href="https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
          className="text-blue-600"
          title="Google Scholar"
        >
          <SiGooglescholar size={38} />
        </a>
      </section>


      {/* UpSet keyword filters and original Portfolio publication cards */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[290px_minmax(0,1fr)]">
          <UpSetFilter
            publications={topicPublications}
            selectedSlugs={selectedSlugs}
            onSelectionChange={setSelectedSlugs}
            onPreviewChange={setPreviewSlugs}
          />

          <section className="min-w-0">
            {isFiltered && (
              <div className="mb-3 flex items-center justify-between border-b border-neutral-100 pb-2 text-xs text-neutral-600">
                <span>
                  {isPreviewing ? "Previewing" : "Showing"} {filtered.length} of{" "}
                  {allPublications.length} publications
                </span>
                {!isPreviewing && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="font-medium text-[#841617] hover:underline"
                  >
                    Show all
                  </button>
                )}
              </div>
            )}

            {filtered.length === 0 && (
              <p className="py-4 text-sm text-neutral-500">
                No publications match the selected filters.
              </p>
            )}

            {byYear.map(({ year, items }) =>
              items.length > 0 ? (
                <section key={year} className="mb-7 last:mb-0">
                  <YearRibbon year={year} />

                  {/* Existing Portfolio publication cards are unchanged */}
                  <div className="divide-y divide-neutral-100">
                    {items.map((pub) => (
                      <PublicationCard
                        key={`${pub.slug}-${pub.year}`}
                        pub={pub}
                      />
                    ))}
                  </div>
                </section>
              ) : null
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
