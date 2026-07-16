import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const archiveBadges = ["Older Work", "UI Studies", "Dashboard", "Mobile", "Experiments"];

export function ArchiveHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-2">
        <p className="text-label">ARCHIVE</p>
        <h1 className="text-section-title">
          Archive of smaller works, older builds, and explorations.
        </h1>
        <p className="text-caption max-w-2xl">
          Earlier work, UI studies, dashboard concepts, mobile directions, and smaller experiments.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {archiveBadges.map((badge) => (
          <Badge key={badge} variant="neutral">{badge}</Badge>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/#products">
          <Button variant="primary">View Products</Button>
        </Link>
        <Link href="/lab">
          <Button variant="secondary">Explore Lab</Button>
        </Link>
      </div>
    </section>
  );
}
