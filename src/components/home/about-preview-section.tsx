import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function AboutPreviewSection() {
  return (
    <Section
      label="IDENTITY"
      title="A builder mindset behind every product."
      description="I approach digital work as a product system: understand the problem, design the flow, build the experience, explain the decisions, and keep improving after launch."
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {profile.principles.map((principle) => (
            <Badge key={principle} variant="neutral">
              {principle}
            </Badge>
          ))}
        </div>
        <Link href="/about">
          <Button variant="secondary" size="md">
            About Khalif
          </Button>
        </Link>
      </div>
    </Section>
  );
}
