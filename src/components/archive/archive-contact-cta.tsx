import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ArchiveContactCTA() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-orbit-border">
      <div className="space-y-2">
        <p className="text-label text-orbit-muted">MAIN PORTFOLIO</p>
        <h2 className="text-section-title">Looking for the main product work?</h2>
        <p className="text-caption max-w-2xl">
          The strongest product evidence lives in the Product Ecosystem and case studies.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/#products">
          <Button variant="primary">View Products</Button>
        </Link>
        <Link href="/lab">
          <Button variant="secondary">View Lab</Button>
        </Link>
      </div>
    </section>
  );
}
