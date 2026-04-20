"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-32 min-h-[50vh] scroll-mt-24 lg:mb-0 lg:flex lg:h-screen lg:min-h-0 lg:scroll-mt-0 lg:snap-start lg:flex-col lg:justify-center"
    >
      <div className="sticky top-0 z-10 -mx-8 mb-8 bg-[#FAF9F7]/85 px-8 py-4 backdrop-blur-md md:-mx-16 md:px-16 lg:static lg:mx-0 lg:mb-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 lg:sr-only">
          Projects
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9, ease }}
        className="relative overflow-hidden rounded-2xl border border-dashed border-stone-300/80 bg-gradient-to-br from-white/60 to-stone-50/40 px-8 py-14 sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-orange-200/40 to-rose-200/0 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-tl from-stone-300/40 to-stone-300/0 blur-3xl" />
        </div>

        <div className="relative flex flex-col items-start gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-stone-700" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
              In progress
            </span>
          </div>

          <div className="max-w-md">
            <h3 className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-stone-900">
              I will push soon.
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-stone-500">
              I&apos;m writing all my good cook :) (it will be long) lol
            </p>
          </div>

          <a
            href="mailto:alloul.yacine@protonmail.com"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-stone-700 transition-colors hover:text-stone-900"
          >
            <span className="underline decoration-stone-300 decoration-1 underline-offset-[3px] transition-colors group-hover:decoration-stone-900">
              Ping me if curious
            </span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
