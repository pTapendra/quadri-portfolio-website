
import Image from "next/image";
import Link from "next/link";

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
};

export default function PublicationCard({
  pub,
}: {
  pub: Publication;
}) {
  const { image, links } = pub;

  const extraPdf =
    pub.detail?.pdf &&
      !links?.some((l) => l.label.toLowerCase() === "pdf")
      ? [{ label: "PDF", href: pub.detail.pdf }]
      : [];

  const allLinks = [...(links || []), ...extraPdf];

  return (
    <article className="grid grid-cols-[76px_minmax(0,1fr)] gap-4 py-3.5 first:pt-1 sm:grid-cols-[86px_minmax(0,1fr)]">

      {/* Thumbnail */}
      <div className="mt-0.5 self-start">
        <div className="relative h-[54px] w-[76px] overflow-hidden bg-white sm:h-[60px] sm:w-[86px]">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
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

        {/* Title */}
        <h3 className="text-[14px] font-bold leading-[1.25] text-neutral-900 md:text-[15px]">
          {pub.title}
        </h3>

        {/* Highlight */}
        {pub.highlight && (
          <p className="mt-0.5 text-[12px] font-semibold leading-4 text-[#841617]">
            {pub.highlight}
          </p>
        )}

        {/* Authors */}
        <p className="mt-0.5 text-[13px] leading-[1.35] text-neutral-700">
          {pub.authors.map((a, i) => (
            <span
              key={`${pub.slug}-a-${i}`}
              className={
                a.highlight
                  ? "font-semibold text-[#841617]"
                  : ""
              }
            >
              {a.name}
              {i < pub.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>

        {/* Venue */}
        {pub.venue && (
          <p className="mt-0.5 text-[13px] italic leading-[1.35] text-neutral-600">
            {pub.venue}
          </p>
        )}

        {/* Resource links */}
        {allLinks.length > 0 && (
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] leading-[1.35]">
            {allLinks.map((l, i) => (
              <Link
                key={`${pub.slug}-link-${i}`}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#9D2235] underline underline-offset-4 hover:text-[#7f1c2b]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </article>
  );
}
