"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/#contact" },
];

const rightLinks = [
  { label: "GitHub", href: profile.socialLinks.github ?? "https://github.com/khaliffatturrozy-arch" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-orbit-border bg-orbit-bg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1440px] flex-col px-4 py-3 sm:px-6 lg:px-10"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center min-h-[48px] font-heading text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
          >
            Project ORBIT
          </Link>

          <button
            className="flex min-h-[48px] w-[48px] flex-col items-center justify-center gap-1.5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-orbit-ink transition-transform",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-orbit-ink transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-orbit-ink transition-transform",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </button>

          <div
            className="hidden md:flex md:items-center md:gap-8"
          >
            <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center min-h-[48px] px-3 py-2 text-body font-medium underline-offset-2 transition-colors hover:text-orbit-muted hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l-2 border-orbit-border pl-6">
              {rightLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center min-h-[48px] px-3 py-2 text-label font-semibold underline-offset-2 transition-colors hover:text-orbit-muted hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="border-t-2 border-orbit-border bg-orbit-bg px-0 pb-4 pt-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex w-full min-h-[48px] items-center px-4 py-3 text-body font-medium underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {rightLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex w-full min-h-[48px] items-center px-4 py-3 text-body font-medium underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-sm"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
