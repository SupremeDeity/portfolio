import { Tag } from "./Tag";
import { SectionHeading } from "./SectionHeading";
import { SeamWave } from "./SeamWave";

const roles = [
  {
    company: "Techverin",
    title: "Software Engineer",
    location: "Malé, MV (Remote)",
    start: "Aug 2024",
    end: "Present",
    bullets: [
      "Build and maintain backend services in Go for production systems, including BookMyTransfer, a multi-tenant ferry-booking platform used by multiple operators in the Maldives.",
      "Build and maintain React and Vue frontends, wiring UI components to backend REST APIs and handling day-to-day feature and bug-fix work across several applications.",
      "Design REST APIs and PostgreSQL data models for multi-tenant systems, balancing new feature development with maintenance of applications already in production.",
      "Investigate and resolve production issues across the stack, from backend logic and database queries to frontend behavior.",
    ],
  },
  {
    company: "Freelance",
    title: "Software Developer",
    location: "Karachi, PK",
    start: "Dec 2022",
    end: "Present",
    bullets: [
      "Build custom software for clients, including web and mobile applications for healthcare and small-business use cases.",
      "Develop Flutter and React applications backed by Go and PostgreSQL, integrating third-party APIs and cloud services such as Firebase and Google Maps.",
      "Work on smaller AI-focused projects, including OCR-based document processing, alongside general application development and deployment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-blue-50/70 py-16">
      <SeamWave />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading tone="blue">Experience</SectionHeading>

        <div className="relative mt-10 flex flex-col gap-12">
          <div
            aria-hidden
            className="absolute bottom-6 left-[5px] top-2 hidden w-0.5 sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgb(111 160 222 / 0.55) 0 5px, transparent 5px 11px)",
            }}
          />
          {roles.map((role) => (
            <div key={role.company} className="relative sm:pl-10">
              <span
                aria-hidden
                className="absolute left-0 top-2 hidden h-3 w-3 rounded-full bg-blue-500 sm:block"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {role.title}
                  </h3>
                  <p className="text-sm text-ink-muted">
                    {role.company} · {role.location}
                  </p>
                </div>
                <Tag tone={role.end === "Present" ? "sage" : "neutral"}>
                  {role.start} – {role.end}
                </Tag>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-500"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
