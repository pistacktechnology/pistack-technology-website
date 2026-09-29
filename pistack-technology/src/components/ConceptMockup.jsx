import { BarChart3, CheckCircle2, CircleDollarSign, Database, Menu, Smartphone } from "lucide-react";

const presets = {
  dashboard: { icon: BarChart3, values: ["Overview", "Workflows", "Reports"] },
  pos: { icon: CircleDollarSign, values: ["Catalog", "Cart", "Checkout"] },
  restaurant: { icon: Menu, values: ["Menu", "Orders", "Tables"] },
  inventory: { icon: Database, values: ["Stock", "Movement", "Alerts"] },
  mobile: { icon: Smartphone, values: ["Home", "Activity", "Profile"] },
  saas: { icon: BarChart3, values: ["Workspace", "Users", "Insights"] },
};

export default function ConceptMockup({ item }) {
  const preset = presets[item.type];
  const Icon = preset.icon;

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div>
          <p className="text-sm font-bold text-ink">{item.title}</p>
          <p className="mt-0.5 text-[11px] text-slate-400">{item.subtitle}</p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue/10 text-blue">
          <Icon size={17} />
        </div>
      </div>

      <div className="grid min-h-[210px] grid-cols-[78px_1fr]">
        <aside className="border-r border-line bg-mist p-3">
          <div className="grid gap-2">
            {preset.values.map((value, i) => (
              <div
                key={value}
                className={`rounded-lg px-2 py-2 text-[9px] font-semibold ${
                  i === 0 ? "bg-white text-blue shadow-sm" : "text-slate-400"
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </aside>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {["01", "02", "03"].map((n) => (
              <div key={n} className="rounded-xl border border-line bg-mist p-3">
                <div className="text-[8px] font-bold text-slate-400">MODULE</div>
                <div className="mt-2 h-2 w-8 rounded bg-slate-200" />
                <div className="mt-2 text-sm font-bold">{n}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-2xl border border-line p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-24 rounded bg-slate-200" />
                <div className="mt-2 h-2 w-16 rounded bg-slate-100" />
              </div>
              <CheckCircle2 size={17} className="text-green" />
            </div>
            <div className="mt-5 grid grid-cols-5 items-end gap-2">
              {[32, 58, 44, 72, 63].map((h, i) => (
                <div key={i} className="rounded-t bg-blue/15" style={{ height: `${h}px` }}>
                  <div className="h-full w-full rounded-t bg-blue/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-5 py-3 text-[10px] font-semibold text-slate-400">
        CONCEPTUAL UI — replace with real product screenshots when available
      </div>
    </div>
  );
}