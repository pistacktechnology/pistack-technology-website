import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="card-lift overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <span className="rounded-full border border-white/20 bg-ink/65 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {project.label}
          </span>
          <span className="rounded-full bg-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Visual reference
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <ArrowUpRight size={19} className="shrink-0 text-slate-400" />
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-500">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-600">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.imageSource}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue"
        >
          Image source <ExternalLink size={13} />
        </a>
      </div>
    </article>
  );
}
