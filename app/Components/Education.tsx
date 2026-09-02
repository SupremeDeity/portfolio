import { Tag } from "./Tag";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="bg-lavender-50/60 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading tone="lavender">Education</SectionHeading>

        <div className="relative mt-10 sm:pl-10">
          <span
            aria-hidden
            className="absolute left-0 top-2 hidden h-3 w-3 rounded-full bg-lavender-500 sm:block"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-sm text-ink-muted">
                Sir Syed University · Karachi, PK
              </p>
            </div>
            <Tag tone="blue">2022 – 2026</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}
