import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/orbit/project-visual";
import type { Product } from "@/types/orbit";

const statusVariant: Record<string, "success" | "orange" | "sky" | "neutral"> = {
  live: "success",
  "in-progress": "orange",
  concept: "sky",
  archived: "neutral",
};

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  const isCoozyAI = product.slug === "cozzy-ai";

  return (
    <section className="border-b-2 border-orbit-border pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <p className="text-label">ENTERPRISE PLATFORM</p>
              {isCoozyAI && (
                <Badge variant="orange" className="text-xs font-bold">
                  FEATURED
                </Badge>
              )}
            </div>
            <h1 className="text-hero">{product.title}</h1>
            <p className="text-section-title">{product.subtitle}</p>
          </div>
          <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
        </div>

        <p className="text-body max-w-3xl">{product.description}</p>

        {product.progress !== undefined && (
          <div className="max-w-md space-y-1.5">
            <div className="flex items-center justify-between text-caption">
              <span>Development Progress</span>
              <span className="font-semibold">{product.progress}%</span>
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full border-2 border-orbit-border bg-orbit-bg"
              role="progressbar"
              aria-valuenow={product.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${product.title} progress`}
            >
              <div
                className="h-full rounded-full bg-orbit-orange transition-all"
                style={{ width: `${product.progress}%` }}
              />
            </div>
            {isCoozyAI && (
              <div className="text-caption text-orbit-muted">
                Status: {product.developmentStatus?.stage}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-caption">
          <p><span className="font-semibold text-orbit-ink">Industry:</span> {product.industry}</p>
          <p><span className="font-semibold text-orbit-ink">Role:</span> {product.role}</p>
          {isCoozyAI && (
            <p className="ml-auto">
              <span className="font-semibold text-orbit-orange">Enterprise AI Platform</span>
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.services.slice(0, isCoozyAI ? 8 : product.services.length).map((service) => (
            <Badge key={service} variant="neutral">{service}</Badge>
          ))}
          {isCoozyAI && (
            <Badge variant="orange" className="text-xs">
              Engineering Intelligence
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {(product.stack || []).slice(0, isCoozyAI ? 8 : product.stack.length).map((tech) => (
            <Badge key={tech} variant="neutral">{tech}</Badge>
          ))}
          {isCoozyAI && (
            <Badge variant="orange" className="text-xs">
              Enterprise Ready
            </Badge>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <ProjectVisual
              title={product.title}
              subtitle={product.subtitle}
              typeLabel="ENTERPRISE PLATFORM"
              status={product.status}
              progress={product.progress}
            />
          </div>
          <div className="flex flex-col justify-end gap-3">
            {product.links && (product.links.live || product.links.github) && (
              <div className="flex flex-wrap gap-3">
                {product.links.github && (
                  <Link
                    href={product.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-orbit-sm border-2 border-orbit-border bg-orbit-surface px-5 py-2.5 text-label font-semibold text-orbit-ink shadow-orbit-sm transition-all hover:shadow-orbit-md hover:-translate-y-0.5"
                  >
                    Source Code &rarr;
                  </Link>
                )}
                {isCoozyAI && (
                  <div className="inline-flex items-center gap-2 rounded-orbit-sm border-2 border-orbit-orange/30 bg-orbit-orange/5 px-5 py-2.5 text-label font-semibold text-orbit-orange">
                    Platform In Development
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {isCoozyAI && product.badges && (
          <div className="flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <Badge key={badge} variant="orange" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
