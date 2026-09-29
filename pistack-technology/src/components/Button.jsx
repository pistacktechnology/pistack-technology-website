import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
}) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
    variant === "primary"
      ? "bg-ink text-white shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-navy"
      : variant === "green"
      ? "bg-green text-white shadow-lg shadow-green/15 hover:-translate-y-0.5 hover:bg-[#238d3b]"
      : "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-blue/30 hover:bg-mist"
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </>
  );

  if (to) return <Link to={to} className={classes}>{content}</Link>;
  if (href) return <a href={href} className={classes}>{content}</a>;
  return <button className={classes}>{content}</button>;
}