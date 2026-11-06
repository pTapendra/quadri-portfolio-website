/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NewsList from "@/components/NewsList";
import { selectedPublications } from "@/data/publications";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import HighlightGJQ from "@/components/HighlightGJQ";

const PREFERRED_TAG_ORDER = [
  "All",
  "Best",
  "Recent",
  "Perception",
  "HLC",
  "Design Optimization",
  "Empirical",
];

export default function Page() {
  const dedupSelected = useMemo(() => {
    const map = new Map<string, any>();
    const dups: string[] = [];
    for (const p of selectedPublications) {
      if (map.has(p.slug)) {
        dups.push(p.slug);
        continue;
      }
      map.set(p.slug, p);
    }
    if (dups.length) {
      console.warn(
        "Duplicate selectedPublications slugs detected (keeping first):",
        Array.from(new Set(dups))
      );
    }
    return Array.from(map.values());
  }, []);

  const visibleTags = PREFERRED_TAG_ORDER;

  const [activeTag, setActiveTag] = useState<string>("Recent");

  const filteredSelected = useMemo(() => {
    if (activeTag === "All") return dedupSelected;
    return dedupSelected.filter((p: any) => p.tags?.includes(activeTag));
  }, [activeTag, dedupSelected]);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <aside className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-44 h-44 rounded-full md:w-64 md:h-64 overflow-hidden shadow-sm">
                <Image
                  src="/quadri.jpg"
                  alt="Portrait of Dr. John Quadri"
                  fill
                  sizes="(min-width: 768px) 16rem, 11rem"
                  className="object-cover"
                  priority
                />
              </div>


              {/* Personal information: two compact groups */}
              <div className="mt-3 flex flex-col items-center gap-2 font-sans text-center md:items-start md:text-left">
                {/* Group 1: Personal and school information */}
                <section aria-label="Personal and school information" className="space-y-0.5">
                  <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-gray-900">
                    Ghulam Jilani Quadri
                  </h2>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">
                    Assistant Professor
                    <br />
                    <a
                      href="https://www.ou.edu/coe/cs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-500"
                    >
                      School of Computer Science (DH242)
                    </a>
                    <br />
                    Gallogly College of Engineering
                    <br />
                    University of Oklahoma
                  </p>
                </section>

                {/* Group 2: Lab, email, and professional links */}
                <section
                  aria-label="Lab and contact links"
                  className="flex flex-col items-center gap-0 md:items-start"
                >
                  <p className="text-xs sm:text-sm leading-tight text-gray-900">
                    <span className="font-semibold">Research Lab</span>{" ("}
                    <a
                      href="https://www.div-lab.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#841617] hover:underline"
                    >
                      div-lab.org
                    </a>
                    {")"}
                  </p>

                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">
                    Email:{" "}
                    <a
                      href="mailto:quadri@ou.edu"
                      className="hover:text-blue-600 hover:underline"
                    >
                      quadri@ou.edu
                    </a>
                  </p>

                  <div className="mt-0 flex flex-wrap items-center gap-3">
                    <a
                      href="https://x.com/jiquad"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="text-black"
                      title="X (Twitter)"
                    >
                      <FaXTwitter size={28} />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Scholar"
                      className="text-blue-600"
                      title="Google Scholar"
                    >
                      <SiGooglescholar size={28} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ghulamjilani1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-blue-800"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                    <a
                      href="https://www.div-lab.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="DIV Lab Website"
                      title="DIV Lab Website"
                      className="inline-flex items-center"
                    >
                      <Image
                        src="/divlabsmallicon.png"
                        alt="DIV Lab"
                        width={42}
                        height={42}
                        className="h-7 w-auto"
                      />
                    </a>

                    {/*
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CV"
                      className="text-gray-800 font-semibold text-sm pt-1"
                      title="CV"
                    >
                      CV
                    </a>
                    */}
                  </div>
                </section>
              </div>
            </div>

            {/* NEWS */}
            <div className="mt-3 font-sans">
              <h2 className="text-xl font-sans font-semibold text-gray-900 mb-2">
                📰 News & Updates
              </h2>

              <div className="max-h-64 overflow-y-auto pr-2">
                <NewsList />
              </div>

            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <section className="md:col-span-2">
            <div className="flex-1 space-y-4">
              {/* About Me */}
              <section>
                <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                  About Me
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#841617] via-[#9D2235] to-[#841617]" />

                  <div className="p-4 sm:p-5 space-y-3 font-sans text-gray-800 leading-relaxed text-justify">
                    <p>
                      I am an Assistant Professor in the School of Computer
                      Science at the Gallogly College of Engineering, University
                      of Oklahoma, where I direct the Data Interaction and
                      Visualization (DIV) Lab. Previously, I was a Postdoctoral
                      Research Fellow and CRA/CCC/NSF Computing Innovation
                      Fellow, working with Dr. Danielle Albers Szafir at the
                      University of North Carolina–Chapel Hill. I received my
                      Ph.D. in Computer Science &amp; Engineering in 2021,
                      advised by Dr. Paul Rosen at the University of South
                      Florida. I also hold an M.S. in Computer Science from the
                      University of South Florida and a Bachelor in Computer
                      Engineering from the University of Mumbai. My work has
                      been recognized with the IEEE VGTC Best Dissertation
                      Award, and my postdoctoral research was supported by the
                      NSF-CRA Computing Innovation 2021 Fellowship. Recent
                      collaborations received a Best Paper Honorable Mention at
                      IEEE VIS 2023, 2025, a Best Short Paper at EuroVis 2024,
                      and honorable mentions for the IEEE VIS VAST Challenge
                      2017 and an IEEE VIS 2024 poster.
                    </p>
                  </div>
                </div>
              </section>

              {/* Research Vision */}
              <section>
                <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                  Research Vision
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#841617] via-[#9D2235] to-[#841617]" />

                  <div className="p-4 sm:p-5 space-y-3 text-gray-800 font-sans leading-relaxed text-justify">
                    <p>
                      My research lies at the intersection of Information
                      Visualization, Human–Computer Interaction, Machine
                      Learning models, and perception &amp; cognition. The
                      overarching goal is to build perceptual, human-centered
                      frameworks that optimize visualization design, improving
                      decision quality and confidence while offering objective
                      guidance for designers. I combine methods from InfoVis and
                      perception &amp; cognitive science with human-centered
                      evaluation to measure, model, and theorize how people
                      perceive data and visual design. This agenda advances
                      practical, empirically grounded design choices and
                      addresses core challenges such as perceptual variability,
                      design optimization, and information
                      accessibility—ultimately delivering tools and principles
                      that make complex data more understandable and decisions
                      more reliable across audiences and domains.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                  Teaching
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#841617] via-[#9D2235] to-[#841617]" />

                  <ul className="p-4 sm:p-5 list-disc list-inside space-y-2 text-gray-800">

                    <li>
                      <span className="font-medium font-sans text-gray-900">
                        CS 5093:
                      </span>{" "}
                      Visual Analytics{" "}
                      <strong>(Spring 2027)</strong>
                    </li>

                    <li>
                      <span className="font-medium font-sans text-gray-900">
                        CS 4063/5063:
                      </span>{" "}
                      Human–Computer Interaction{" "}
                      <strong>(Spring 2025, Spring 2026 )</strong>
                    </li>
                    <li>
                      <span className="font-medium font-sans text-gray-900">
                        CS 5970:
                      </span>{" "}
                      Information Visualization{" "}
                      <strong>(Spring 2025, Spring 2026 )</strong>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* SELECTED PUBLICATIONS */}
            <div className="mt-6">
              <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                Selected Publications
              </h2>

              {/* Tag Chips (no "All") */}
              {visibleTags.length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {visibleTags.map((tag) => {
                    const active = activeTag === tag;
                    return (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={[
                          "px-3 py-1.5 rounded-full border text-sm font-medium transition-colors",
                          active
                            ? "bg-[#9D2235] text-white border-[#9D2235]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                        ].join(" ")}
                        aria-pressed={active}
                        title={`Filter by ${tag}`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}

              <ul className="space-y-5">
                {filteredSelected.map((p: any, i: number) => {
                  const extraPdf =
                    p.detail?.pdf &&
                      !p.links?.some((l: any) => l.label.toLowerCase() === "pdf")
                      ? [{ label: "PDF", href: p.detail.pdf }]
                      : [];
                  const allLinks = [...(p.links || []), ...extraPdf];

                  return (
                    <li
                      key={`${p.slug}-${p.year ?? i}`}
                      className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-neutral-900 leading-snug font-semibold">
                        <HighlightGJQ text={p.title} />
                      </h3>

                      {/* Authors */}
                      <p className="text-neutral-700 text-sm mt-1">
                        {p.authors?.map((a: any, ai: number) => (
                          <span
                            key={`${p.slug}-a-${ai}`}
                            className={
                              a.highlight ? "font-semibold text-[#841617]" : ""
                            }
                          >
                            {a.name}
                            {ai < p.authors.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>

                      {/* Highlight badge */}
                      {p.highlight ? (
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center font-semibold bg-[#f0f0f0] text-amber-800 text-xs px-2 py-1 border border-[#f0f0f0]">
                            {p.highlight}
                          </span>
                        </div>
                      ) : null}

                      {/* Links row */}
                      {allLinks.length ? (
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          {allLinks.map((l: any, li: number) => (
                            <Link
                              key={`${p.slug}-l-${li}`}
                              href={l.href}
                              target="_blank"
                              className="text-blue-600 hover:underline underline-offset-2 text-sm font-medium"
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
