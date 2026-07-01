import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { LabEntry } from "@/types/orbit";

const statusStyles: Record<string, "neutral" | "yellow" | "orange" | "success"> = {
  exploring: "yellow",
  prototype: "orange",
  shipped: "success",
  paused: "neutral",
};

const categoryStyles: Record<string, "neutral" | "orange" | "olive" | "yellow" | "sky"> = {
  ui: "sky",
  motion: "orange",
  ai: "olive",
  automation: "yellow",
  dashboard: "sky",
  component: "neutral",
  tool: "neutral",
};

type LabCardProps = {
  entry: LabEntry;
  variant?: "featured" | "compact";
};

export function LabCard({ entry, variant = "compact" }: LabCardProps) {
  return (
    <Card hover={variant === "featured"} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Badge variant={categoryStyles[entry.category] ?? "neutral"}>
          {entry.category}
        </Badge>
        <Badge variant={statusStyles[entry.status] ?? "neutral"}>
          {entry.status}
        </Badge>
      </div>
      <h3 className="font-heading text-base font-bold">{entry.title}</h3>
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
    </Card>
  );
}
