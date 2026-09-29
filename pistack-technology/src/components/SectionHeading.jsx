export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="prose-copy mt-5 max-w-2xl text-base sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}