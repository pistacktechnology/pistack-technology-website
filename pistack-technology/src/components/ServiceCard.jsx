import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Link
      to={`/services#${service.slug}`}
      className="card-lift group rounded-3xl border border-line bg-white p-6 shadow-card"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/10 text-blue">
          <Icon size={23} strokeWidth={1.9} aria-hidden="true" />
        </div>
        <ArrowUpRight
          size={20}
          className="text-slate-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-6 text-lg font-bold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{service.short}</p>
    </Link>
  );
}