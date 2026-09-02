import { cn } from "@/lib/utils";

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("h-2.5 w-20", className)}
    >
      <path
        d="M2,8 C20,2 35,12 50,6 C65,0 80,10 95,5 C110,1 125,11 140,6 C155,1 170,10 185,5 C192,3 196,7 198,6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
