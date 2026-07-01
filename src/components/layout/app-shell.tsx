import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlueprintGrid } from "@/components/orbit/blueprint-grid";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen bg-orbit-bg">
      <BlueprintGrid />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
