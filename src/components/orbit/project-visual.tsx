import { cn } from "@/lib/cn";

type ProjectVisualProps = {
  title: string;
  subtitle: string;
  typeLabel: string;
  status: string;
  progress?: number;
  className?: string;
};

const gridSize = 20;

export function ProjectVisual({
  title,
  subtitle,
  typeLabel,
  status,
  progress,
  className,
}: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-orbit-lg border-2 border-orbit-border bg-orbit-surface shadow-orbit-sm",
        className
      )}
      role="img"
      aria-label={`${title} — ${subtitle}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: [
            "linear-gradient(to right, #111111 1px, transparent 1px)",
            "linear-gradient(to bottom, #111111 1px, transparent 1px)",
          ].join(","),
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-0.5">
            <p className="font-heading text-lg font-bold tracking-tight">{title}</p>
            <p className="text-caption text-xs">{subtitle}</p>
          </div>
          <span className="text-label shrink-0 rounded-orbit-sm border-2 border-orbit-border bg-orbit-bg px-2 py-0.5 text-[10px]">
            {typeLabel}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-block h-1.5 w-1.5 rounded-full",
              status === "live" && "bg-orbit-green",
              status === "in-progress" && "bg-orbit-orange",
              status === "concept" && "bg-orbit-sky",
              status === "archived" && "bg-orbit-muted"
            )}
            aria-hidden="true"
          />
          <span className="text-caption text-[10px] text-orbit-ink">{status}</span>
        </div>

        {progress !== undefined && (
          <div className="space-y-1">
            <div
              className="h-1.5 w-full overflow-hidden rounded-full border border-orbit-border bg-orbit-bg"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${title} progress`}
            >
              <div
                className="h-full rounded-full bg-orbit-ink transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-[10px] text-orbit-ink">Progress</span>
              <span className="text-caption text-[10px] font-semibold text-orbit-ink">{progress}%</span>
            </div>
          </div>
        )}

        <div className="mt-auto flex items-center justify-center border-t border-dashed border-orbit-border/30 pt-3 text-center">
          <span className="text-caption text-[10px] leading-relaxed text-orbit-ink">
            Product preview not yet available
          </span>
        </div>
      </div>
    </div>
  );
}
