import { cn } from "@/lib/utils";

const tones = {
  coral: "text-coral-500",
  blue: "text-blue-500",
  lavender: "text-lavender-500",
  sage: "text-sage-500",
} as const;

export function TapePiece({
  tone = "coral",
  className,
}: {
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-7 w-9 shadow-sm",
        tones[tone],
        className
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(120deg, rgba(255,255,255,0.5) 0 2px, transparent 2px 6px)",
        backgroundColor: "currentColor",
        opacity: 0.75,
      }}
    />
  );
}
