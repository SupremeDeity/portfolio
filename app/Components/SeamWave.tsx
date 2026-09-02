import { cn } from "@/lib/utils";

export function SeamWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-5 w-full -translate-y-1/2 text-ink/40",
        className
      )}
    >
      <path
        d="M0,10 C25,4 45,16 70,9 C95,3 115,15 140,9 C165,3 185,15 210,9 C235,3 255,15 280,9 C305,3 325,15 350,9 C368,5 385,13 400,9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
