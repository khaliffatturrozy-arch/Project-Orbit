import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary:
    "bg-orbit-ink text-orbit-surface border-2 border-orbit-border shadow-orbit-sm hover:shadow-orbit-md hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-orbit-surface text-orbit-ink border-2 border-orbit-border shadow-orbit-sm hover:shadow-orbit-md hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-orbit-ink border-2 border-transparent hover:bg-orbit-bg",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit-border focus-visible:ring-offset-2 focus-visible:ring-offset-orbit-bg rounded-orbit-sm",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
