import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import type { Product } from "@/types/orbit";

const statusVariant = {
  live: "success" as const,
  "in-progress": "orange" as const,
  concept: "sky" as const,
  archived: "neutral" as const,
};

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card hover className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-heading text-xl font-bold">{product.title}</h3>
          <p className="text-caption">{product.subtitle}</p>
        </div>
        <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
      </div>

      <p className="text-body line-clamp-3">{product.description}</p>

      {product.progress !== undefined && (
        <div className="space-y-1">
          <div className="flex items-center justify-between text-caption">
            <span>Progress</span>
            <span>{product.progress}%</span>
          </div>
          <div
            className="h-1.5 w-full overflow-hidden rounded-full border border-orbit-border bg-orbit-bg"
            role="progressbar"
            aria-valuenow={product.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${product.title} progress`}
          >
            <div
              className="h-full rounded-full bg-orbit-ink transition-all"
              style={{ width: `${product.progress}%` }}
            />
          </div>
        </div>
      )}

      <p className="text-caption">
        {product.industry} &middot; {product.role}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {product.services.map((service) => (
          <Badge key={service} variant="neutral">{service}</Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {product.stack.map((tech) => (
          <Badge key={tech} variant="neutral">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        {product.links?.caseStudy && (
          <Link
            href={product.links.caseStudy}
            className="text-label font-semibold text-orbit-orange underline-offset-2 hover:underline"
          >
            View Case Study &rarr;
          </Link>
        )}
        {product.links?.live && (
          <Link
            href={product.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label font-semibold text-orbit-ink underline-offset-2 hover:underline"
          >
            Live Site &rarr;
          </Link>
        )}
      </div>
    </Card>
  );
}
