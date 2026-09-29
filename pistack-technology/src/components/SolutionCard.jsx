export default function SolutionCard({ solution }) {
  const Icon = solution.icon;
  const green = solution.accent === "green";

  return (
    <article className="card-lift rounded-3xl border border-line bg-white p-7 shadow-card">
      <div
        className={`grid h-12 w-12 place-items-center rounded-2xl ${
          green ? "bg-green/10 text-green" : "bg-blue/10 text-blue"
        }`}
      >
        <Icon size={23} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-bold">{solution.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-500">{solution.description}</p>
    </article>
  );
}