import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full overflow-x-hidden bg-[#FAF9F7] font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto w-full max-w-3xl min-h-full border-x border-stone-200 bg-[#FEFEFE]">

        {/* Nav */}
        <div className="sticky top-0 z-10 bg-[#FEFEFE]/80 backdrop-blur-sm">
          <nav className="flex items-center justify-between px-12 py-5">
            <a href="#" className="text-[15px] font-semibold text-stone-900">
              yacine.xyz
            </a>
            <div className="flex gap-8 text-[13px] text-stone-400">
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
          <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />
        </div>

        <main className="flex flex-col">

          {/* Hero */}
          <section className="flex items-start justify-between gap-12 px-12 py-28">
            <div className="flex-1">
              <h1 className="animate-fade-up text-[32px] font-semibold leading-[1.3] tracking-tight text-stone-900">
                Yacine Alloul
              </h1>
              <p className="animate-fade-up delay-1 mt-4 text-[15px] leading-7 text-stone-400">
                Builder & Product Engineer
              </p>
              <p className="animate-fade-up delay-2 mt-6 max-w-[340px] text-[14px] leading-6 text-stone-400">
                I ship products end-to-end, from research to production.
                Based between SF and Dubai, building across startups since 2022.
              </p>
              <div className="animate-fade-up delay-3 mt-10 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/y-a-96295a229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone-200 px-5 py-2.5 text-[13px] font-medium text-stone-500"
                >
                  LinkedIn
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-stone-200 px-5 py-2.5 text-[13px] font-medium text-stone-500"
                >
                  Contact me
                </a>
              </div>
            </div>
            <div className="animate-fade-up delay-3 shrink-0">
              <div className="h-[240px] w-[240px] overflow-hidden rounded-2xl ring-1 ring-stone-200/60">
                <Image
                  src="/photo.jpg"
                  alt="Yacine Alloul"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </section>

          <a href="#work" className="animate-fade-up delay-4 flex justify-center pb-10 -mt-6">
            <svg
              className="animate-bounce text-stone-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>

          <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />

          {/* Work */}
          <section id="work" className="animate-on-scroll px-12 py-16">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
              Work
            </h2>
            <div className="mt-10 flex flex-col">

              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">Rippletide <span className="text-stone-400">— Product Engineer</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Jan 2026 — Present</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">Trendtrack <span className="text-stone-400">— Product Engineer</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Oct 2025 — Feb 2026</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">doublespeed <span className="text-stone-400">— Product Engineer</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Sep 2025 — Nov 2025</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">Sonic Labs <span className="text-stone-400">— Product Engineer</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Dec 2024 — Jul 2025</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">Stox <span className="text-stone-400">— Full Stack Engineer</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Aug 2024 — Nov 2024</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">TruePerson <span className="text-stone-400">— Co-Founder</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">2023 — 2024</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">J.P. Morgan <span className="text-stone-400">— Spring Intern</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Apr 2023</p>
              </div>
              <div className="h-px w-full bg-stone-100" />
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <p className="text-[14px] text-stone-900">Université Paris Cité <span className="text-stone-400">— Research Intern</span></p>
                <p className="shrink-0 text-[12px] font-mono text-stone-300">Sep 2022 — Jan 2023</p>
              </div>

            </div>
          </section>

          {/* Writing — coming back later
          <section id="writing" className="animate-on-scroll px-12 py-16">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
              Writing
            </h2>
            <div className="mt-10 flex flex-col gap-6">
              <div>
                <p className="text-[15px] font-medium text-stone-900">On dropping out in France</p>
                <p className="mt-2 text-[13px] leading-6 text-stone-400">I remember in 2022 I entered uni and OpenAI released their playground and...</p>
                <p className="mt-2 text-[13px] italic text-stone-300">Coming soon</p>
              </div>
              <div>
                <p className="text-[15px] font-medium text-stone-900">On work</p>
                <p className="mt-1 text-[13px] italic text-stone-300">Coming soon</p>
              </div>
              <div>
                <p className="text-[15px] font-medium text-stone-900">On sport</p>
                <p className="mt-1 text-[13px] italic text-stone-300">Coming soon</p>
              </div>
            </div>
          </section>
          */}

          <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />

          {/* Contact */}
          <section id="contact" className="animate-on-scroll px-12 py-16">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
              Contact
            </h2>
            <div className="mt-6 flex flex-col gap-3 text-[13px]">
              <a href="mailto:alloul.yacine@protonmail.com" className="flex items-center justify-between">
                <span className="font-medium text-stone-900">Email</span>
                <span className="text-stone-300">alloul.yacine@protonmail.com ↗</span>
              </a>
              <a href="https://www.linkedin.com/in/y-a-96295a229/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                <span className="font-medium text-stone-900">LinkedIn</span>
                <span className="text-stone-300">in/y-a-96295a229 ↗</span>
              </a>
              <a href="https://github.com/yacinealloul" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                <span className="font-medium text-stone-900">GitHub</span>
                <span className="text-stone-300">yacinealloul ↗</span>
              </a>
              <a href="https://x.com/seryacine" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                <span className="font-medium text-stone-900">X</span>
                <span className="text-stone-300">@seryacine ↗</span>
              </a>
            </div>
          </section>

          <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-stone-200" />

          {/* Footer */}
          <footer className="flex items-center justify-between px-12 py-8">
            <span className="text-[12px] text-stone-300">© 2026 Yacine Alloul</span>
            <a href="#" className="text-[12px] text-stone-300">↑ Top</a>
          </footer>

        </main>
      </div>
    </div>
  );
}
