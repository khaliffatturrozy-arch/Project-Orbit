import { Card } from "@/components/ui/card";

const trustSignals = [
  {
    title: "Product ecosystem experience",
    description:
      "Skyhook evolved from a website into a broader coffee business product ecosystem with reservation, dashboard, POS direction, and Flutter mobile app progress.",
  },
  {
    title: "Research-backed product logic",
    description:
      "SleepWise uses structured assessment logic, domain scoring, rule-based reasoning, bilingual support, and PDF report direction.",
  },
  {
    title: "Case study thinking",
    description:
      "Each featured product explains not only what was built, but also why decisions were made and how the product can evolve.",
  },
  {
    title: "Maintainable system",
    description:
      "Project ORBIT itself is built with reusable design tokens, components, product data, and scalable case study structure.",
  },
];

export function TrustSignalsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label">EVIDENCE</p>
        <h2 className="text-section-title">
          Built on real product work, not claims.
        </h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {trustSignals.map((item) => (
          <Card key={item.title} variant="accent">
            <h3 className="font-heading text-xl font-bold">{item.title}</h3>
            <p className="text-body mt-3">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
