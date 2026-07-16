import { cn } from "@/lib/cn";

type SectionProps = {
  label?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Section({
  label,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className="space-y-2">
        {label && <p className="text-label">{label}</p>}
        {title && <h2 className="text-section-title">{title}</h2>}
        {description && <p className="text-caption max-w-2xl">{description}</p>}
      </div>
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}
