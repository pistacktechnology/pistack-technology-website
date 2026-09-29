import { Mail, MapPin, MessageSquareText } from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import useReveal from "../hooks/useReveal";

function Reveal({ children }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal">{children}</div>;
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact PiStack Technology | Start a Project"
        description="Contact PiStack Technology in Sector 144, Noida to discuss software, mobile apps, websites, web applications, POS, restaurant technology, SaaS, automation, or support."
        path="/contact"
      />

      <section className="hero-glow border-b border-line">
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Contact</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Tell us what you want to{" "}
              <span className="gradient-text">build or improve.</span>
            </h1>
            <p className="prose-copy mt-6 max-w-2xl text-base sm:text-lg">
              Share your requirement, business context, and the problem you want to solve.
              The form below is ready for validation and can be connected to your preferred email service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Let's talk"
                title="Start a Project"
                description="PiStack Technology provides technology solutions for businesses, shops, restaurants, schools/institutes, organizations, startups, and individuals."
              />

              <div className="mt-8 grid gap-3">
                <div className="flex gap-4 rounded-2xl border border-line p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Location</p>
                    <p className="mt-1 text-sm text-slate-500">Sector 144, Noida, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-line p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green/10 text-green">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Email</p>
                    <p className="mt-1 text-sm text-slate-500">pistacktechnology@gmail.com</p>
                    <p className="mt-1 text-xs text-slate-400">Official contact email</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-line p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink/5 text-ink">
                    <MessageSquareText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">What to include</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Your idea, business problem, target users, preferred solution, and any important requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}