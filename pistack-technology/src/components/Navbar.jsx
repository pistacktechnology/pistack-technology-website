import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-blue" : "text-slate-600 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-[74px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="PiStack Technology home">
          <img
            src="/assets/pistack-logo.jpg"
            alt="PiStack Technology"
            className="h-12 w-auto max-w-[165px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} className={navClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Start a Project</Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 shadow-xl lg:hidden">
          <nav className="container-shell flex flex-col gap-1" aria-label="Mobile navigation">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive ? "bg-mist text-blue" : "text-slate-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-3" variant="green">
              Start a Project
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}