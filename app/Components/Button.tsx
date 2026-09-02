import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-[1.5px] border-ink bg-blue-500 text-white shadow-[0_10px_22px_-10px_rgba(43,35,24,0.45)] hover:bg-blue-700 hover:shadow-[0_14px_26px_-10px_rgba(43,35,24,0.5)] active:shadow-[0_5px_12px_-8px_rgba(43,35,24,0.4)]",
  outline:
    "border-[1.5px] border-ink bg-surface text-ink shadow-[0_6px_16px_-10px_rgba(43,35,24,0.32)] hover:bg-cream hover:shadow-[0_10px_20px_-10px_rgba(43,35,24,0.36)] active:shadow-[0_3px_10px_-8px_rgba(43,35,24,0.28)]",
} as const;

const tilts = {
  primary: "-rotate-1",
  outline: "rotate-1",
} as const;

export function Button({
  href,
  target,
  variant = "primary",
  tilt = true,
  className,
  children,
}: {
  href: string;
  target?: string;
  variant?: keyof typeof variants;
  tilt?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-[3px] px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:rotate-0 active:translate-y-0 active:duration-75",
        variants[variant],
        tilt && tilts[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
