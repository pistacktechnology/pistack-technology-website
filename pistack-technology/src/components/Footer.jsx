import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white p-2">
            <img
              src="/assets/pistack-logo.jpg"
              alt="PiStack Technology"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Building Smart Digital Solutions. Practical technology for businesses,
            restaurants, schools, organizations, and individuals.
          </p>
          <div className="mt-5 flex items-start gap-2 text-sm text-slate-300">
            <MapPin size={18} className="mt-0.5 shrink-0 text-green" />
            <span>Sector 144, Noida, Uttar Pradesh, India</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Solutions", "/solutions"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link key={path} to={path} className="w-fit hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link to="/services" className="hover:text-white">Software Development</Link>
            <Link to="/services" className="hover:text-white">Mobile Apps</Link>
            <Link to="/services" className="hover:text-white">Web Development</Link>
            <Link to="/services" className="hover:text-white">POS & Billing</Link>
            <Link to="/services" className="hover:text-white">Restaurant Technology</Link>
            <Link to="/services" className="hover:text-white">SaaS & Automation</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PiStack Technology. All rights reserved.</p>
          <a
            href="mailto:pistacktechnology@gmail.com"
            className="inline-flex items-center gap-1 hover:text-white"
          >
            pistacktechnology@gmail.com <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}