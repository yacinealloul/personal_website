export type Project = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
  year: string;
  accent?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short one-liner describing what this project does and why it matters.",
    tags: ["Next.js", "TypeScript", "AI"],
    year: "2026",
    accent: "from-stone-900 to-stone-700",
  },
  {
    title: "Project Two",
    description:
      "Another project — replace with your real work. Keep descriptions punchy.",
    tags: ["React", "Postgres"],
    year: "2025",
    accent: "from-orange-500 to-rose-500",
  },
  {
    title: "Project Three",
    description:
      "Experimental build. Good place to showcase side-projects or tools.",
    tags: ["Python", "LLM"],
    year: "2025",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Project Four",
    description: "One more slot — swap any of these with real projects.",
    tags: ["Swift", "iOS"],
    year: "2024",
    accent: "from-indigo-500 to-violet-600",
  },
];
