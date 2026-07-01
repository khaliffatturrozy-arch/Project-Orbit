export type ProductStatus = "live" | "in-progress" | "concept" | "archived";

export type ProductCaseStudySection = {
  title: string;
  body: string;
};

export type ProductDecision = {
  title: string;
  context: string;
  decision: string;
  tradeoff?: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductRoadmapItem = {
  title: string;
  status: "done" | "in-progress" | "planned";
  description: string;
};

export type ProductArchitectureItem = {
  label: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProductStatus;
  progress?: number;
  industry: string;
  role: string;
  services: string[];
  stack: string[];
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  featured: boolean;

  overview?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  myRole?: string[];
  features?: ProductFeature[];
  architecture?: ProductArchitectureItem[];
  decisions?: ProductDecision[];
  roadmap?: ProductRoadmapItem[];
  reflection?: string;
};

export type LabStatus = "exploring" | "prototype" | "shipped" | "paused";

export type LabCategory =
  | "ui"
  | "motion"
  | "ai"
  | "automation"
  | "dashboard"
  | "component"
  | "tool";

export type LabEntry = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: LabCategory;
  status: LabStatus;
  stack?: string[];
  tags?: string[];
  links?: {
    live?: string;
    github?: string;
  };
  featured?: boolean;
};

export type ArchiveType =
  | "website"
  | "landing-page"
  | "dashboard"
  | "ui-design"
  | "automation"
  | "mobile"
  | "experiment"
  | "client-work"
  | "personal";

export type ArchiveItem = {
  id: string;
  title: string;
  description: string;
  type: ArchiveType;
  year: string;
  role: string;
  stack?: string[];
  tags?: string[];
  links?: {
    live?: string;
    github?: string;
  };
};

export type Profile = {
  name: string;
  role: string;
  positioning: string;
  location: string;
  availability: string;
  shortPitch: string;
  principles: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
    twitter?: string;
    email?: string;
  };
};
