import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Layers3,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import SolutionCard from "../components/SolutionCard";
import CTASection from "../components/CTASection";
import ConceptMockup from "../components/ConceptMockup";
import { services } from "../data/services";
import { solutions } from "../data/solutions";
import { mockups } from "../data/mockups";
import useReveal from "../hooks/useReveal";

const process = [
  ["01", "Understand", "Understand the business, requirements, and problems."],
  ["02", "Plan", "Define the right technology and solution architecture."],
  ["03", "Build", "Design and develop the software, application, website, or platform."],
  ["04", "Support", "Provide maintenance, improvements, and technical support."],
];

function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <>
      <SEO
        title="PiStack Technology | Building Smart Digital Solutions"
        description="PiStack Technology builds software, mobile apps, websites, business management solutions, POS systems, restaurant technology, SaaS platforms, and AI-powered automation."
      />

      <section className="hero-glow relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.03fr_.97fr] lg:py-28">
          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green" />
                Software • Apps • Platforms • Automation
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-[-0.035em] text-ink sm:text-5xl lg:text-[66px] lg:leading-[1.02]">
                Building Smart{" "}
                <span className="gradient-text">Digital Solutions.</span>
              </h1>

              <p className="prose-copy mt-6 max-w-2xl text-base sm:text-lg">
                Technology solutions designed to help businesses, institutions, and
                organizations work smarter, operate efficiently, and grow digitally.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/contact">Start a Project</Button>
                <Button to="/services" variant="outline">Explore Our Services</Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">
                <span className="marquee-dot">Business-focused</span>
                <span className="marquee-dot">Custom-built</span>
                <span className="marquee-dot">Ongoing support</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:pl-6">
            <div className="hero-float relative mx-auto max-w-[520px]">
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue/10 via-transparent to-green/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
                <div className="flex items-center justify-between border-b border-line pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-green">PiStack Technology</p>
                    <p className="mt-1 text-lg font-bold">Digital solution architecture</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white">
                    <Layers3 size={21} />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    [Code2, "Software", "Custom workflows"],
                    [Smartphone, "Mobile", "Connected experiences"],
                    [Gauge, "Automation", "Smarter processes"],
                    [Database, "Platforms", "Structured data"],
                  ].map(([Icon, title, sub]) => (
                    <div key={title} className="rounded-2xl border border-line bg-mist p-4">
                      <Icon size={20} className="text-blue" />
                      <p className="mt-4 text-sm font-bold">{title}</p>
                      <p className="mt-1 text-[11px] text-slate-400">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl bg-ink p-4 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Business idea</span>
                    <ArrowRight size={15} className="text-green" />
                    <span className="font-semibold">Digital solution</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-blue to-green" />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-[9px] text-slate-400">
                    <span>Software</span><span>Automation</span><span>Support</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 size={16} className="text-green" />
                  Conceptual visual — not a representation of an existing product
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-line bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="Technology Built Around Your Business"
              description="PiStack creates practical digital solutions based on individual business requirements rather than forcing every client into the same solution."
            />
          </Reveal>
          <Reveal className="lg:pl-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Business context", "Start with the workflow, users, and actual problem."],
                ["02", "Right-fit solution", "Choose the technology that serves the requirement."],
                ["03", "Long-term support", "Keep improving the solution as needs evolve."],
              ].map(([num, title, text]) => (
                <div key={num} className="rounded-3xl bg-mist p-6">
                  <span className="text-xs font-black text-green">{num}</span>
                  <h3 className="mt-6 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Technology Services for Real Business Needs"
              description="From websites and mobile apps to business software, POS systems, restaurant technology, SaaS platforms, and automation."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <Reveal key={service.slug}><ServiceCard service={service} /></Reveal>
            ))}
          </div>
          <div className="mt-9">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-ink">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="From Business Problem to Working Solution"
              description="A straightforward process that keeps the technology aligned with the business objective."
            />
          </Reveal>

          <div className="relative mt-14 grid gap-4 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-line md:block" />
            {process.map(([num, title, text]) => (
              <Reveal key={num}>
                <div className="relative rounded-3xl border border-line bg-white p-6 shadow-card">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ink text-sm font-black text-white">
                    {num}
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Who we serve"
              title="Solutions Across Different Business Contexts"
              description="The same technology should not be forced onto every organization. We shape the solution around the customer type and operating model."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Reveal key={solution.title}><SolutionCard solution={solution} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Featured solution concepts"
              title="See the Kind of Systems We Can Build"
              description="These are conceptual interface examples used to communicate solution areas. They are not presented as existing PiStack products."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mockups.map((item) => (
              <Reveal key={item.title}><ConceptMockup item={item} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}