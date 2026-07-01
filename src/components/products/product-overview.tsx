import { Card } from "@/components/ui/card";
import type { Product } from "@/types/orbit";

type ProductOverviewProps = {
  product: Product;
};

export function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <section>
      <p className="text-label mb-6 text-orbit-muted">OVERVIEW</p>
      <div className="grid gap-6 md:grid-cols-2">
        {product.overview && (
          <Card variant="default" className="md:col-span-2">
            <p className="text-label mb-2 font-semibold text-orbit-ink">Overview</p>
            <p className="text-body">{product.overview}</p>
          </Card>
        )}
        {product.problem && (
          <Card variant="accent">
            <p className="text-label mb-2 font-semibold text-orbit-orange">Problem</p>
            <p className="text-body">{product.problem}</p>
          </Card>
        )}
        {product.solution && (
          <Card variant="accent">
            <p className="text-label mb-2 font-semibold text-orbit-orange">Solution</p>
            <p className="text-body">{product.solution}</p>
          </Card>
        )}
        {product.impact && (
          <Card variant="default">
            <p className="text-label mb-2 font-semibold text-orbit-ink">Impact</p>
            <p className="text-body">{product.impact}</p>
          </Card>
        )}
      </div>

      {product.myRole && product.myRole.length > 0 && (
        <Card variant="flat" className="mt-6">
          <p className="text-label mb-3 font-semibold text-orbit-ink">My Role</p>
          <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {product.myRole.map((role) => (
              <li key={role} className="text-body flex items-start gap-2">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-orbit-ink" aria-hidden="true" />
                {role}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </section>
  );
}
