import { cn } from "@/lib/cn";
import type { Product } from "@/types/orbit";

type ProductArchitectureProps = {
  architecture: NonNullable<Product["architecture"]>;
};

export function ProductArchitecture({ architecture }: ProductArchitectureProps) {
  return (
    <section>
      <h2 className="text-label mb-6">ARCHITECTURE</h2>
      <div className="relative grid gap-0 sm:grid-cols-2">
        {architecture.map((item, i) => (
          <div
            key={item.label}
            className={cn(
              "relative border-2 border-orbit-border p-5",
              i % 2 === 1 && "sm:border-l-0",
              i < architecture.length - 2 && "sm:border-b-0",
              architecture.length % 2 !== 0 && i === architecture.length - 1 && "sm:col-span-2",
              i < architecture.length - 1 && "border-b-0"
            )}
          >
            <div className="flex items-start gap-4">
              <span className="text-label mt-0.5 shrink-0 font-bold">{String(i + 1).padStart(2, "0")}</span>
              <div className="space-y-1">
                <p className="font-heading text-base font-bold">{item.label}</p>
                <p className="text-caption">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
