import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Muhammad Mohsin | Software Engineer",
  description:
    "Software engineer building production multi-tenant systems in Go, React, and Vue.",
  metadataBase: new URL("https://supdeity.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${nunitoSans.variable} font-body bg-cream text-ink antialiased`}
      >
        {/*
          THESIS: A portfolio that reads like the resume itself, warmed into a
          handcrafted pastel register -- clarity beats concept, and paper
          texture plus a little imperfection beats sterile SaaS gloss.
          OWN-WORLD: Warm paper cream ground with visible fine grain plus a
          large-scale mottled wash, four named pastel roles -- sage
          (live/current), blue (primary action), coral (flagship), lavender
          (skill tags) -- washed behind sections and carried onto tag chips.
          Fraunces display (soft, slightly wonky optical serif) over Nunito
          Sans body. No uniform bordered cards: Experience/Education read as a
          hand-drawn dashed timeline, Skills as dashed-divided rows, Projects
          as tape-pinned paper with asymmetric corners that tilt off-axis and
          straighten on hover. A hand-inked squiggle, sized to the text, marks
          every heading.
          STORY: Recruiter lands, sees role and one-line positioning, scans
          Experience -> Projects -> Skills -> Education in resume order, reaches
          Muhammad directly.
          FIRST VIEWPORT: Sticky paper nav; hero with name (hand-inked
          underline), current title, one-line positioning, Available-for-Hire
          pill, Email/GitHub/LinkedIn actions -- no illustration, texture and
          warmth carry it.
          FORM: canon (category standard), taken by explicit request over the
          direction roll, then warmed toward a handcrafted register on direct
          user feedback; seed key b8177b1a.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, DESIGN.md, and every shipping
          raster carrying its provenance.
        */}
        {children}
      </body>
    </html>
  );
}
