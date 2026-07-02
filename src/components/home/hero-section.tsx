import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="pointer-events-none absolute -right-8 -top-8 select-none text-[8rem] font-bold leading-none text-orbit-border/5 md:text-[14rem]"
        aria-hidden="true"
      >
        ORBIT
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative z-10 flex flex-col gap-6">
          <h1 className="text-hero">
            BUILD.
            <br />
            EXPLAIN.
            <br />
            EVOLVE.
          </h1>
          <p className="text-body max-w-xl">
            I turn messy ideas into reliable digital products through design,
            engineering, and continuous iteration.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#products">
              <Button variant="primary" size="lg">
                View Products
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="secondary" size="lg">
                Contact
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="orange">Product Engineer</Badge>
            <Badge variant="neutral">Iterative Product Builder</Badge>
            <Badge variant="sky">Indonesia</Badge>
            <Badge variant="success">Available for freelance and product work</Badge>
          </div>
          {profile.socialLinks.github && (
            <div className="flex gap-4">
              <Link
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[48px] px-3 py-2 text-caption font-medium underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
              >
                GitHub &rarr;
              </Link>
            </div>
          )}
        </div>

        <div className="relative z-10 flex items-start justify-center md:justify-end">
          <Card className="w-full max-w-sm space-y-5">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-orbit-orange" aria-hidden="true" />
              <span className="text-label">LIVE STATUS</span>
            </div>
            <div className="space-y-1.5">
              <p className="text-caption">Currently Building</p>
              <div className="flex items-center gap-2">
                <p className="font-heading text-2xl font-bold">Skyhook Mobile</p>
                <Badge variant="neutral">Flutter</Badge>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-caption">Progress</span>
                <span className="text-body font-semibold">75%</span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full border-2 border-orbit-border bg-orbit-bg"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Skyhook Mobile development progress"
              >
                <div
                  className="h-full rounded-full bg-orbit-orange transition-all"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-caption">Current Focus</span>
                <span className="text-body font-semibold">Product Ecosystem</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-caption">Status</span>
                <Badge variant="orange">Active Development</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
