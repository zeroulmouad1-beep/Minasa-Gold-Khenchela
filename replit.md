# Minasa Gold Khenchela - Culture & Arts Platform

## Overview
A Next.js web application for the Culture and Arts sector platform of Khenchela (منصة قطاع الثقافة والفنون - خنشلة). Features Arabic RTL layout, golden color scheme, and modern UI components.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## Project Structure
- `app/` — Next.js app router pages (home, services, institution detail)
- `components/` — Reusable UI components (navbar, hero, bento grid, events slider, footer, etc.)
- `components/ui/` — shadcn/ui base components
- `lib/` — Constants, utilities, data
- `public/images/` — Local image assets
- `hooks/` — Custom React hooks
- `styles/` — Global CSS

## Running the App
- Dev server: `PORT=5000 pnpm run dev`
- Runs on port 5000 (mapped to external port 80)

## Important Configuration
- `next.config.mjs` includes CORS fix via `allowedDevOrigins` for Replit preview domains — do NOT remove this
- The workflow "Start application" starts the dev server on port 5000
