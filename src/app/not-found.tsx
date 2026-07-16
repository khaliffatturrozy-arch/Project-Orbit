import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-label">404</p>
      <h1 className="text-hero mt-2">This route drifted out of orbit.</h1>
      <p className="text-body mt-4 max-w-md">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/">
          <Button variant="primary" size="md">
            Back Home
          </Button>
        </Link>
        <Link href="/#products">
          <Button variant="secondary" size="md">
            View Products
          </Button>
        </Link>
      </div>
    </Container>
  );
}
