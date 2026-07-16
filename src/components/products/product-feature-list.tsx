import { Card } from "@/components/ui/card";
import type { Product } from "@/types/orbit";

type ProductFeatureListProps = {
  features: NonNullable<Product["features"]>;
};

export function ProductFeatureList({ features }: ProductFeatureListProps) {
  return (
    <section>
      <h2 className="text-label mb-6">FEATURES</h2>
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
