import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const labBadges = ["UI", "Motion", "AI", "Automation", "Dashboard", "Components"];

export function LabHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label">LAB</p>
        <h1 className="text-section-title">
          Lab experiments for product ideas, interfaces, and systems.
        </h1>
        <p className="text-caption max-w-2xl">
          A space for smaller explorations: UI components, motion studies, AI ideas, dashboards, automation workflows, and reusable product patterns.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {labBadges.map((badge) => (
          <Badge key={badge} variant="neutral">{badge}</Badge>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/#products">
          <Button variant="primary">View Products</Button>
        </Link>
        <Link href="/archive">
          <Button variant="secondary">View Archive</Button>
        </Link>
        <Link href="/#contact">
          <Button variant="ghost">Contact</Button>
        </Link>
      </div>
    </section>
  );
}
