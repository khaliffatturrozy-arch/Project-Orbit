import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ArchiveHero } from "@/components/archive/archive-hero";
import { ArchiveCard } from "@/components/archive/archive-card";
import { ArchiveContactCTA } from "@/components/archive/archive-contact-cta";
import { archiveEntries } from "@/data/archive";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Archive — Khalif Fatturrozy",
  description:
    "Earlier works, UI studies, dashboard concepts, mobile directions, and experiments by Khalif Fatturrozy.",
  openGraph: {
    title: "Archive — Khalif Fatturrozy",
    description:
      "Earlier works, UI studies, dashboard concepts, mobile directions, and experiments by Khalif Fatturrozy.",
  },
};

export default function ArchivePage() {
  return (
    <>
      <Container>
        <ArchiveHero />
      </Container>
      <Container>
        <Section
          label="ENTRIES"
          title="Archive"
          description="Smaller works, older builds, and explorations."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {archiveEntries.map((entry) => (
              <ArchiveCard key={entry.id} entry={entry} />
            ))}
          </div>
        </Section>
      </Container>
      <Container>
        <ArchiveContactCTA />
      </Container>
    </>
  );
}
