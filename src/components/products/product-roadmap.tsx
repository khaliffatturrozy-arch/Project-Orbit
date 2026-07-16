import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/orbit";

const statusConfig: Record<string, { variant: "success" | "orange" | "sky"; label: string }> = {
  done: { variant: "success", label: "Done" },
  "in-progress": { variant: "orange", label: "In Progress" },
  planned: { variant: "sky", label: "Planned" },
};

type ProductRoadmapProps = {
  roadmap: NonNullable<Product["roadmap"]>;
};

export function ProductRoadmap({ roadmap }: ProductRoadmapProps) {
  return (
    <section>
      <h2 className="text-label mb-6">ROADMAP</h2>
      <div className="space-y-3">
        {roadmap.map((item) => {
          const config = statusConfig[item.status];
          return (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-orbit-sm border-2 border-orbit-border bg-orbit-surface p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-0.5">
                <p className="font-heading text-base font-bold">{item.title}</p>
                <p className="text-caption">{item.description}</p>
              </div>
              <Badge variant={config.variant}>{config.label}</Badge>
            </div>
          );
        })}
      </div>
    </section>
  );
}
