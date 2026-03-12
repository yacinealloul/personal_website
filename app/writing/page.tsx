import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on building, dropping out, and working across startups.",
  openGraph: {
    title: "Writing — Yacine Alloul",
    description: "Thoughts on building, dropping out, and working across startups.",
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-full overflow-x-hidden bg-[#FAF9F7] font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto w-full max-w-3xl min-h-full border-x border-stone-200 bg-[#FEFEFE]">

        {/* Nav */}
        <div className="sticky top-0 z-10 bg-[#FEFEFE]/80 backdrop-blur-sm">
          <nav className="flex items-center justify-between px-12 py-5">
            <Link href="/" className="text-[15px] font-semibold text-stone-900">
              yacine.xyz
            </Link>
            <div className="flex gap-8 text-[13px] text-stone-400">
              <Link href="/#work">Work</Link>
              <Link href="/writing" className="text-stone-900">Writing</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </nav>
          <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />
        </div>

        <main className="flex flex-col px-12 py-16">
          <h1 className="animate-fade-up text-[32px] font-semibold tracking-tight text-stone-900">
            Writing
          </h1>
          <p className="animate-fade-up delay-1 mt-3 text-[14px] leading-6 text-stone-400">
            Thoughts on building, dropping out, and working across startups.
          </p>

          <div className="mt-12 flex flex-col">
            {posts.map((post, i) => (
              <div key={post.slug}>
                {i > 0 && <div className="h-px w-full bg-stone-100" />}
                <Link
                  href={`/writing/${post.slug}`}
                  className={`animate-fade-up group flex items-baseline justify-between gap-4 py-4`}
                  style={{ animationDelay: `${0.12 * (i + 2)}s` }}
                >
                  <div>
                    <p className="text-[15px] font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                      {post.title}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-6 text-stone-400">
                      {post.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[12px] font-mono text-stone-300">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <p className="mt-1 text-[11px] text-stone-300">
                      {post.readingTime}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>

        <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />

        <footer className="flex items-center justify-between px-12 py-8">
          <span className="text-[12px] text-stone-300">&copy; 2026 Yacine Alloul</span>
          <Link href="/" className="text-[12px] text-stone-300">&larr; Home</Link>
        </footer>
      </div>
    </div>
  );
}
