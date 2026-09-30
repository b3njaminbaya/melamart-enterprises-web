# Melamart Enterprises — Public Website

Marketing website for **Melamart Enterprises Limited**, a Kenyan company that hires out and sells scaffolding and construction equipment from branches in **Ruiru** and **Kikuyu**.

**Live site:** https://melamart-enterprises.vercel.app

---

## What the site includes

- **Hero** with call-to-action buttons to call either branch or request a quote
- **About**, **Products & Services** (scaffolding & platforms, ladders & access equipment, pipes, clamps & accessories, construction support materials) and **Why Us** sections
- **Contact** section with both branches' phone numbers and addresses, email, and a **Request a Quote** form
- SEO meta tags (react-helmet-async) and a custom 404 page
- Responsive layout for phones, tablets and desktops

### Contact details used on the site

| Branch | Phone | Address |
|---|---|---|
| Ruiru (main office) | +254 758 502 216 | Off Eastern Bypass, Ruiru |
| Kikuyu | +254 758 445 822 | Thogoto – Mutarakwa Road, opposite Gikambura Primary School |

Email: info@melamartscaffolding.com

### Quote form

The form posts to [FormSubmit](https://formsubmit.co) and is delivered to **info@melamartscaffolding.com** — no backend or API keys needed.
The **first** submission triggers a one-time activation email to that inbox; someone must click the confirmation link before messages are delivered.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript, built with Vite |
| UI | Tailwind CSS, shadcn/ui (Radix UI), lucide-react icons |
| Routing | React Router (single page + 404) |
| SEO | react-helmet-async |
| Fonts | Montserrat (headings) + Open Sans (body), Google Fonts |
| Hosting | Vercel |

Brand colours: Navy `#0b3d5e` (primary) and Yellow `#f5a800` (secondary), defined in `src/index.css`.
The admin panel (`apps/admin`) uses the same design system.

---

## Run locally

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev        # http://localhost:8080
```

Other scripts:

```bash
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint
```

---

## Project structure

```
src/
├── App.tsx                 # Routes: / and a catch-all 404
├── pages/
│   ├── Index.tsx           # Home page + SEO tags
│   └── NotFound.tsx
├── components/
│   ├── Header.tsx          # Logo, navigation, Call Now / Request Quote
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyUsSection.tsx
│   ├── ContactSection.tsx  # Branches, quote form (FormSubmit)
│   ├── Footer.tsx
│   └── ui/                 # shadcn/ui components
├── assets/                 # Logo and hero images
└── index.css               # Design tokens, fonts, Tailwind layers
vercel.json                 # Vercel build settings + SPA rewrite
```

---

## Deployment (Vercel)

The site is deployed to the Vercel project **melamart-enterprises**.

```bash
vercel deploy --prod
```

`vercel.json` sets the Vite build (`npm run build` → `dist/`) and rewrites unknown paths to `index.html` so React Router can show the 404 page.
No environment variables are required.

To use the company domain (e.g. `melamartscaffolding.com`), add it in the Vercel dashboard under **Project → Settings → Domains** and set the DNS records Vercel shows.

---

## Notes

- Keep the Google Fonts `@import` as the **first line** of `src/index.css`; if anything comes before it, the production build drops it and the brand fonts do not load.
- `src/assets/melamart-logo-icon.png` is ~2 MB but displayed small — compressing it would speed up the first page load, especially on mobile data.
