# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Muhammad Mohsin (SupremeDeity) for full-time or internship software engineering roles. They land on the site to quickly judge real skill and experience, not to browse casually — the "Available for Hire" badge and resume download are aimed squarely at this audience.

## Product Purpose

A personal portfolio that gets Muhammad hired. It exists to prove, in one fast scroll, that he can build real, shipped software — not just claim to.

## Positioning

Updated per the user-provided current resume (2026-09-02; supersedes the version at `public/Mohsin_Resume.pdf`, which is now stale — see Brand Commitments). Muhammad is no longer positioned as a student with side projects; the resume now reads as a working software engineer with 3+ years of experience shipping production systems:

- **Techverin** (Aug 2024–present) title is now "Software Engineer" (was "Software Developer Intern"), building and maintaining Go backend services and React/Vue frontends for **BookMyTransfer**, a live multi-tenant ferry-booking SaaS used by 3+ operators in the Maldives, handling hundreds of thousands of production booking records.
- **Freelance** (Dec 2022–present) now includes two other named production/in-development systems: **ClinicFind** (multi-tenant healthcare SaaS) and **Divine Jewelry** (multi-outlet retail back-office across 6 outlets), plus smaller AI-focused work (OCR, TensorFlow).
- A final-year project, **NextGenCareer**, adds applied AI/LLM orchestration (OpenAI API) to the range.

The differentiator is real production scale and ownership (multi-tenant architecture, data isolation, hundreds of thousands of records, live paying operators) across a full Go/React/Vue/PostgreSQL stack, not a spread of small solo-built demos. This materially changes the story the portfolio should tell versus the current site, which still frames him as an undergraduate building side projects.

## Operating Context

Single-page, full-viewport snap-scroll site (Next.js App Router): hero → Skills → Stats → Projects → Footer, in that order in `app/page.tsx`. A `HomeAboutSection` component exists in `app/Components/home_about_section.tsx` but is currently unused/unmounted — a fact for future work to notice, not a decision to act on unprompted.

Projects shown on-site and projects on the current resume are now substantially different sets — see Evidence on Hand.

## Capabilities and Constraints

- Next.js (App Router) + TypeScript + Tailwind, Framer Motion, react-three-fiber/drei (3D crystal hero model with an `.hdr` environment and `.glb` asset), Embla carousel for the projects section.
- `app/actions/github_stats.ts` is a server action pulling live GitHub stats (followers, stars, PRs, issues, contributions) for `HomeStatsSection`.
- **Decided:** the Stats section (`HomeStatsSection`, GitHub follower/star/PR/issue/contribution counts) is no longer wanted and is slated for removal — the user judged it unnecessary now that the resume/projects already carry the evidence.
- Deployment is Vercel (`process.env.VERCEL_GIT_COMMIT_SHA` used in the footer commit hash).

## Visual Direction (2026-09-02 redesign)

After a direction round (nautical/harbor-signal worlds, then a bolder round of foreign-form challengers), the user opted out of the concept-tournament in plain words: "I don't get what half of this means. I need a clear resume, simple, pastel colors and looking professional." This is the standing exit (category standard, played straight), taken deliberately, not a fallback.

- **Craft bar:** Notion / Raycast register — pastel accent blocks on a light neutral ground, rounded cards, calm precision, generous whitespace. Not corporate-generic, not decorative/conceptual.
- **Structure:** the site mirrors the resume's own order — Experience → Projects → Skills → Education — rather than a shorter highlight reel. The resume is the content spec.
- This is a standing preference: future visual work on this site should stay in this register unless the user asks to reopen it.

## Brand Commitments

- Name: Muhammad Mohsin, handle/GitHub: SupremeDeity, domain: supdeity.com, contact: mail@supdeity.com, LinkedIn: linkedin.com/in/muhammad-mohsin-sh.
- Established visual identity (undocumented in a DESIGN.md, but consistent across all sections): near-black background, emerald/green primary accent (`text-primary`, `drop-shadow-primary`), uppercase section headers, animated gradient-bordered buttons, full-viewport snap-scroll sections.
- Resume is meant to be a real, maintained asset linked directly for download — keep it as the source of truth for experience claims rather than restating them independently in copy. The file currently at `/Mohsin_Resume.pdf` needs replacing (see Known Stale Assets).

## Evidence on Hand

- Current resume names five projects: **BookMyTransfer**, **ClinicFind**, **Divine Jewelry**, **NextGenCareer**, and **Kaku** (kaku.supdeity.mv, github.com/supremedeity/kaku — note the `.mv` domain, not `.com` as currently linked on-site). Only Kaku overlaps with the six currently on the site (Kaku, Urbane, DevTools, Siminventory, Maestro, Screenok); the other five on-site projects are absent from the current resume and the four new resume projects aren't on the site at all. **This is the central reconciliation the coming makeover must resolve — do not assume either list is authoritative without asking.**
- BookMyTransfer, ClinicFind, and Divine Jewelry are client/production work — confirm with the user before the makeover whether any are under NDA or otherwise can't be shown publicly (client work often is), since none currently has a public screenshot/URL on hand.
- No testimonials, case studies, or press — do not fabricate any.

## Known Stale Assets

- `public/Mohsin_Resume.pdf` is outdated (reflects the old "Software Developer Intern" / student framing). The user pasted the current resume's text/layout in conversation but has not yet supplied the actual PDF file — get the real file before the makeover ships, and do not synthesize a replacement PDF from the pasted text.

## Product Principles

1. Lead with verifiable evidence (live project links, GitHub activity, the resume) over unsupported claims — this is what separates the portfolio from a generic student site.
2. Optimize for a recruiter's fast scan: the story (breadth + real work experience) should read in seconds, not require digging.
3. The 3D hero and motion craft are themselves proof of frontend skill and should stay — but never at the cost of a slow or confusing first impression.
4. When two sources of truth disagree (e.g. resume vs. on-site project list), surface it and ask rather than silently reconciling.
5. Retire sections that no longer serve the "prove real skill fast" goal (e.g. the Stats section) rather than polishing them in place.
