import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProductReflectionProps = {
  reflection: string;
};

export function ProductReflection({ reflection }: ProductReflectionProps) {
  return (
    <section>
      <h2 className="text-label mb-6">REFLECTION</h2>
      <Card variant="accent">
        <p className="text-body leading-relaxed">&ldquo;{reflection}&rdquo;</p>
      </Card>
    </section>
  );
}

export function ProductEngineeringPrinciples({
  engineeringPrinciples,
}: {
  engineeringPrinciples?: string[];
}) {
  if (!engineeringPrinciples || engineeringPrinciples.length === 0) return null;

  return (
    <section>
      <h2 className="text-label mb-6">ENGINEERING PRINCIPLES</h2>
      <Card variant="default">
        <ul className="space-y-3">
          {engineeringPrinciples.map((principle, index) => (
            <li key={index} className="text-body flex items-start gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-orbit-orange" />
              {principle}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export function ProductFuturePlans({
  futurePlans,
}: {
  futurePlans?: string[];
}) {
  if (!futurePlans || futurePlans.length === 0) return null;

  return (
    <section>
      <h2 className="text-label mb-6">FUTURE PLANS</h2>
      <Card variant="accent">
        <ul className="space-y-3">
          {futurePlans.map((plan, index) => (
            <li key={index} className="text-body flex items-start gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-orbit-orange" />
              {plan}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export function ProductTimeline({ roadmap }: { roadmap: { title: string; status: string; description: string }[] }) {
  if (!roadmap || roadmap.length === 0) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "done":
        return "bg-orbit-green border-orbit-green";
      case "in-progress":
        return "bg-orbit-orange border-orbit-orange";
      case "planned":
        return "bg-orbit-sky border-orbit-sky";
      default:
        return "bg-orbit-muted border-orbit-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return "✓";
      case "in-progress":
        return "⟡";
      case "planned":
        return "○";
      default:
        return "·";
    }
  };

  return (
    <section>
      <h2 className="text-label mb-6">ROADMAP</h2>
      <Card variant="default">
        <div className="relative pl-8 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-orbit-border">
          {roadmap.map((item, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              <div className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-orbit-border bg-orbit-surface">
                <span className="text-caption text-orbit-ink">{getStatusIcon(item.status)}</span>
              </div>
              <div className="ml-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-label font-semibold text-orbit-ink">{item.title}</h3>
                  <span
                    className={`text-caption rounded-orbit-sm px-2 py-0.5 text-[10px] font-medium ${getStatusColor(item.status)} text-orbit-surface`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-body mt-1 text-orbit-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export function ProductCapabilitesGrid({
  capabilities,
}: {
  capabilities?: { title: string; description: string }[];
}) {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section>
      <h2 className="text-label mb-6">CORE CAPABILITIES</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => (
          <Card key={index} variant="accent" hover>
            <div className="flex items-start gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-orbit-orange" />
              <div>
                <h3 className="text-label font-semibold text-orbit-ink mb-2">
                  {capability.title}
                </h3>
                <p className="text-body text-orbit-muted">{capability.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ProductArchitectureDiagrams({
  architecture,
}: {
  architecture?: { label: string; description: string }[];
}) {
  if (!architecture || architecture.length === 0) return null;

  return (
    <section>
      <h2 className="text-label mb-6">ARCHITECTURE</h2>
      <Card variant="default">
        <div className="space-y-6">
          {architecture.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-orbit-lg border-2 border-orbit-border bg-orbit-surface font-heading font-bold text-orbit-orange">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-label font-semibold text-orbit-ink mb-2">
                  {item.label}
                </h3>
                <p className="text-body text-orbit-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export function ProductMetricCards({
  metrics,
}: {
  metrics?: { label: string; value: string; status: string }[];
}) {
  if (!metrics || metrics.length === 0) return null;

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-orbit-green";
      case "in-progress":
        return "bg-orbit-orange";
      case "foundation":
        return "bg-orbit-sky";
      default:
        return "bg-orbit-muted";
    }
  };

  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <Card key={index} variant="flat" hover>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-caption text-orbit-muted">{metric.label}</p>
                <p className="text-section-title font-bold text-orbit-ink">{metric.value}</p>
              </div>
              <div
                className={`h-12 w-12 rounded-orbit-lg border-2 border-orbit-border ${getStatusIndicator(metric.status)} flex items-center justify-center`}
              >
                {metric.status === "complete" && "✓"}
                {metric.status === "in-progress" && "⟡"}
                {metric.status === "foundation" && "○"}
                {metric.status !== "complete" && metric.status !== "in-progress" && metric.status !== "foundation" && "·"}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ProductTechStack({
  stack,
}: {
  stack?: string[];
}) {
  if (!stack || stack.length ===0) return null;

  return (
    <section>
      <h2 className="text-label mb-6">TECHNOLOGY STACK</h2>
      <Card variant="default">
        <div className="flex flex-wrap gap-3">
          {stack.map((tech, index) => (
            <Badge
              key={tech}
              variant="neutral"
              className="text-caption font-medium hover:bg-orbit-orange/10 hover:border-orbit-orange/30 hover:text-orbit-orange transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
