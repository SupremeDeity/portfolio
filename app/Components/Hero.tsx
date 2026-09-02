import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa6";
import { Tag } from "./Tag";
import { Squiggle } from "./Squiggle";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pt-20">
      <div>
        <Tag tone="sage">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-700" />
          </span>
          Available for hire
        </Tag>
      </div>

      <h1 className="relative mt-6 block w-fit pb-2 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
        Muhammad Mohsin
        <Squiggle className="absolute bottom-0 left-0 h-3 w-full text-coral-500" />
      </h1>
      <p className="mt-3 font-display text-lg italic text-ink-muted">
        Software Engineer — Go, React &amp; Vue
      </p>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
        3+ years building production web applications end to end — backend
        architecture and REST API design through frontend implementation.
        Currently building{" "}
        <span className="font-medium text-ink">BookMyTransfer</span>, a
        multi-tenant ferry-booking platform live with 3+ operators in the
        Maldives, alongside multi-tenant SaaS work for healthcare and retail.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="mailto:mail@supdeity.com"
          className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <FaAt aria-hidden />
          mail@supdeity.com
        </a>
        <a
          href="https://github.com/SupremeDeity"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-muted"
        >
          <FaGithub aria-hidden />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/muhammad-mohsin-sh"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-muted"
        >
          <FaLinkedin aria-hidden />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
