import { Tag } from "./Tag";
import { SectionHeading } from "./SectionHeading";

const tones = ["blue", "sage", "coral", "lavender"] as const;

const categories = [
  {
    name: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Python", "Dart", "SQL", "Rust", "Java"],
  },
  {
    name: "Frontend",
    items: ["React", "Vite", "Vue", "Nuxt", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Go", "Express.js", "Node.js", "REST APIs", "GORM"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MariaDB", "MySQL", "SQLite", "Firebase"],
  },
  {
    name: "AI / ML",
    items: ["TensorFlow", "Keras", "OpenCV", "PaddleOCR", "HuggingFace", "FAISS"],
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Linux", "Nginx", "Cloudflare"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-sage-50/70 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading tone="sage">Skills</SectionHeading>

        <div className="mt-10 flex flex-col">
          {categories.map((category, i) => (
            <div
              key={category.name}
              className="flex flex-col gap-3 border-t border-dashed border-ink-muted/25 py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-8"
            >
              <h3 className="w-32 shrink-0 font-display text-base font-semibold text-ink">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Tag key={item} tone={tones[i % tones.length]}>
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
