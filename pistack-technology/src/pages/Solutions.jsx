import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import SolutionCard from "../components/SolutionCard";
import CTASection from "../components/CTASection";
import { solutions } from "../data/solutions";
import useReveal from "../hooks/useReveal";

function Reveal({ children }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal">{children}</div>;
}

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions by Customer Type | PiStack Technology"
        description="See how PiStack Technology can build digital solutions for businesses, restaurants, schools, startups, organizations, and individuals."
        path="/solutions"
      />

      <section className="hero-glow border-b border-line">
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Solutions</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Different businesses need{" "}
              <span className="gradient-text">different digital systems.</span>
            </h1>
            <p className="prose-copy mt-6 max-w-2xl text-base sm:text-lg">
              PiStack maps technology to the context in which it will actually be used,
              from a local shop workflow to a SaaS platform.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Customer types"
              title="Technology shaped around the operating model"
              description="Choose the context closest to your requirement. The final solution can combine multiple PiStack services."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Reveal key={solution.title}><SolutionCard solution={solution} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-shell">
          <Reveal>
            <div className="rounded-[32px] border border-line bg-white p-8 shadow-card sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Solution model</p>
                  <h2 className="mt-4 text-3xl font-bold">Business idea → digital solution → ongoing support</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-4">
                  {["Understand", "Design", "Build", "Support"].map((step, i) => (
                    <div key={step} className="rounded-2xl bg-mist p-5">
                      <span className="text-xs font-black text-blue">0{i + 1}</span>
                      <p className="mt-4 text-sm font-bold">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}