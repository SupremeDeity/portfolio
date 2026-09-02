import Link from "next/link";
import { FaAt } from "react-icons/fa6";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-ink"
        >
          Muhammad Mohsin
        </Link>
        <nav
          aria-label="Section"
          className="hidden items-center gap-6 text-sm text-ink-muted md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:mail@supdeity.com"
          className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <FaAt className="text-xs" aria-hidden />
          Say hello
        </a>
      </div>
    </header>
  );
}
