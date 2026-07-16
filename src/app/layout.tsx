import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Khalif Fatturrozy — Product Engineer",
  description:
    "Product-focused portfolio of Khalif Fatturrozy, an iterative product builder creating digital products across web, mobile, AI, dashboards, automation, and product ecosystems.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Khalif Fatturrozy — Product Engineer",
    description:
      "Product-focused portfolio of Khalif Fatturrozy, an iterative product builder creating digital products across web, mobile, AI, dashboards, automation, and product ecosystems.",
    type: "website",
    locale: "en_US",
    siteName: "Project ORBIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalif Fatturrozy — Product Engineer",
    description:
      "Product-focused portfolio of Khalif Fatturrozy, an iterative product builder creating digital products across web, mobile, AI, dashboards, automation, and product ecosystems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
