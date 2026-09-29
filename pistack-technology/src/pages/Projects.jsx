import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";

function Reveal({ children }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal">{children}</div>;
}

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects & Portfolio | PiStack Technology"
        description="Explore the PiStack Technology portfolio area. Project cards are intentionally editable placeholders until verified project details are available."
        path="/projects"
      />

      <section className="hero-glow border-b border-line">
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Projects</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              A portfolio space ready for{" "}
              <span className="gradient-text">real project stories.</span>
            </h1>
            <p className="prose-copy mt-6 max-w-2xl text-base sm:text-lg">
              No unverified clients, results, testimonials, or project claims are used here.
              Replace the editable cards below when approved project details are available.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="mb-10 rounded-2xl border border-blue/15 bg-blue/5 p-5 text-sm leading-6 text-slate-600">
            <strong className="text-ink">Editable portfolio:</strong> update
            <code className="mx-1 rounded bg-white px-1.5 py-0.5 text-xs">src/data/projects.js</code>
            with verified project information. Add screenshots to
            <code className="mx-1 rounded bg-white px-1.5 py-0.5 text-xs">public/assets</code>
            when ready.
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={`${project.title}-${index}`}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}