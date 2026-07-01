import { Card } from "@/components/ui/card";

const timeline = [
  {
    year: "2023",
    title: "Freelance & Design Foundation",
    description:
      "Started building experience through design, visual work, and web-related freelance exploration.",
  },
  {
    year: "2024",
    title: "Frontend & Product Interfaces",
    description:
      "Focused more deeply on frontend development, interface systems, responsive layouts, and product-facing web experiences.",
  },
  {
    year: "2025",
    title: "Full Product Builds",
    description:
      "Expanded into product ecosystems with authentication, dashboards, data flow, deployment, and real-world product structure.",
  },
  {
    year: "2026",
    title: "Iterative Product Builder",
    description:
      "Building products such as Skyhook, SleepWise, and Project ORBIT with stronger emphasis on product thinking, case studies, and continuous improvement.",
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label text-orbit-muted">JOURNEY</p>
        <h2 className="text-section-title">Path so far.</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {timeline.map((item, index) => (
          <div key={item.year} className="relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-orbit-sm border-2 border-orbit-border bg-orbit-ink font-heading text-sm font-bold text-orbit-surface">
                {index + 1}
              </span>
              <span className="text-label font-bold text-orbit-orange">
                {item.year}
              </span>
            </div>
            <Card variant="flat" className="h-full">
              <h3 className="font-heading text-lg font-bold">{item.title}</h3>
              <p className="text-caption mt-2">{item.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
