import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function AboutHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-hero">
            I build products by connecting design, engineering, and iteration.
          </h1>
          <p className="text-body max-w-3xl text-orbit-muted">
            My work sits between product thinking, interface design, frontend
            development, backend logic, and continuous improvement. I care about
            turning unclear ideas into digital products that can be used, tested,
            shipped, and improved.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="orange">{profile.role}</Badge>
          <Badge variant="neutral">{profile.positioning}</Badge>
          <Badge variant="sky">{profile.location}</Badge>
          <Badge variant="success">{profile.availability}</Badge>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/">
            <Button variant="primary" size="lg">
              View Products
            </Button>
          </Link>
          <Link href="#about-contact">
            <Button variant="secondary" size="lg">
              Contact
            </Button>
          </Link>
        </div>

        <Card variant="flat" className="inline-flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-orbit-sm border-2 border-orbit-border bg-orbit-orange font-heading text-lg font-bold text-orbit-surface">
            KF
          </div>
          <div>
            <p className="font-heading text-base font-bold">{profile.name}</p>
            <p className="text-caption">
              {profile.role} &middot; {profile.location}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
