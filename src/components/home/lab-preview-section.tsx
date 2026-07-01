import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { labEntries } from "@/data/labs";

const statusDot: Record<string, string> = {
  exploring: "bg-orbit-yellow",
  prototype: "bg-orbit-orange",
  shipped: "bg-orbit-green",
  paused: "bg-orbit-muted",
};

export function LabPreviewSection() {
  const featured = labEntries.filter((e) => e.featured).slice(0, 4);

  return (
    <Section
      id="lab"
      label="LAB"
      title="Small experiments, components, and ideas in motion."
      description="A space for UI experiments, motion studies, AI ideas, automation workflows, and product exploration."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((entry) => (
          <Card key={entry.id} hover className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-heading text-base font-bold">{entry.title}</h3>
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${statusDot[entry.status] ?? "bg-orbit-muted"}`}
                aria-hidden="true"
              />
            </div>
            <p className="text-caption">{entry.description}</p>
            {entry.tags && entry.tags.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-1">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="neutral">{tag}</Badge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/lab">
          <Button variant="primary">Explore Lab</Button>
        </Link>
        <Link href="/archive">
          <Button variant="secondary">View Archive</Button>
        </Link>
      </div>
    </Section>
  );
}
