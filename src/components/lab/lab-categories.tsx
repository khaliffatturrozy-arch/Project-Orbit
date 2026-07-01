import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories: {
  key: string;
  label: string;
  description: string;
  variant: "neutral" | "orange" | "olive" | "yellow" | "sky";
}[] = [
  {
    key: "ui",
    label: "UI",
    description: "Component and layout explorations for interfaces and data display.",
    variant: "sky",
  },
  {
    key: "motion",
    label: "Motion",
    description: "Interaction studies for buttons, cards, hover states, transitions, and product UI feedback.",
    variant: "orange",
  },
  {
    key: "ai",
    label: "AI",
    description: "Explorations around AI-assisted features, reasoning, assessment logic, and workflow ideas.",
    variant: "olive",
  },
  {
    key: "automation",
    label: "Automation",
    description: "Ideas for automating repetitive workflows, notifications, reports, and operational tasks.",
    variant: "yellow",
  },
  {
    key: "dashboard",
    label: "Dashboard",
    description: "Reusable interface patterns for admin panels, product dashboards, status cards, and operational views.",
    variant: "sky",
  },
  {
    key: "component",
    label: "Components",
    description: "Reusable design tokens, primitives, cards, badges, layout wrappers, and product content structure.",
    variant: "neutral",
  },
];

export function LabCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label text-orbit-muted">CATEGORIES</p>
        <h2 className="text-section-title">What kind of experiments live here?</h2>
        <p className="text-caption max-w-2xl">Each category represents a different exploration area.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card key={cat.key} variant="flat" className="flex flex-col gap-2">
            <Badge variant={cat.variant}>{cat.label}</Badge>
            <p className="text-caption">{cat.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
