import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

const siteLinks = [
  { label: "Products", href: "/#products" },
  { label: "Lab", href: "/lab" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "GitHub", key: "github" as const },
  { label: "LinkedIn", key: "linkedin" as const },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-orbit-border">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-bold tracking-tight">
              Project ORBIT
            </p>
            <p className="text-caption mt-1 max-w-sm">
              A living digital workspace by Khalif Fatturrozy — Iterative
              Product Builder.
            </p>
          </div>
          <nav aria-label="Site links">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body font-medium hover:text-orbit-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t-2 border-orbit-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption">
            &copy; {new Date().getFullYear()} Project ORBIT. Built with the
            Blueprint Brutalism design system.
          </p>
          <nav aria-label="Social links">
            <ul className="flex gap-4">
              {socialLinks.map((link) => {
                const href = profile.socialLinks[link.key];
                if (!href) return null;
                return (
                  <li key={link.key}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label font-semibold hover:text-orbit-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
