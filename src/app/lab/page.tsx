import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { LabHero } from "@/components/lab/lab-hero";
import { LabCard } from "@/components/lab/lab-card";
import { LabCategories } from "@/components/lab/lab-categories";
import { LabContactCTA } from "@/components/lab/lab-contact-cta";
import { labEntries } from "@/data/labs";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Lab — Khalif Fatturrozy",
  description:
    "Product experiments, UI studies, motion explorations, AI prototypes, dashboard patterns, and automation workflows by Khalif Fatturrozy.",
  openGraph: {
    title: "Lab — Khalif Fatturrozy",
    description:
      "Product experiments, UI studies, motion explorations, AI prototypes, dashboard patterns, and automation workflows by Khalif Fatturrozy.",
  },
};

export default function LabPage() {
  const featured = labEntries.filter((e) => e.featured);

  return (
    <>
      <Container>
        <LabHero />
      </Container>
      {featured.length > 0 && (
        <Container>
          <Section
            label="FEATURED"
            title="Featured Lab Entries"
            description="Selected experiments and explorations."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {featured.map((entry) => (
                <LabCard key={entry.id} entry={entry} variant="featured" />
              ))}
            </div>
          </Section>
        </Container>
      )}
      <Container>
        <LabCategories />
      </Container>
      <Container>
        <Section
          label="ALL ENTRIES"
          title="All Lab Entries"
          description="Every experiment and exploration in the lab."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labEntries.map((entry) => (
              <LabCard key={entry.id} entry={entry} variant="compact" />
            ))}
          </div>
        </Section>
      </Container>
      <Container>
        <LabContactCTA />
      </Container>
    </>
  );
}
