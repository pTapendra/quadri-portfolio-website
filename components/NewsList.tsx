import type { ReactNode } from "react";
import { newsData, type NewsLink, type NewsRecord } from "@/data/news";

// Turn matching words into links without repeating those words.
function linkWithinText(content: string, links: NewsLink[] = []): ReactNode[] {
  const output: ReactNode[] = [];
  let text = content;
  let key = 0;

  while (text) {
    const matches = links
      .map((link) => ({
        link,
        position: text.toLowerCase().indexOf(link.label.toLowerCase()),
      }))
      .filter(({ position }) => position >= 0)
      .sort((a, b) =>
        a.position - b.position || b.link.label.length - a.link.label.length
      );

    const match = matches[0];
    if (!match) {
      output.push(text);
      break;
    }

    if (match.position > 0) output.push(text.slice(0, match.position));

    const displayedText = text.slice(
      match.position,
      match.position + match.link.label.length
    );

    output.push(
      <a
        key={key++}
        href={match.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
      >
        {displayedText}
      </a>
    );
    text = text.slice(match.position + match.link.label.length);
  }

  return output;
}

type NewsListProps = {
  items?: NewsRecord[];
  limit?: number;
};

export default function NewsList({ items = newsData, limit }: NewsListProps) {
  const visible = limit == null ? items : items.slice(0, limit);

  return (
    <ul className="divide-y divide-gray-200">
      {visible.map((item) => (
        <li
          key={item.date}
          className="grid grid-cols-1 gap-0.5 py-1.5 text-sm leading-tight sm:grid-cols-[82px_minmax(0,1fr)] sm:gap-3"
        >
          <span className="whitespace-nowrap font-semibold tabular-nums text-gray-900">
            {item.date}
          </span>
          <p className="min-w-0 leading-tight text-gray-700">
            {linkWithinText(item.content, item.links)}
          </p>
        </li>
      ))}
    </ul>
  );
}
