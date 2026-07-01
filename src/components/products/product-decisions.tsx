import { Card } from "@/components/ui/card";
import type { Product } from "@/types/orbit";

type ProductDecisionsProps = {
  decisions: NonNullable<Product["decisions"]>;
};

export function ProductDecisions({ decisions }: ProductDecisionsProps) {
  return (
    <section>
      <p className="text-label mb-6 text-orbit-muted">ENGINEERING DECISIONS</p>
      <div className="space-y-4">
        {decisions.map((decision) => (
          <Card key={decision.title} variant="default">
            <div className="space-y-4">
              <p className="font-heading text-lg font-bold">{decision.title}</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-label font-semibold text-orbit-muted">Context</p>
                  <p className="text-body">{decision.context}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-label font-semibold text-orbit-orange">Decision</p>
                  <p className="text-body">{decision.decision}</p>
                </div>
              </div>

              {decision.tradeoff && (
                <div className="rounded-orbit-sm border-2 border-orbit-yellow bg-orbit-yellow/5 p-4">
                  <p className="text-label mb-1 font-semibold text-orbit-ink">Tradeoff</p>
                  <p className="text-body">{decision.tradeoff}</p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
