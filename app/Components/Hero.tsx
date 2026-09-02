import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa6";
import { Tag } from "./Tag";
import { Squiggle } from "./Squiggle";
import { Button } from "./Button";

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

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button href="mailto:mail@supdeity.com">
          <FaAt aria-hidden />
          mail@supdeity.com
        </Button>
        <Button
          href="https://github.com/SupremeDeity"
          target="_blank"
          variant="outline"
        >
          <FaGithub aria-hidden />
          GitHub
        </Button>
        <Button
          href="https://linkedin.com/in/muhammad-mohsin-sh"
          target="_blank"
          variant="outline"
        >
          <FaLinkedin aria-hidden />
          LinkedIn
        </Button>
      </div>
    </section>
  );
}
