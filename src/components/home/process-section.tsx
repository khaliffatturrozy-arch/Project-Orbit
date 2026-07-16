import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const steps = [
  { number: "01", title: "Understand", description: "Clarify the business goal, users, constraints, and expected outcome." },
  { number: "02", title: "Define", description: "Turn vague ideas into product scope, feature priorities, and success criteria." },
  { number: "03", title: "Design", description: "Shape the interface, user flow, content structure, and interaction patterns." },
  { number: "04", title: "Build", description: "Develop the frontend, backend, data flow, and product logic with maintainability in mind." },
  { number: "05", title: "Test", description: "Check responsiveness, accessibility, performance, edge cases, and user friction." },
  { number: "06", title: "Ship", description: "Deploy the product with clean metadata, production checks, and reliable delivery." },
  { number: "07", title: "Improve", description: "Iterate based on feedback, product needs, and future scalability." },
];

export function ProcessSection() {
  return (
    <Section
      id="process"
      label="PROCESS"
      title="A repeatable process for turning ideas into usable products."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step, i) => (
          <Card
            key={step.number}
            hover
            className={cn(
              "relative flex flex-col gap-3",
              i === steps.length - 1 && "xl:col-span-4 xl:flex-row xl:items-center xl:gap-6"
            )}
          >
            <span className="text-label shrink-0">{step.number}</span>
            <div>
              <h3 className="font-heading text-xl font-bold">{step.title}</h3>
              <p className="text-caption mt-1">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
