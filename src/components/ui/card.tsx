import { cn } from "@/lib/cn";

const variantStyles = {
  default: "bg-orbit-surface border-2 border-orbit-border shadow-orbit-sm",
  accent: "bg-orbit-orange/5 border-2 border-orbit-orange shadow-orbit-sm",
  flat: "bg-orbit-bg border-2 border-orbit-border",
};

type CardProps = {
  variant?: keyof typeof variantStyles;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-orbit-lg p-6 transition-all duration-150 ease-in-out",
        variantStyles[variant],
        hover && "hover:-translate-y-1 hover:shadow-orbit-md cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
