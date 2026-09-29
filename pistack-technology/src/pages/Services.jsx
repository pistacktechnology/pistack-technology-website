import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import useReveal from "../hooks/useReveal";

function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Services() {
  return (
    <>
      <SEO
        title="Services | PiStack Technology"
        description="Explore PiStack Technology services including custom software, mobile apps, websites, web applications, POS, inventory, restaurant technology, school software, SaaS, AI automation, and support."
        path="/services"
      />

      <section className="hero-glow border-b border-line">
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Our services</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Build the digital system your{" "}
              <span className="gradient-text">business actually needs.</span>
            </h1>
            <p className="prose-copy mt-6 max-w-2xl text-base sm:text-lg">
              A connected set of technology services covering software, apps, websites,
              business systems, platforms, automation, and technical support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug}>
                  <article
                    id={service.slug}
                    className="scroll-mt-28 rounded-[30px] border border-line bg-white p-6 shadow-card sm:p-8 lg:p-10"
                  >
                    <div className="grid gap-8 lg:grid-cols-[.8fr_1fr_.8fr] lg:items-start">
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/10 text-blue">
                            <Icon size={23} />
                          </div>
                          <span className="text-xs font-black text-slate-300">0{index + 1}</span>
                        </div>
                        <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-500">{service.short}</p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green">Key capabilities</p>
                        <ul className="mt-4 grid gap-3">
                          {service.capabilities.map((capability) => (
                            <li key={capability} className="flex items-center gap-3 text-sm text-slate-600">
                              <span className="h-2 w-2 rounded-full bg-green" />
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl bg-mist p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Business use cases</p>
                        <p className="mt-3 text-sm font-semibold leading-6 text-ink">{service.useCases}</p>
                        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue">
                          Discuss this service <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Button to="/contact" variant="green">Tell Us What You Need</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}