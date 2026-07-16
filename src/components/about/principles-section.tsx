import { Card } from "@/components/ui/card";

const principles = [
  {
    title: "Purpose before decoration",
    description:
      "Every feature, section, and interaction should have a reason.",
  },
  {
    title: "Clarity before complexity",
    description:
      "A product should be easy to understand before it tries to look impressive.",
  },
  {
    title: "Evidence before claims",
    description:
      "I prefer showing shipped products, decisions, and trade-offs instead of relying on generic skill claims.",
  },
  {
    title: "Iteration before perfection",
    description:
      "A good product is not only launched. It is maintained, improved, and adapted.",
  },
  {
    title: "Systems before scattered pages",
    description:
      "I build with reusable structures so products can scale without becoming messy.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label">PRINCIPLES</p>
        <h2 className="text-section-title">
          Principles that guide the way I build.
        </h2>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => (
          <Card key={principle.title} variant="flat">
            <h3 className="font-heading text-lg font-bold">{principle.title}</h3>
            <p className="text-caption mt-2">{principle.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
