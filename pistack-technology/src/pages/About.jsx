import { Compass, Lightbulb, ShieldCheck, Target } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import useReveal from "../hooks/useReveal";

function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function About() {
  return (
    <>
      <SEO
        title="About PiStack Technology | Digital Solutions"
        description="Learn about PiStack Technology, its technology-focused approach, and the practical digital solutions it builds for businesses, institutions, organizations, and individuals."
        path="/about"
      />

      <section className="hero-glow border-b border-line">
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">About PiStack</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Technology with a clear purpose:{" "}
              <span className="gradient-text">solve the right problem.</span>
            </h1>
            <p className="prose-copy mt-6 max-w-2xl text-base sm:text-lg">
              PiStack Technology is a technology/business brand focused on building practical
              digital solutions for businesses, shops, restaurants, schools, institutes,
              organizations, and individuals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A technology partner for digital requirements"
              description="PiStack works across software, mobile applications, websites, web applications, business systems, restaurant technology, SaaS platforms, AI/automation, and ongoing technical support."
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Target, "Requirement first", "Understand what the business actually needs before choosing the technology."],
                [Lightbulb, "Practical thinking", "Focus on useful workflows and clear user experiences instead of unnecessary complexity."],
                [Compass, "Solution focused", "Connect the business idea to software, apps, platforms, and automation."],
                [ShieldCheck, "Support mindset", "Leave room for maintenance, improvements, and technical support after delivery."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-line p-6 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-green/10 text-green">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[32px] bg-ink p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Our vision</p>
              <h2 className="mt-5 text-3xl font-bold">Make useful technology easier to access.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                The goal is to turn business requirements and ideas into digital systems
                that are understandable, practical, and aligned with the way people work.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[32px] border border-line bg-white p-8 shadow-card sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Technology philosophy</p>
              <h2 className="mt-5 text-3xl font-bold">Choose technology because it helps the business.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Software should support a clear objective. PiStack's approach is to connect
                requirements, user experience, architecture, automation, and support into one
                practical delivery path.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[32px] border border-line bg-white p-8 text-center shadow-card sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Founder</p>
              <div className="mx-auto mt-6 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-ink to-blue text-2xl font-black text-white">
                P
              </div>
              <h2 className="mt-6 text-2xl font-bold">P. Tripathi</h2>
              <p className="mt-2 text-sm font-semibold text-blue">Founder, PiStack Technology</p>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Founder information is intentionally limited to the details provided. Add an
                approved biography, education, experience, or achievements here later if you
                want them published.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}