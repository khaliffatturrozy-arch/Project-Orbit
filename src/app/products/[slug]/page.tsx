import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProductHero } from "@/components/products/product-hero";
import { ProductOverview } from "@/components/products/product-overview";
import { ProductFeatureList } from "@/components/products/product-feature-list";
import { ProductArchitecture } from "@/components/products/product-architecture";
import { ProductDecisions } from "@/components/products/product-decisions";
import { ProductRoadmap } from "@/components/products/product-roadmap";
import { ProductReflection, ProductEngineeringPrinciples, ProductFuturePlans, ProductTimeline, ProductCapabilitesGrid, ProductArchitectureDiagrams, ProductMetricCards, ProductTechStack } from "@/components/products/product-reflection";
import { ProductNavigation } from "@/components/products/product-navigation";
import { products } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };

  return {
    title: `${product.title} — Case Study | Khalif Fatturrozy`,
    description: product.description,
    openGraph: {
      title: `${product.title} — Case Study | Khalif Fatturrozy`,
      description: product.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — Case Study | Khalif Fatturrozy`,
      description: product.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isCozyAI = slug === "cozzy-ai";

  return (
    <Container>
      <article className="py-8 md:py-12">
        <ProductHero product={product} />

        <div className="mt-12 space-y-16 md:mt-16">
          {isCozyAI && (
            <ProductMetricCards
              metrics={isCozyAI ? product.developmentStatus?.metrics : []}
            />
          )}

          {isCozyAI && (
            <ProductArchitectureDiagrams
              architecture={isCozyAI ? product.architecture : []}
            />
          )}

          {isCozyAI && (
            <ProductCapabilitesGrid
              capabilities={isCozyAI ? product.features : []}
            />
          )}

          {isCozyAI && (
            <ProductEngineeringPrinciples
              engineeringPrinciples={isCozyAI ? product.engineeringPrinciples : []}
            />
          )}

          <ProductOverview product={product} />

          {product.features && product.features.length > 0 && (
            !isCozyAI && (
              <ProductFeatureList features={product.features} />
            )
          )}

          {product.architecture && product.architecture.length > 0 && (
            <ProductArchitecture architecture={product.architecture} />
          )}

          {product.decisions && product.decisions.length > 0 && (
            <ProductDecisions decisions={product.decisions} />
          )}

          {isCozyAI && (
            <ProductTimeline roadmap={product.roadmap || []} />
          )}

          {isCozyAI && (
            <ProductFuturePlans futurePlans={isCozyAI ? product.futurePlans : []} />
          )}

          {product.roadmap && product.roadmap.length > 0 && (
            !isCozyAI && (
              <ProductRoadmap roadmap={product.roadmap} />
            )
          )}

          {product.reflection && (
            <ProductReflection reflection={product.reflection} />
          )}

          <ProductNavigation productTitle={product.title} />
        </div>
      </article>
    </Container>
  );
}
