import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Tag } from "./Tag";
import { SectionHeading } from "./SectionHeading";

const tilts = ["-rotate-[0.7deg]", "rotate-[0.8deg]", "-rotate-[0.5deg]"];
const corners = [
  "rounded-tl-[8px] rounded-tr-[34px] rounded-br-[8px] rounded-bl-[34px]",
  "rounded-tl-[34px] rounded-tr-[8px] rounded-br-[34px] rounded-bl-[8px]",
];
const tape = [
  "bg-coral-500/70 -rotate-[8deg] left-6",
  "bg-blue-500/70 rotate-[6deg] right-8",
  "bg-lavender-500/70 -rotate-[5deg] left-10",
];

const projects = [
  {
    name: "BookMyTransfer",
    status: "Ongoing",
    flagship: true,
    stack: ["Go", "React", "Vue", "PostgreSQL", "GORM"],
    description:
      "The next-generation version of a production ferry-booking platform serving 3+ major operators across the Maldives — passenger bookings, trip scheduling, ticketing, payments, and reporting.",
    facts: [
      "Multi-tenant architecture with complete isolation of bookings, schedules, and passenger records per operator",
      "Processes hundreds of passenger bookings daily across hundreds of thousands of accumulated booking records",
    ],
  },
  {
    name: "ClinicFind",
    status: "In Development",
    stack: ["Go", "React", "PostgreSQL"],
    description:
      "A multi-tenant healthcare SaaS platform enabling clinics to manage appointments, doctors, patients, and day-to-day operations from a single cloud-based system.",
    facts: [
      "Hybrid architecture: each clinic keeps isolated operational data while patients hold one account across every participating clinic",
      "Tenant-aware authentication and authorization built to scale to hundreds of clinics",
    ],
  },
  {
    name: "Divine Jewelry",
    status: "Ongoing",
    stack: ["Go", "React", "Vite", "PostgreSQL", "GORM"],
    description:
      "The back-office of a multi-outlet retail platform used across 6 jewelry outlets — sales, inventory, purchasing, stock transfers, and customer management.",
    facts: [
      "Full sales lifecycle: orders, payments, refunds, discount approvals, and audit history across outlets",
      "GRNs, stock valuation reports, barcode management, and role-based access control",
    ],
  },
  {
    name: "NextGenCareer",
    status: "Final Year Project",
    stack: ["React", "Go", "Python", "OpenAI API", "PostgreSQL"],
    description:
      "An AI-powered career guidance platform generating personalized roadmaps, ATS resume analysis, mock interviews, and real-time job market insights.",
    facts: [
      "LLM-orchestration pipeline connecting multiple career guidance tools into one platform",
    ],
  },
  {
    name: "Kaku",
    status: "Aug 2024",
    stack: ["Nuxt", "Vue", "JavaScript"],
    description:
      "An open-source, Excalidraw-inspired diagramming app with a hand-drawn canvas for brainstorming and collaborative visual planning.",
    facts: ["Published open source — actively maintained, with community stars and forks"],
    links: {
      site: "https://kaku.supdeity.mv",
      github: "https://github.com/supremedeity/kaku",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-coral-50/60 py-16">
      <div className="mx-auto max-w-5xl px-6">
      <SectionHeading tone="coral">Projects</SectionHeading>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className={`relative flex flex-col bg-surface p-6 shadow-[0_10px_26px_-10px_rgba(43,35,24,0.28)] transition-transform duration-300 hover:z-10 hover:rotate-0 hover:shadow-[0_16px_34px_-12px_rgba(43,35,24,0.34)] ${corners[i % corners.length]} ${tilts[i % tilts.length]}`}
          >
            <span
              aria-hidden
              className={`absolute -top-3 h-6 w-16 rounded-[2px] shadow-sm ${tape[i % tape.length]}`}
            />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink">
                {project.name}
              </h3>
              <Tag tone={project.flagship ? "coral" : "neutral"}>
                {project.flagship ? "Flagship · " : ""}
                {project.status}
              </Tag>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-col gap-2">
              {project.facts.map((fact) => (
                <li
                  key={fact}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-500"
                  />
                  {fact}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech} tone="lavender">
                  {tech}
                </Tag>
              ))}
            </div>

            {project.links && (
              <div className="mt-5 flex items-center gap-4 border-t border-dashed border-ink-muted/25 pt-4 text-sm font-medium">
                <a
                  href={project.links.site}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-blue-700 transition-colors hover:text-blue-500"
                >
                  Visit site
                  <FaArrowUpRightFromSquare className="text-xs" aria-hidden />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
                >
                  <FaGithub aria-hidden />
                  Source
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
