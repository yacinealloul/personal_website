import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: `${post.title} — Yacine Alloul`,
      description: post.description,
      publishedTime: post.date,
      authors: ["Yacine Alloul"],
    },
    twitter: {
      card: "summary",
      title: `${post.title} — Yacine Alloul`,
      description: post.description,
    },
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 mb-4 text-[20px] font-semibold tracking-tight text-stone-900" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-3 text-[17px] font-semibold text-stone-900" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-5 text-[15px] leading-7 text-stone-600" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-5 ml-5 list-disc text-[15px] leading-7 text-stone-600" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-5 ml-5 list-decimal text-[15px] leading-7 text-stone-600" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="mb-1" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="mb-5 border-l-2 border-stone-200 pl-5 text-[15px] leading-7 text-stone-400 italic" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-stone-900 underline underline-offset-3 decoration-stone-300 hover:decoration-stone-900 transition-colors" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-stone-900" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
  hr: () => (
    <hr className="my-8 border-stone-200" />
  ),
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className="min-h-full overflow-x-hidden bg-[#FAF9F7] font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto w-full max-w-3xl min-h-full border-x border-stone-200 bg-[#FEFEFE]">

        <article className="px-12 py-16">
          <div className="animate-fade-up">
            <Link
              href="/writing"
              className="text-[13px] text-stone-400 hover:text-stone-600 transition-colors"
            >
              &larr; Back
            </Link>
          </div>

          <header className="animate-fade-up delay-1 mt-8">
            <h1 className="text-[32px] font-semibold leading-[1.3] tracking-tight text-stone-900">
              {post.title}
            </h1>
            <div className="mt-3 flex items-center gap-3 text-[13px] text-stone-400">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="text-stone-200">/</span>
              <span>{post.readingTime}</span>
            </div>
            {post.description && (
              <p className="mt-4 text-[14px] leading-6 text-stone-400 italic">
                {post.description}
              </p>
            )}
          </header>

          <div className="animate-fade-up delay-2 mt-10">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>

        <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />

        <footer className="flex items-center justify-between px-12 py-8">
          <span className="text-[12px] text-stone-300">&copy; 2026 Yacine Alloul</span>
          <Link href="/writing" className="text-[12px] text-stone-300">&larr; Writing</Link>
        </footer>
      </div>
    </div>
  );
}
