import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlueprintGrid } from "@/components/orbit/blueprint-grid";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen bg-orbit-bg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-orbit-sm focus:border-2 focus:border-orbit-border focus:bg-orbit-surface focus:px-4 focus:py-2.5 focus:text-body focus:font-semibold focus:shadow-orbit-sm focus:outline-none"
      >
        Skip to content
      </a>
      <BlueprintGrid />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
