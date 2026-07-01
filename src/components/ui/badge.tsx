import { cn } from "@/lib/cn";

const variantStyles = {
  neutral:
    "border-orbit-ink text-orbit-ink bg-orbit-surface",
  orange:
    "border-orbit-orange text-orbit-orange bg-orbit-orange/5",
  yellow:
    "border-orbit-yellow text-[#9B7A0A] bg-orbit-yellow/5",
  olive:
    "border-orbit-olive text-orbit-olive bg-orbit-olive/5",
  sky: "border-orbit-sky text-[#0369A1] bg-orbit-sky/5",
  success:
    "border-orbit-green text-orbit-green bg-orbit-green/5",
  danger: "border-orbit-red text-orbit-red bg-orbit-red/5",
};

type BadgeProps = {
  variant?: keyof typeof variantStyles;
  className?: string;
  children: React.ReactNode;
};

export function Badge({
  variant = "neutral",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-orbit-sm border-2 px-2.5 py-1 text-label",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
