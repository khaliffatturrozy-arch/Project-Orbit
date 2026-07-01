import { Card } from "@/components/ui/card";

type ProductReflectionProps = {
  reflection: string;
};

export function ProductReflection({ reflection }: ProductReflectionProps) {
  return (
    <section>
      <p className="text-label mb-6 text-orbit-muted">REFLECTION</p>
      <Card variant="accent">
        <p className="text-body leading-relaxed">&ldquo;{reflection}&rdquo;</p>
      </Card>
    </section>
  );
}
