import type { ArchiveItem } from "@/types/orbit";

export const archiveEntries: ArchiveItem[] = [
  {
    id: "portfolio-v1",
    title: "Personal Portfolio V1",
    description: "An earlier version of my personal portfolio focused on presenting profile, skills, and selected web work.",
    type: "personal",
    year: "2025",
    role: "Designer & Developer",
    stack: ["React", "Tailwind CSS", "Vercel"],
    tags: ["Portfolio", "Personal Brand", "Frontend"],
  },
  {
    id: "ui-exploration",
    title: "UI Exploration Collection",
    description: "A collection of interface explorations, layout studies, and visual directions created while developing stronger product UI taste.",
    type: "ui-design",
    year: "2025",
    role: "UI Designer",
    stack: ["Figma", "React", "Tailwind CSS"],
    tags: ["UI Design", "Layout", "Visual System"],
  },
  {
    id: "admin-dashboard-concepts",
    title: "Admin Dashboard Concepts",
    description: "Dashboard concept explorations for product management, operational workflows, tables, cards, and admin controls.",
    type: "dashboard",
    year: "2026",
    role: "Product Designer & Frontend Developer",
    stack: ["Next.js", "Tailwind CSS"],
    tags: ["Dashboard", "Admin", "Product UI"],
  },
  {
    id: "mobile-app-direction",
    title: "Mobile App Direction",
    description: "Early mobile interface directions and product flow explorations connected to broader product ecosystem thinking.",
    type: "mobile",
    year: "2026",
    role: "Product Designer",
    stack: ["Flutter", "Dart", "Figma"],
    tags: ["Mobile", "Product Flow", "UI Design"],
  },
];
