# PiStack Technology Website

Production-oriented React + Vite + Tailwind CSS website for PiStack Technology.

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide React icons
- Plain JavaScript

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Important customization points

1. Replace `public/assets/pistack-logo.jpg` only if you intentionally have a newer official logo.
2. Replace `[DOMAIN]` in `src/components/SEO.jsx`.
3. Replace `[DOMAIN]` in `public/robots.txt`.
4. Replace `[DOMAIN]` in `public/sitemap.xml`.
5. Replace `pistacktechnology@gmail.com` in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
6. Add the real phone number only when approved.
7. Add real social URLs only when approved.
8. Add verified projects in `src/data/projects.js`.
9. Add approved screenshots to `public/assets`.
10. Connect the form API in `src/components/ContactForm.jsx`.

## Founder name

The supplied brief contains two different founder names: `P. Tripathi` in the company information and `Manish Tripathi` in the About-page instruction. This implementation uses `P. Tripathi` consistently so it does not invent or silently select an unsupported full name. Confirm the final public founder name before launch.

## Contact form

The UI includes client-side validation, loading state, success state, and a clear not-configured state. It does not claim that an email was sent until a real provider/backend is connected.

## Deployment

Build the site with `npm run build`. Deploy the generated `dist/` folder to a static host such as your preferred hosting provider. Configure SPA fallback/rewrite so routes such as `/about` and `/contact` resolve to `index.html`.


## Portfolio image note
The Projects page uses free-to-use Unsplash images as clearly labelled visual references, not as representations of PiStack client projects. Replace them with verified project screenshots when available.
