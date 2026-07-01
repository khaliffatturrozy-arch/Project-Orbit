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
          <Link href="/" className="text-body font-semibold underline-offset-2 hover:underline">
            Home
          </Link>
          <Link
            href="/#contact"
            className="text-body font-semibold underline-offset-2 hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
