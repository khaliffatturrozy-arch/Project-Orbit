import { Card } from "@/components/ui/card";

const identities = [
  {
    title: "Builder, not just coder",
    description:
      "I do not treat products as isolated screens. I think about flow, structure, usability, data, deployment, and how the product can keep evolving.",
  },
  {
    title: "Product-first mindset",
    description:
      "Before choosing a stack or designing a UI, I try to understand the problem, the user, the business goal, and the expected outcome.",
  },
  {
    title: "Design-aware engineering",
    description:
      "I care about hierarchy, spacing, interaction, accessibility, and performance because product quality is felt through many small details.",
  },
  {
    title: "Iterative by nature",
    description:
      "I prefer shipping useful versions, learning from them, and improving the product over time instead of treating launch as the finish line.",
  },
];

export function IdentityGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label text-orbit-muted">IDENTITY</p>
        <h2 className="text-section-title">How I approach product work.</h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {identities.map((item) => (
          <Card key={item.title} variant="flat">
            <h3 className="font-heading text-xl font-bold">{item.title}</h3>
            <p className="text-body mt-3 text-orbit-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
