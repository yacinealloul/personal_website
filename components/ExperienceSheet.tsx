"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  website?: string;
  summary?: string;
  description?: string;
  highlights?: string[];
  stack?: string[];
  current?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExperienceSheet({
  experience,
  open,
  onClose,
}: {
  experience: Experience | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && experience && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[42rem] flex-col bg-[#FAF9F7] shadow-2xl shadow-stone-900/5"
          >
            <div className="flex items-center justify-between border-b border-stone-200/70 px-5 py-4 sm:px-8 sm:py-5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-stone-400">
                Experience
              </p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="group flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-stone-100"
              >
                <svg
                  className="text-stone-500 transition-colors group-hover:text-stone-900"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-8 sm:px-8 sm:py-10">
              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.15, ease }}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-tight text-stone-900">
                      {experience.company}
                    </h3>
                    <p className="mt-1.5 text-[0.875rem] text-stone-500">
                      {experience.role}
                      {experience.location ? ` · ${experience.location}` : ""}
                    </p>
                  </div>
                  {experience.current && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-stone-200 px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-wider text-stone-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-900" />
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-wider text-stone-400 tabular-nums">
                  {experience.period}
                </p>

                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {experience.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                )}
              </motion.div>

              {experience.summary && (
                <motion.p
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.25, ease }}
                  className="mt-8 text-[clamp(0.9375rem,2vw,1.0625rem)] font-medium leading-[1.7] tracking-tight text-stone-700 sm:mt-10"
                >
                  {experience.summary}
                </motion.p>
              )}

              {experience.description && (
                <motion.div
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.32, ease }}
                  className="mt-6 space-y-4 text-[0.875rem] leading-[1.75] text-stone-500"
                >
                  {experience.description.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </motion.div>
              )}

              {experience.highlights && experience.highlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.4, ease }}
                  className="mt-8 sm:mt-10"
                >
                  <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Highlights
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3">
                    {experience.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="relative pl-5 text-[0.875rem] leading-[1.7] text-stone-600 before:absolute before:left-0 before:top-[0.7em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-stone-400"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {experience.stack && experience.stack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.48, ease }}
                  className="mt-8 sm:mt-10"
                >
                  <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Stack
                  </h4>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {experience.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-[0.6875rem] font-medium text-stone-600"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {!experience.summary && !experience.description && !experience.highlights?.length && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease }}
                  className="mt-8 text-[0.8125rem] italic text-stone-400 sm:mt-10"
                >
                  Detailed write-up coming soon.
                </motion.p>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
