import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[32px] bg-ink px-7 py-12 text-white shadow-soft sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue/20 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-green/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200">
              <Sparkles size={14} className="text-green" />
              Start with the problem, not the technology
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
              Have an Idea or Business Problem to Solve?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Let's turn your requirements into a practical digital solution.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Talk to PiStack <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}