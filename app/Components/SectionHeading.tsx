import { Squiggle } from "./Squiggle";

const tones = {
  sage: "text-sage-500",
  blue: "text-blue-500",
  coral: "text-coral-500",
  lavender: "text-lavender-500",
} as const;

export function SectionHeading({
  tone,
  children,
}: {
  tone: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <h2 className="relative block w-fit pb-3 font-display text-2xl font-semibold tracking-tight text-ink">
      {children}
      <Squiggle className={`absolute bottom-0 left-0 h-2.5 w-full ${tones[tone]}`} />
    </h2>
  );
}
