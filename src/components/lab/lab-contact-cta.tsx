import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LabContactCTA() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-orbit-border">
      <div className="space-y-2">
        <p className="text-label">GROWTH</p>
        <h2 className="text-section-title">Experiments become products when the problem is clear.</h2>
        <p className="text-caption max-w-2xl">
          The Lab is where ideas are tested before they become product systems, client solutions, or future case studies.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/#products">
          <Button variant="primary">View Products</Button>
        </Link>
        <Link href="/#contact">
          <Button variant="secondary">Contact</Button>
        </Link>
      </div>
    </section>
  );
}
