import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollLock from "@/components/ScrollLock";
import Sidebar from "@/components/Sidebar";
import WorkAccordion from "@/components/WorkAccordion";

export default function Home() {
  return (
    <div className="lg:h-screen lg:overflow-hidden">
      <ScrollLock />
      <div className="mx-auto max-w-screen-xl px-8 md:px-16 lg:h-full lg:px-32">
        <div className="lg:flex lg:h-full lg:gap-4">

          <Sidebar />

          <main
            id="main-scroll"
            className="no-scrollbar pb-24 lg:h-full lg:w-[55%] lg:snap-y lg:snap-mandatory lg:overflow-y-auto lg:scroll-smooth lg:py-0"
          >

            <AboutSection />

            <section id="work" className="mb-32 scroll-mt-24 lg:mb-0 lg:flex lg:h-screen lg:scroll-mt-0 lg:snap-start lg:flex-col lg:justify-center">
              <div className="sticky top-0 z-10 -mx-8 mb-8 bg-[#FAF9F7]/85 px-8 py-4 backdrop-blur-md md:-mx-16 md:px-16 lg:static lg:mx-0 lg:mb-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 lg:sr-only">
                  Work
                </h2>
              </div>
              <WorkAccordion />
            </section>

            <ProjectsSection />

          </main>
        </div>
      </div>
    </div>
  );
}
