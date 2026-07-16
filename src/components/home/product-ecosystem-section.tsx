import Link from "next/link";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/orbit/product-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import type { Product } from "@/types/orbit";

const statusVariant: Record<string, "success" | "orange" | "sky" | "neutral"> = {
  live: "success",
  "in-progress": "orange",
  concept: "sky",
  archived: "neutral",
};

const featuredProducts = products.filter((p) => p.featured);
const cozyAI = featuredProducts.find((p) => p.id === "cozzy-ai");
const skyhook = featuredProducts.find((p) => p.id === "skyhook");
const others = featuredProducts.filter((p) => p.id !== "cozzy-ai" && p.id !== "skyhook");

function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <Card hover variant="accent" className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-2xl font-bold">{product.title}</h3>
            <p className="text-caption">{product.subtitle}</p>
          </div>
          <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
        </div>

        <p className="text-body">{product.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {product.services.map((service) => (
            <Badge key={service} variant="neutral">{service}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {product.links?.caseStudy && (
            <Link
              href={product.links.caseStudy}
              className="inline-flex items-center min-h-[48px] px-3 py-2 text-label font-semibold text-orbit-ink underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
            >
              View Case Study &rarr;
            </Link>
          )}
          {product.links?.live && (
            <Link
              href={product.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[48px] px-3 py-2 text-label font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
            >
              Live Site &rarr;
            </Link>
          )}
        </div>
      </div>

      <div className="w-full shrink-0 space-y-3 md:w-56">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-caption">
            <span>Progress</span>
            <span className="font-semibold">{product.progress}%</span>
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full border-2 border-orbit-border bg-orbit-bg"
            role="progressbar"
            aria-valuenow={product.progress ?? 0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${product.title} progress`}
          >
            <div
              className="h-full rounded-full bg-orbit-orange transition-all"
              style={{ width: `${product.progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-1 text-caption">
          <p><span className="font-semibold">Industry:</span> {product.industry}</p>
          <p><span className="font-semibold">Role:</span> {product.role}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.stack.map((tech) => (
            <Badge key={tech} variant="neutral">{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ProductEcosystemSection() {
  return (
    <Section
      id="products"
      label="PRODUCT ECOSYSTEM"
      title="Products I build, ship, and keep improving."
      description="A focused collection of digital products across web, AI, dashboards, automation, and mobile experiences."
    >
      <div className="space-y-8">
        {cozyAI && <FeaturedProductCard product={cozyAI} />}
        {skyhook && <FeaturedProductCard product={skyhook} />}

        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/#contact"
            className="inline-flex items-center min-h-[48px] px-3 py-2 text-body font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
          >
            Have a product idea? Let&apos;s talk &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
}
