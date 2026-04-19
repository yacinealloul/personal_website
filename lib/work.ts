export type WorkMeta = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  website?: string;
  current?: boolean;
};

export const work: WorkMeta[] = [
  {
    slug: "rippletide",
    company: "Rippletide",
    role: "Product Engineer",
    period: "Jan 2026 — Present",
    website: "https://rippletide.com",
    current: true,
  },
  {
    slug: "trendtrack",
    company: "Trendtrack",
    role: "Product Engineer",
    period: "Oct 2025 — Feb 2026",
    website: "https://trendtrack.io",
  },
  {
    slug: "doublespeed",
    company: "doublespeed",
    role: "Product Engineer",
    period: "Sep 2025 — Nov 2025",
    website: "https://doublespeed.ai",
  },
  {
    slug: "sonic-labs",
    company: "Sonic Labs",
    role: "Product Engineer",
    period: "Dec 2024 — Jul 2025",
    website: "https://www.soniclabs.com",
  },
  {
    slug: "stox",
    company: "Stox",
    role: "Full Stack Engineer",
    period: "Aug 2024 — Nov 2024",
    website: "https://stox.io",
  },
];

export function getWork(slug: string): WorkMeta | undefined {
  return work.find((w) => w.slug === slug);
}
