"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const paragraph: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease },
  },
};

const highlight: Variants = {
  hidden: { color: "#d6d3d1" },
  show: (i: number) => ({
    color: "#1c1917",
    transition: { duration: 0.5, delay: 0.4 + i * 0.1, ease },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-32 flex min-h-[70vh] scroll-mt-24 items-center lg:mb-0 lg:h-screen lg:min-h-0 lg:scroll-mt-0 lg:snap-start"
    >
      <div className="w-full">
        <div className="sticky top-0 z-10 -mx-8 mb-8 bg-[#FAF9F7]/85 px-8 py-4 backdrop-blur-md md:-mx-16 md:px-16 lg:static lg:mx-0 lg:mb-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 lg:sr-only">
            About
          </h2>
        </div>

        <motion.p
          variants={paragraph}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          className="text-[17px] font-medium leading-[1.85] tracking-[-0.005em] text-stone-300 sm:text-[19px]"
        >
          I&apos;m a{" "}
          <motion.span variants={highlight} custom={0}>
            product engineer
          </motion.span>
          . I ship products{" "}
          <motion.span variants={highlight} custom={1}>
            end-to-end
          </motion.span>
          , from research all the way to production. Three years spent building
          across{" "}
          <motion.span variants={highlight} custom={2}>
            fintech, AI, and consumer
          </motion.span>{" "}
          startups taught me to{" "}
          <motion.span variants={highlight} custom={3}>
            move fast without cutting corners
          </motion.span>
          ,{" "}
          <motion.span variants={highlight} custom={4}>
            ask hard questions
          </motion.span>{" "}
          before writing code, and care about the{" "}
          <motion.span variants={highlight} custom={5}>
            details that make things click
          </motion.span>
          . My focus sits on the{" "}
          <motion.span variants={highlight} custom={6}>
            product surface
          </motion.span>
          : the flows, the interfaces, the moments where someone{" "}
          <motion.span variants={highlight} custom={7}>
            just gets it
          </motion.span>
          .
        </motion.p>
      </div>
    </section>
  );
}
