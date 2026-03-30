# منصة قطاع الثقافة والفنون — خنشلة

A Next.js 16 cultural platform for Khenchela's arts & heritage sector, imported from v0.dev.

## Architecture

- **Framework**: Next.js 16.2.0 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`, CSS-based config in `app/globals.css`
- **UI Library**: shadcn/ui (new-york style)
- **Icons**: lucide-react
- **Animation**: framer-motion
- **Package Manager**: pnpm

## Theme

- **Color palette**: Deep Indigo (`#0F172A`) background + Metallic Copper (`#B87333`) accents
- **Typography**: Tajawal (headings/body) + Amiri (serif) — Arabic fonts via Google Fonts
- **Direction**: RTL (right-to-left), Arabic language (`lang="ar" dir="rtl"`)

## Path Alias

`@/` maps to the project root (`./`) as configured in `tsconfig.json`.

## Key Files

- `app/globals.css` — Tailwind v4 theme config (Copper/Indigo palette, RTL, CSS variables)
- `app/layout.tsx` — Root layout with Arabic metadata and `@vercel/analytics`
- `app/page.tsx` — Server component entry point
- `components/home-client.tsx` — Client component orchestrating all sections
- `components/immersive-hero.tsx` — Fullscreen animated hero (loaded dynamically, SSR disabled)
- `components/navbar.tsx` — RTL navigation bar
- `components/events-slider.tsx` — Upcoming events carousel
- `components/directorate-section.tsx` — Directorate info section
- `components/bento-grid.tsx` — Cultural institutions grid
- `components/smart-services.tsx` — Electronic services section
- `components/modern-footer.tsx` — Site footer
- `lib/institutions-data.ts` — Static data for cultural institutions

## Dev Server

Runs on port 5000 via workflow: `PORT=5000 pnpm run dev`
