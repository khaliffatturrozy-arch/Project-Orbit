import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const capabilityGroups = [
  {
    title: "Product Strategy",
    items: ["product scope", "feature planning", "user flow", "content structure"],
  },
  {
    title: "UI/UX Design",
    items: ["interface design", "design system", "responsive layout", "interaction design"],
  },
  {
    title: "Web & Mobile Development",
    items: ["landing page", "dashboard", "authentication", "product frontend", "Flutter", "Dart"],
  },
  {
    title: "Backend & Database",
    items: ["Supabase", "API flow", "role-based access", "data structure"],
  },
  {
    title: "AI & Automation",
    items: ["expert system", "AI-assisted features", "PDF report", "workflow automation"],
  },
  {
    title: "Deployment & Optimization",
    items: ["Vercel", "SEO", "performance", "accessibility"],
  },
];

export function CapabilitiesSection() {
  return (
    <Section
      label="CAPABILITIES"
      title="Six capability areas for building digital products."
      description="Strategy, design, frontend, backend, AI, automation, deployment, and iteration."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilityGroups.map((group) => (
          <Card key={group.title} hover className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-bold">{group.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="neutral">{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
