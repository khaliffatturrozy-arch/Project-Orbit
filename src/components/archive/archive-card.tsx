import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ArchiveItem } from "@/types/orbit";

const typeStyles: Record<string, "neutral" | "sky" | "orange" | "olive" | "yellow"> = {
  website: "sky",
  "landing-page": "sky",
  dashboard: "yellow",
  "ui-design": "orange",
  automation: "olive",
  mobile: "sky",
  experiment: "yellow",
  "client-work": "orange",
  personal: "neutral",
};

type ArchiveCardProps = {
  entry: ArchiveItem;
};

export function ArchiveCard({ entry }: ArchiveCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <Badge variant={typeStyles[entry.type] ?? "neutral"}>
          {entry.type}
        </Badge>
        <span className="text-label text-orbit-muted">{entry.year}</span>
      </div>
      <h3 className="font-heading text-base font-bold">{entry.title}</h3>
      <p className="text-caption text-sm">{entry.role}</p>
      <p className="text-caption">{entry.description}</p>
      {entry.stack && entry.stack.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {entry.stack.map((s) => (
            <Badge key={s} variant="neutral">{s}</Badge>
          ))}
        </div>
      )}
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {entry.tags.map((t) => (
            <span key={t} className="text-label text-orbit-muted">{t}</span>
          ))}
        </div>
      )}
      {(entry.links?.live || entry.links?.github) && (
        <div className="flex gap-3">
          {entry.links?.live && (
            <Link
              href={entry.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label font-semibold text-orbit-sky hover:underline"
            >
              Live Site
            </Link>
          )}
          {entry.links?.github && (
            <Link
              href={entry.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label font-semibold text-orbit-sky hover:underline"
            >
              GitHub
            </Link>
          )}
        </div>
      )}
    </Card>
  );
}
