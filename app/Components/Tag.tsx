import { cn } from "@/lib/utils";

const tones = {
  sage: "bg-sage-50 text-sage-700 border-sage-500/40",
  blue: "bg-blue-50 text-blue-700 border-blue-500/40",
  coral: "bg-coral-50 text-coral-700 border-coral-500/40",
  lavender: "bg-lavender-50 text-lavender-700 border-lavender-500/40",
  neutral: "bg-surface text-ink-muted border-border",
} as const;

export function Tag({
  tone = "neutral",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed px-3 py-1 text-xs font-medium leading-none",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
