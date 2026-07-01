import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const contactLinks = [
  { label: "LinkedIn", key: "linkedin" as const },
  { label: "GitHub", key: "github" as const },
  { label: "WhatsApp", key: "whatsapp" as const },
  { label: "Instagram", key: "instagram" as const },
];

export function AboutContactCTA() {
  return (
    <section id="about-contact" className="py-16 md:py-24">
      <div className="space-y-4">
        <p className="text-label text-orbit-muted">CONTACT</p>
        <h2 className="text-section-title">Have an idea worth building?</h2>
        <p className="text-body max-w-2xl text-orbit-muted">
          Open to freelance work, product collaboration, and opportunities
          where design, engineering, and iteration matter.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Link href="/#products">
            <Button variant="primary" size="md">View Products</Button>
          </Link>
          {contactLinks.map((link) => {
            const href = profile.socialLinks[link.key];
            if (!href) return null;
            return (
              <Link
                key={link.key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact via ${link.label}`}
              >
                <Button variant="secondary" size="md">
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
