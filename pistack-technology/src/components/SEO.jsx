import { useEffect } from "react";

const SITE_URL = "https://[DOMAIN]"; // EDIT: replace with the official domain

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
}) {
  useEffect(() => {
    document.title = title;

    const canonical = `${SITE_URL}${path}`;
    const setMeta = (name, content, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", `${SITE_URL}/assets/pistack-logo.jpg`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // Basic Organization structured data. Replace the placeholder URL before launch.
    const jsonLdId = "pistack-organization-jsonld";
    let script = document.getElementById(jsonLdId);
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PiStack Technology",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/pistack-logo.jpg`,
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    });
  }, [title, description, path, type]);

  return null;
}