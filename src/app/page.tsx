import { Container } from "@/components/ui/container";
import { HeroSection } from "@/components/home/hero-section";
import { LivingStatusSection } from "@/components/home/living-status-section";
import { ProductEcosystemSection } from "@/components/home/product-ecosystem-section";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ProcessSection } from "@/components/home/process-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { LabPreviewSection } from "@/components/home/lab-preview-section";
import { ContactCTASection } from "@/components/home/contact-cta-section";

export default function HomePage() {
  return (
    <>
      <Container>
        <HeroSection />
      </Container>
      <Container>
        <LivingStatusSection />
      </Container>
      <Container>
        <ProductEcosystemSection />
      </Container>
      <Container>
        <AboutPreviewSection />
      </Container>
      <Container>
        <ProcessSection />
      </Container>
      <Container>
        <CapabilitiesSection />
      </Container>
      <Container>
        <LabPreviewSection />
      </Container>
      <Container>
        <ContactCTASection />
      </Container>
    </>
  );
}
