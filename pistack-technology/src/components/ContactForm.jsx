import { useState } from "react";
import { CheckCircle2, LoaderCircle, Send, TriangleAlert } from "lucide-react";

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  description: "",
  budget: "",
};

const services = [
  "Software Development",
  "Mobile App",
  "Website",
  "Web Application",
  "POS & Billing",
  "Inventory",
  "Restaurant Solution",
  "School/Institute Software",
  "SaaS",
  "AI & Automation",
  "Other",
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.service) errors.service = "Select a service.";
  if (!values.description.trim()) errors.description = "Project description is required.";
  return errors;
}

/*
  CONTACT API LAYER
  Replace this function with Formspree, EmailJS, or your own backend.
  The UI intentionally does NOT pretend that an email was sent.
*/
async function submitContactForm(payload) {
  // Example future implementation:
  // return fetch(import.meta.env.VITE_CONTACT_API_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  await new Promise((resolve) => setTimeout(resolve, 850));
  return { configured: false };
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");

  const update = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (state !== "idle") setState("idle");
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setState("loading");
    const result = await submitContactForm(values);

    if (!result.configured) {
      setState("not-configured");
      return;
    }

    setState("success");
    setValues(initial);
  };

  const fieldError = (key) =>
    errors[key] ? <p className="mt-1 text-xs font-medium text-red-600">{errors[key]}</p> : null;

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name <span className="text-red-500">*</span>
          <input
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="mt-2"
            aria-invalid={Boolean(errors.name)}
          />
          {fieldError("name")}
        </label>

        <label className="text-sm font-semibold">
          Email <span className="text-red-500">*</span>
          <input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="mt-2"
            aria-invalid={Boolean(errors.email)}
          />
          {fieldError("email")}
        </label>

        <label className="text-sm font-semibold">
          Phone
          <input
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 ..."
            className="mt-2"
          />
        </label>

        <label className="text-sm font-semibold">
          Company / Business Name
          <input
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Business or organization"
            className="mt-2"
          />
        </label>

        <label className="text-sm font-semibold">
          Service Required <span className="text-red-500">*</span>
          <select
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className="mt-2"
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
          {fieldError("service")}
        </label>

        <label className="text-sm font-semibold">
          Budget <span className="font-normal text-slate-400">(optional)</span>
          <input
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            placeholder="Optional"
            className="mt-2"
          />
        </label>

        <label className="text-sm font-semibold sm:col-span-2">
          Project Description <span className="text-red-500">*</span>
          <textarea
            value={values.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Tell us what you want to build or improve."
            className="mt-2"
            aria-invalid={Boolean(errors.description)}
          />
          {fieldError("description")}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {state === "not-configured" && (
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            <TriangleAlert size={18} className="mt-0.5 shrink-0" />
            <p>
              The form is validated, but no email/backend service is configured yet.
              Connect the function in <code>src/components/ContactForm.jsx</code> before launch.
            </p>
          </div>
        )}

        {state === "success" && (
          <div className="flex items-center gap-3 rounded-2xl border border-green/20 bg-green/5 p-4 text-sm font-medium text-green">
            <CheckCircle2 size={18} />
            Your enquiry has been submitted.
          </div>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? (
            <>
              <LoaderCircle size={17} className="animate-spin" /> Preparing…
            </>
          ) : (
            <>
              Send Project Enquiry <Send size={17} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}