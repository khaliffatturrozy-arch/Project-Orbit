import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const contactLinks = [
  { label: "LinkedIn", key: "linkedin" as const },
  { label: "GitHub", key: "github" as const },
  { label: "WhatsApp", key: "whatsapp" as const },
  { label: "Instagram", key: "instagram" as const },
];

export function ContactCTASection() {
  const { socialLinks } = profile;

  return (
    <Section
      id="contact"
      label="CONTACT"
      title="Let's build something meaningful."
      description="Open for freelance work, product collaboration, and opportunities where design, engineering, and iteration matter."
    >
      <div className="flex flex-wrap gap-3">
        {contactLinks.map((link) => {
          const href = socialLinks[link.key];
          if (!href) return null;
          return (
            <Link
              key={link.key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via ${link.label}`}
            >
              <Button variant="secondary" size="lg">
                {link.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
