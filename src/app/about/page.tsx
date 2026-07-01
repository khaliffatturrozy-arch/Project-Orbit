import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { AboutHero } from "@/components/about/about-hero";
import { IdentityGrid } from "@/components/about/identity-grid";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { PrinciplesSection } from "@/components/about/principles-section";
import { WorkStyleSection } from "@/components/about/work-style-section";
import { TrustSignalsSection } from "@/components/about/trust-signals-section";
import { AboutContactCTA } from "@/components/about/about-contact-cta";

export const metadata: Metadata = {
  title: "About — Khalif Fatturrozy",
  description:
    "Product Engineer and Iterative Product Builder focused on turning ideas into structured digital products through design, engineering, and iteration.",
  openGraph: {
    title: "About — Khalif Fatturrozy",
    description:
      "Product Engineer and Iterative Product Builder focused on turning ideas into structured digital products through design, engineering, and iteration.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Container>
        <AboutHero />
      </Container>
      <Container>
        <IdentityGrid />
      </Container>
      <Container>
        <JourneyTimeline />
      </Container>
      <Container>
        <PrinciplesSection />
      </Container>
      <Container>
        <WorkStyleSection />
      </Container>
      <Container>
        <TrustSignalsSection />
      </Container>
      <Container>
        <AboutContactCTA />
      </Container>
    </>
  );
}
