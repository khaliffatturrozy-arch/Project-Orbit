import type { Product } from "@/types/orbit";

export const products: Product[] = [
  {
    id: "skyhook",
    slug: "skyhook",
    title: "Skyhook",
    subtitle: "Coffee Ecosystem Platform",
    description:
      "A growing product ecosystem for a coffee business, covering website, reservation, admin dashboard, POS, and an in-progress mobile app.",
    status: "in-progress",
    progress: 75,
    industry: "Food & Beverage",
    role: "Product Engineer",
    services: [
      "UI/UX Design",
      "Frontend",
      "Backend",
      "Dashboard",
      "POS",
      "Mobile App",
      "Deployment",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel"],
    links: {
      live: "https://skyhookcoffee.vercel.app/",
      caseStudy: "/products/skyhook",
    },
    featured: true,
    overview:
      "Skyhook is a growing coffee business product ecosystem that started from a public-facing website and evolved into a broader platform covering reservation, admin workflows, POS direction, and an in-progress mobile app.",
    problem:
      "A coffee business needs more than a beautiful landing page. It needs a clear digital experience for customers, operational tools for internal teams, and a scalable foundation for future product expansion.",
    solution:
      "I approached Skyhook as a product ecosystem: public website for discovery, reservation flow for customer action, dashboard direction for operations, POS direction for transactions, and mobile app development for a stronger customer experience.",
    impact:
      "Skyhook became a proof of iterative product development: a project that keeps evolving from web presence into a connected digital platform.",
    myRole: [
      "Product direction",
      "UI/UX design",
      "Frontend development",
      "Backend integration",
      "Dashboard planning",
      "POS direction",
      "Mobile app development direction",
      "Deployment",
    ],
    features: [
      { title: "Public coffee shop website", description: "Customer-facing product discovery and brand experience" },
      { title: "Reservation experience", description: "Converts visitors into booking actions" },
      { title: "Admin dashboard direction", description: "Internal operational control direction" },
      { title: "POS product direction", description: "Transaction and cashier workflow direction" },
      { title: "Mobile app in progress", description: "In-progress customer-facing mobile experience" },
      { title: "Product ecosystem structure", description: "Product data, user flow, and future operational integration" },
      { title: "Responsive interface", description: "Fully responsive across desktop, tablet, and mobile" },
      { title: "Deployment pipeline", description: "Automated CI/CD with preview deployments" },
    ],
    architecture: [
      { label: "Public Website", description: "Customer-facing product discovery and brand experience" },
      { label: "Reservation Flow", description: "Converts visitors into booking actions" },
      { label: "Admin Dashboard", description: "Internal operational control direction" },
      { label: "POS Direction", description: "Transaction and cashier workflow direction" },
      { label: "Mobile App", description: "In-progress customer-facing mobile experience" },
      { label: "Backend/Data Layer", description: "Product data, user flow, and future operational integration" },
    ],
    decisions: [
      {
        title: "Treating Skyhook as a product ecosystem",
        context:
          "The initial need could have been solved as a simple website.",
        decision:
          "Structure the work as a product ecosystem with room for dashboard, POS, and mobile expansion.",
        tradeoff:
          "More planning is required early, but the product becomes easier to extend later.",
      },
      {
        title: "Iterative build instead of one-time delivery",
        context:
          "The product scope grew as more operational needs appeared.",
        decision:
          "Build incrementally so the platform can evolve without redesigning from zero.",
        tradeoff:
          "Some features are delivered in phases, but each phase is more maintainable.",
      },
      {
        title: "Separating public experience and operational direction",
        context:
          "Customers and internal operators need different interfaces.",
        decision:
          "Keep public website experience clear while preparing dashboard and POS directions separately.",
        tradeoff:
          "More structure is needed, but it avoids mixing customer-facing and internal workflows.",
      },
    ],
    roadmap: [
      { title: "Website foundation", status: "done", description: "Public-facing brand and menu website deployed." },
      { title: "Reservation experience", status: "done", description: "Booking flow for customer table reservations." },
      { title: "Admin dashboard direction", status: "done", description: "Internal dashboard structure and planning." },
      { title: "POS direction", status: "in-progress", description: "Transaction and cashier interface direction." },
      { title: "Mobile app", status: "in-progress", description: "Customer-facing mobile experience in development." },
      { title: "Deeper analytics", status: "planned", description: "Business insights and operational metrics." },
      { title: "Customer membership experience", status: "planned", description: "Loyalty and membership program." },
    ],
    reflection:
      "Skyhook is the clearest example of how I approach digital products: start from a real need, ship a usable version, then keep evolving the product ecosystem as the business direction becomes clearer.",
  },
  {
    id: "sleepwise",
    slug: "sleepwise",
    title: "SleepWise",
    subtitle: "AI Sleep Assessment Platform",
    description:
      "A sleep health assessment product using domain scoring, rule-based reasoning, knowledge base, bilingual support, and PDF report generation.",
    status: "live",
    progress: 100,
    industry: "Health / Wellness",
    role: "Product Engineer",
    services: [
      "Research",
      "UI/UX",
      "Frontend",
      "Expert System",
      "PDF Report",
      "Deployment",
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      live: "https://sleepwise-tau.vercel.app/",
      caseStudy: "/products/sleepwise",
    },
    featured: true,
    overview:
      "SleepWise is a sleep health assessment product that combines structured questions, domain scoring, rule-based reasoning, bilingual experience, and PDF reporting to help users understand sleep-related risk patterns.",
    problem:
      "Many users struggle to understand whether their sleep problems are lifestyle-related, psychological, behavioral, or physical. A simple form is not enough; the system needs structured reasoning and clear explanation.",
    solution:
      "SleepWise uses a guided assessment flow, domain-based scoring, rule mapping, transparent result explanation, recommendations, and downloadable PDF reporting.",
    impact:
      "SleepWise demonstrates how research-backed product logic can be turned into a usable assessment experience with clear output and future AI expansion potential.",
    myRole: [
      "Product concept",
      "Research mapping",
      "UI/UX design",
      "Frontend development",
      "Rule-based logic",
      "Result interpretation",
      "PDF report direction",
      "Deployment",
    ],
    features: [
      { title: "Sleep assessment flow", description: "Guided structured questions for sleep health evaluation" },
      { title: "Domain scoring", description: "Answers grouped into weighted behavioral and physical domains" },
      { title: "Rule-based reasoning", description: "Maps symptoms and patterns into structured interpretation" },
      { title: "Bilingual support", description: "Full experience in Indonesian and English" },
      { title: "Result explanation", description: "Converts raw scoring into readable, actionable explanation" },
      { title: "PDF report generation", description: "Creates downloadable summary for users to save or share" },
      { title: "Recommendation output", description: "Personalized suggestions based on assessment results" },
      { title: "Responsive interface", description: "Works across desktop and mobile devices" },
    ],
    architecture: [
      { label: "Assessment Flow", description: "Collects structured sleep-related user input" },
      { label: "Scoring Engine", description: "Groups answers into weighted domains" },
      { label: "Rule System", description: "Maps symptoms and patterns into interpretation" },
      { label: "Result View", description: "Converts raw scoring into readable explanation" },
      { label: "PDF Report", description: "Creates downloadable summary for users" },
      { label: "Language Layer", description: "Supports Indonesian and English experience" },
    ],
    decisions: [
      {
        title: "Rule-based reasoning before full AI dependency",
        context:
          "Health-related assessment needs explainability and consistency.",
        decision:
          "Use structured rules and scoring logic before relying heavily on generative AI.",
        tradeoff:
          "Less flexible than full AI, but more transparent and easier to validate.",
      },
      {
        title: "Domain scoring for clearer interpretation",
        context:
          "Sleep issues can come from different areas.",
        decision:
          "Divide scoring into domains such as behavior, psychological, lifestyle, and physical patterns.",
        tradeoff:
          "Requires more structured question mapping, but the result becomes easier to explain.",
      },
      {
        title: "PDF output as a trust feature",
        context:
          "Users may want to save or review their assessment result.",
        decision:
          "Add report generation direction to make the result feel more complete and useful.",
        tradeoff:
          "Adds complexity, but increases perceived product value.",
      },
    ],
    roadmap: [
      { title: "Assessment flow", status: "done", description: "Core question flow implemented and deployed." },
      { title: "Rule-based scoring", status: "done", description: "Domain scoring and rule reasoning operational." },
      { title: "Bilingual experience", status: "done", description: "Indonesian and English language support." },
      { title: "PDF report direction", status: "done", description: "Report generation structure in place." },
      { title: "Stronger AI interpretation", status: "planned", description: "Deeper AI integration for result analysis." },
      { title: "Improved dashboard/report history", status: "planned", description: "User history and saved reports." },
      { title: "Better clinical disclaimer layer", status: "planned", description: "Enhanced medical disclaimers and guidance." },
    ],
    reflection:
      "SleepWise taught me that product quality is not only about interface design. The logic behind the result, the explanation, and the user's trust in the system matter just as much.",
  },
  {
    id: "orbit",
    slug: "project-orbit",
    title: "Project ORBIT",
    subtitle: "Living Product Portfolio",
    description:
      "A product-focused portfolio designed as a living digital workspace to showcase products, engineering decisions, and iterative growth.",
    status: "in-progress",
    progress: 10,
    industry: "Personal Brand / Product Portfolio",
    role: "Product Designer & Engineer",
    services: [
      "Brand Strategy",
      "UI System",
      "Frontend",
      "Content Architecture",
      "SEO",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      caseStudy: "/products/project-orbit",
    },
    featured: true,
    overview:
      "Project ORBIT is a living product portfolio designed to present digital products, engineering decisions, product thinking, and continuous iteration in one coherent experience.",
    problem:
      "Most portfolios only show final screenshots. They rarely explain the thinking, trade-offs, product structure, or evolution behind the work.",
    solution:
      "ORBIT is built as a product-focused workspace where each product can be explored through overview, problem, solution, architecture, engineering decisions, roadmap, and reflection.",
    impact:
      "ORBIT turns a personal portfolio into a trust-building product system that can evolve with future work.",
    myRole: [
      "Brand strategy",
      "Product direction",
      "Design system",
      "Content architecture",
      "Frontend development",
      "SEO foundation",
      "Accessibility foundation",
    ],
    features: [
      { title: "Product ecosystem homepage", description: "Central hub showcasing all products and identity" },
      { title: "Reusable design system", description: "Consistent component library for rapid development" },
      { title: "Product case study system", description: "In-depth pages explaining product thinking and decisions" },
      { title: "Blueprint Brutalism visual language", description: "Mature neubrutalism with engineering-inspired details" },
      { title: "Living status widget", description: "Real-time project status and progress indicators" },
      { title: "Responsive layout", description: "Fully responsive across all device sizes" },
      { title: "SEO metadata", description: "Structured metadata for search visibility" },
      { title: "Accessibility-first components", description: "Semantic HTML and keyboard-navigable interface" },
    ],
    architecture: [
      { label: "Homepage", description: "Communicates identity and product ecosystem" },
      { label: "Product Pages", description: "Explain product thinking and decisions" },
      { label: "Data Layer", description: "Stores products, labs, and profile information" },
      { label: "Design System", description: "Keeps components visually consistent" },
      { label: "Content Architecture", description: "Turns work into structured evidence" },
      { label: "Future Extensions", description: "Lab, journal, archive, and deeper product pages" },
    ],
    decisions: [
      {
        title: "Product portfolio instead of generic portfolio",
        context:
          "A regular portfolio structure would not communicate the depth of product work.",
        decision:
          "Organize the website around products, decisions, and iteration.",
        tradeoff:
          "Requires more structured content, but creates stronger trust.",
      },
      {
        title: "Blueprint Brutalism as visual direction",
        context:
          "The portfolio needed personality without becoming childish.",
        decision:
          "Combine mature neubrutalism, whitespace, product hierarchy, and engineering-inspired blueprint details.",
        tradeoff:
          "Requires strict consistency to avoid visual noise.",
      },
      {
        title: "Data-driven product structure",
        context:
          "The portfolio needs to scale as new products are added.",
        decision:
          "Store products in a structured data layer rather than hardcoding every section.",
        tradeoff:
          "More setup early, but easier long-term maintenance.",
      },
    ],
    roadmap: [
      { title: "Foundation", status: "done", description: "Project setup, design system, and core layout." },
      { title: "Homepage", status: "done", description: "Identity, product ecosystem, and process sections." },
      { title: "Product case study system", status: "in-progress", description: "In-depth product detail pages." },
      { title: "Lab system", status: "planned", description: "Experiments and component exploration area." },
      { title: "About / identity page", status: "planned", description: "Personal background and philosophy." },
      { title: "Journal", status: "planned", description: "Writing and product thinking log." },
      { title: "Archive", status: "planned", description: "Historical product versions and iterations." },
    ],
    reflection:
      "ORBIT is designed as proof of how I think: build with structure, explain decisions, and keep improving the product over time.",
  },
];
