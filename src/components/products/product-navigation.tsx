import Link from "next/link";
import { Button } from "@/components/ui/button";

type ProductNavigationProps = {
  productTitle: string;
};

export function ProductNavigation({ productTitle }: ProductNavigationProps) {
  return (
    <nav
      aria-label={`Navigation for ${productTitle} case study`}
      className="border-t-2 border-orbit-border pt-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#products">
          <Button variant="secondary" size="md">
            &larr; Back to Products
          </Button>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center min-h-[48px] px-3 py-2 text-body font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm">
            Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center min-h-[48px] px-3 py-2 text-body font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
