import { Card } from "@/components/ui/card";
import type { Product } from "@/types/orbit";

type ProductFeatureListProps = {
  features: NonNullable<Product["features"]>;
};

export function ProductFeatureList({ features }: ProductFeatureListProps) {
  return (
    <section>
      <p className="text-label mb-6 text-orbit-muted">FEATURES</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} variant="flat" className="flex flex-col gap-1.5">
            <p className="font-heading text-base font-bold">{feature.title}</p>
            <p className="text-caption">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
