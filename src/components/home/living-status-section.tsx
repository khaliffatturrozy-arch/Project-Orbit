import { Section } from "@/components/layout/section";
import { StatusWidget } from "@/components/orbit/status-widget";

export function LivingStatusSection() {
  return (
    <Section
      label="CURRENTLY BUILDING"
      title="Project ORBIT is alive and growing."
      description="Skyhook Mobile is the current focus — an extension of the coffee ecosystem platform."
    >
      <div className="max-w-md">
        <StatusWidget />
      </div>
    </Section>
  );
}
