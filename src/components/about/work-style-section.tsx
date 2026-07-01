import { Card } from "@/components/ui/card";

const workStyles = [
  {
    title: "Clear scope",
    description:
      "I like turning broad ideas into clear scope, priorities, and next steps before building.",
  },
  {
    title: "Design and engineering together",
    description:
      "I do not separate UI from implementation quality. The interface, data flow, performance, and maintainability should support each other.",
  },
  {
    title: "Product communication",
    description:
      "I explain decisions, trade-offs, and limitations so the product direction stays understandable.",
  },
  {
    title: "Practical execution",
    description:
      "I focus on building useful versions that can be tested, shipped, and improved.",
  },
];

export function WorkStyleSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label text-orbit-muted">COLLABORATION</p>
        <h2 className="text-section-title">
          What does it feel like to work with me?
        </h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {workStyles.map((item) => (
          <Card key={item.title} variant="flat">
            <h3 className="font-heading text-xl font-bold">{item.title}</h3>
            <p className="text-body mt-3 text-orbit-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
