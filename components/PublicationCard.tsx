"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getPublicationTopics,
  type PublicationTopic,
} from "@/data/publication-topics";

export type PublicationLink = {
  label: string;
  href: string;
};

export type Author = {
  name: string;
  highlight?: boolean;
};

export type PublicationDetail = {
  abstract?: string;
  pdf?: string;
  bibtex?: string;
  hero?: { src: string; alt: string };
};

export type Publication = {
  slug: string;
  year: number;
  title: string;
  authors: Author[];
  venue: string;
  proceedings?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  links?: PublicationLink[];
  highlight?: string;
  detail?: PublicationDetail;
  tags?: string[];
  topics?: readonly PublicationTopic[];
};

function normalizeLinkLabel(label: string): string {
  return label.toLowerCase() === "pdf" ? "paper" : label.toLowerCase();
}

function linkPriority(label: string): number {
  const value = label.toLowerCase();
  if (["pdf", "paper", "preprint"].includes(value)) return 0;
  if (value === "doi") return 2;
  return 1;
}

export default function PublicationCard({ pub }: { pub: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const links = pub.links ?? [];
  const extraPdf =
    pub.detail?.pdf &&
    !links.some(
      (link) =>
        link.label.toLowerCase() === "pdf" || link.href === pub.detail?.pdf
    )
      ? [{ label: "PDF", href: pub.detail.pdf }]
      : [];

  const allLinks = [...links, ...extraPdf]
    .filter((link) => Boolean(link.href.trim()))
    .sort((a, b) => linkPriority(a.label) - linkPriority(b.label));

  const topics = pub.topics ?? getPublicationTopics(pub.slug);
  const hasAbstract = Boolean(pub.detail?.abstract?.trim());
  const hasBibtex = Boolean(pub.detail?.bibtex?.trim());

  return (
    <article className="grid grid-cols-[76px_minmax(0,1fr)] gap-4 py-3.5 first:pt-1 sm:grid-cols-[86px_minmax(0,1fr)]">
      {/* Thumbnail */}
      <div className="mt-0.5 self-start">
        <div className="relative h-[54px] w-[76px] overflow-hidden bg-white sm:h-[60px] sm:w-[86px]">
          {pub.image ? (
            <Image
              src={pub.image.src}
              alt={pub.image.alt}
              fill
              sizes="(min-width: 640px) 86px, 76px"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-[10px] text-neutral-400">
              No image
            </div>
          )}
        </div>
      </div>

      {/* Publication details */}
      <div className="min-w-0">
        <h3 className="text-[14px] font-bold leading-[1.25] text-[#00677f] md:text-[15px]">
          {pub.title}
        </h3>

        {pub.highlight && (
          <p className="mt-0.5 text-[12px] font-semibold leading-4 text-[#841617]">
            {pub.highlight}
          </p>
        )}

        <p className="mt-0.5 text-[13px] leading-[1.35] text-neutral-700">
          {pub.authors.map((author, index) => (
            <span
              key={`${pub.slug}-author-${index}`}
              className={
                author.highlight ? "font-semibold text-[#841617]" : ""
              }
            >
              {author.name}
              {index < pub.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>

        {pub.venue && (
          <p className="mt-0.5 text-[13px] leading-[1.35] text-neutral-800">
            {pub.venue}
          </p>
        )}

        {topics.length > 0 && (
          <div className="mt-1 flex flex-wrap items-center gap-1 text-[11px] leading-4 text-neutral-600">
            <span className="mr-0.5 text-[12px] text-neutral-700">Topics:</span>
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-neutral-100 px-2 py-0.5"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Show only resources that already have data. */}
        {(allLinks.length > 0 || hasAbstract || hasBibtex) && (
          <div className="mt-1.5 text-[13px] leading-5 text-[#00677f]">
            <div className="flex flex-wrap items-center gap-x-1">
              {allLinks.map((link, index) => (
                <span key={`${link.label}-${link.href}-${index}`}>
                  {index > 0 && (
                    <span className="text-neutral-400">• </span>
                  )}
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {normalizeLinkLabel(link.label)}
                  </Link>{" "}
                </span>
              ))}

              {hasAbstract && (
                <span>
                  {allLinks.length > 0 && (
                    <span className="text-neutral-400">• </span>
                  )}
                  <button
                    type="button"
                    className="hover:underline"
                    aria-expanded={showAbstract}
                    onClick={() => setShowAbstract((value) => !value)}
                  >
                    abstract ({showAbstract ? "−" : "+"})
                  </button>{" "}
                </span>
              )}

              {hasBibtex && (
                <span>
                  {(allLinks.length > 0 || hasAbstract) && (
                    <span className="text-neutral-400">• </span>
                  )}
                  <button
                    type="button"
                    className="hover:underline"
                    aria-expanded={showBibtex}
                    onClick={() => setShowBibtex((value) => !value)}
                  >
                    bibtex ({showBibtex ? "−" : "+"})
                  </button>
                </span>
              )}
            </div>

            {showAbstract && pub.detail?.abstract && (
              <div className="mt-2 border-l-2 border-neutral-200 pl-3 text-[12px] leading-5 text-neutral-700">
                {pub.detail.abstract}
              </div>
            )}

            {showBibtex && pub.detail?.bibtex && (
              <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap border-l-2 border-neutral-200 bg-neutral-50 p-3 text-[11px] leading-4 text-neutral-700">
                {pub.detail.bibtex}
              </pre>
            )}
          </div>
        )}

        {/* Keep previously specified proceedings under the links. */}
        {pub.proceedings && pub.proceedings !== pub.venue && (
          <p className="mt-1 text-[11px] leading-[1.35] text-neutral-600">
            {pub.proceedings}
          </p>
        )}
      </div>
    </article>
  );
}
