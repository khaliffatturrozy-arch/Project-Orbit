import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StatusWidget() {
  return (
    <Card variant="accent" className="space-y-4">
      <p className="text-label text-orbit-muted">Building Status</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-body font-medium">Currently Building</span>
          <span className="text-body font-semibold">Skyhook Mobile</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-body font-medium">Progress</span>
          <span className="text-body font-semibold">75%</span>
        </div>
        <div
            className="h-2 w-full overflow-hidden rounded-full border-2 border-orbit-border bg-orbit-bg"
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Skyhook Mobile development progress"
          >
          <div
            className="h-full rounded-full bg-orbit-orange transition-all"
            style={{ width: "75%" }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-body font-medium">Focus</span>
          <span className="text-body font-semibold">Product Ecosystem</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-body font-medium">Status</span>
          <Badge variant="orange">Active Development</Badge>
        </div>
      </div>
    </Card>
  );
}
