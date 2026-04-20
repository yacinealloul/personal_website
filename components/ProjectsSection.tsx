"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Project = {
  name: string;
  metric: string;
  description: string;
  href?: string;
  logo?: string;
};

const projects: Project[] = [
  {
    name: "Resurge",
    metric: "Shipped",
    description:
      "Managed 5+ token exits for top-tier VCs on illiquid crypto positions.",
    href: "https://resurge.to/",
    logo: "/resurge.png",
  },
  {
    name: "How2Jump",
    metric: "Shipped",
    description:
      "iOS app coaching your vertical jump. 10k+ users.",
    href: "https://apps.apple.com/us/app/how2jump-jump-higher-faster/id6755148059",
    logo: "/how2jump.webp",
  },
  {
    name: "DegenExpress",
    metric: "$75M volume",
    description:
      "Crypto trading bot that did over $75M in volume. Built in 2024.",
    href: "https://x.com/degenexpress69",
    logo: "/degenexpress.png",
  },
  {
    name: "TruePerson",
    metric: "200k users",
    description:
      "AI roleplay platform with over 200k users. Built in 2023, now stopped.",
    href: "https://www.trueperson.ai/",
    logo: "/trueperson.jpg",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.06, ease },
  }),
};

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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project, i) => {
          const CardInner = (
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white/60 p-5 transition-colors duration-300 group-hover:border-stone-300 group-hover:bg-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex min-w-0 items-center gap-3.5">
                {project.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.logo}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 rounded-lg object-cover"
                    loading="lazy"
                  />
                )}
                <h3 className="truncate text-[15px] font-medium tracking-tight text-stone-900">
                  {project.name}
                </h3>
              </div>
              <p className="relative text-[13px] leading-[1.6] text-stone-500">
                {project.description}
              </p>
            </div>
          );

          return (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group"
            >
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {CardInner}
                </a>
              ) : (
                CardInner
              )}
            </motion.div>
          );
        })}

        <motion.div
          custom={projects.length}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="sm:col-span-2"
        >
          <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-dashed border-stone-300/80 bg-gradient-to-br from-white/60 to-stone-50/40 p-5">
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-gradient-to-tr from-stone-300/30 to-stone-300/0 blur-3xl" />
            <div className="relative flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-stone-700" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
                & many more
              </span>
            </div>
            <p className="relative text-[13px] leading-[1.6] text-stone-500">
              I&apos;ve shipped a lot more — AI website builders, AI video
              makers, and plenty of other experiments. I&apos;ll list all my
              small bets here soon.{" "}
              <a
                href="mailto:alloul.yacine@protonmail.com"
                className="text-stone-700 underline decoration-stone-300 decoration-1 underline-offset-[3px] transition-colors hover:text-stone-900 hover:decoration-stone-900"
              >
                Ping me if curious.
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
