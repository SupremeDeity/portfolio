import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa6";
import { SeamWave } from "./SeamWave";

export function Footer() {
  return (
    <footer className="relative">
      <SeamWave />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-ink">
            Let&apos;s connect
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Open to full-time and internship roles.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-ink-muted">
          <a
            href="mailto:mail@supdeity.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <FaAt aria-hidden />
            mail@supdeity.com
          </a>
          <a
            href="https://github.com/SupremeDeity"
            target="_blank"
            className="inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <FaGithub aria-hidden />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/muhammad-mohsin-sh"
            target="_blank"
            className="inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <FaLinkedin aria-hidden />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
