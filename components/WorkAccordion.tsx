"use client";

import { motion, type Variants } from "framer-motion";
import { work } from "@/lib/work";

const ease = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.06, ease },
  }),
};

export default function WorkAccordion() {
  return (
    <ol className="flex flex-col">
      {work.map((item, i) => {
        const domain = item.website
          ?.replace(/^https?:\/\//, "")
          .replace(/^www\./, "")
          .replace(/\/$/, "");

        const body = (
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4">
            <div className="col-start-1 row-start-1 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-stone-200/80 bg-white">
              {domain ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-[11px] font-semibold text-stone-400">
                  {item.company[0]}
                </span>
              )}
            </div>

            <div className="col-start-2 row-start-1 flex min-w-0 flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-[15px] font-medium tracking-tight text-stone-900">
                  {item.company}
                </h3>
                {item.current && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-stone-900" />
                  </span>
                )}
                {item.website && (
                  <svg
                    className="text-stone-300 transition-colors duration-200 group-hover:text-stone-900"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                )}
              </div>
              <p className="text-[13px] text-stone-400">{item.role}</p>
            </div>

            <p className="col-start-3 row-start-1 shrink-0 text-right text-[11px] font-mono uppercase tracking-wider text-stone-300 tabular-nums whitespace-nowrap">
              {item.period}
            </p>
          </div>
        );

        return (
          <motion.li
            key={item.slug}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="group"
          >
            {item.website ? (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-stone-100/70"
              >
                {body}
              </a>
            ) : (
              <div className="rounded-lg px-3 py-4">{body}</div>
            )}

            {i < work.length - 1 && <div className="h-px w-full bg-stone-100" />}
          </motion.li>
        );
      })}
    </ol>
  );
}
