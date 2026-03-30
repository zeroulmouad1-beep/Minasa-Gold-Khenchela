# Development Guide - منصة قطاع الثقافة والفنون

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Initial Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
# http://localhost:3000
```

## Project Architecture

### File Organization

```
src/
├── app/
│   ├── api/              # API routes (for Firebase integration)
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles and design tokens
│   └── [route]/          # Dynamic routes (add as needed)
│
├── components/
│   ├── navbar.tsx           # Header with mega menu
│   ├── hero-slider.tsx      # Hero section carousel
│   ├── quick-access-grid.tsx # Quick access cards
│   ├── services-hub.tsx     # Services showcase
│   ├── footer.tsx           # Footer section
│   └── ui/                  # Shadcn UI components
│
├── lib/
│   ├── constants.ts      # Configuration data (menus, items)
│   ├── utils.ts          # Utility functions
│   └── firebase.ts       # Firebase setup (to be added)
│
└── public/
    └── images/           # Hero slider images
```

## Component Documentation

### Navbar Component
- **Location**: `components/navbar.tsx`
- **Features**: 
  - Scroll detection (transparent → solid background)
  - Mega menu dropdown with smooth animations
  - Mobile hamburger button (framework ready)
- **Customization**: Update `menuItems` in `lib/constants.ts`

### Hero Slider Component
- **Location**: `components/hero-slider.tsx`
- **Features**:
  - Auto-rotating carousel (6 second interval)
  - Embla Carousel integration
  - Dot navigation and arrow controls
  - Cinematic transitions
- **Customization**: Update `heroSlides` in `lib/constants.ts`

### Quick Access Grid
- **Location**: `components/quick-access-grid.tsx`
- **Features**:
  - 4-column responsive grid
  - Icon animation on hover
  - Card lift effect
- **Customization**: Update `quickAccessItems` in `lib/constants.ts`

### Services Hub
- **Location**: `components/services-hub.tsx`
- **Features**:
  - Service cards with icons
  - "Apply Now" buttons (linkable)
  - Gradient backgrounds
- **Customization**: Update `servicesHubItems` in `lib/constants.ts`

### Footer Component
- **Location**: `components/footer.tsx`
- **Features**:
  - 4-column layout
  - Social media integration
  - Contact information
  - Quick links from main menu
- **Customization**: Update footer data in `lib/constants.ts`

## Styling Guide

### Design Tokens
All color and spacing tokens are defined in `app/globals.css`:

```css
--burgundy: #800020          /* Primary color */
--gold: #D4AF37              /* Accent color */
--off-white: #f5f3f0         /* Background */
--charcoal: #2a2a2a          /* Text */
--light-gray: #e8e8e8        /* Borders */
```

### Tailwind CSS Custom Configuration
- RTL support enabled in `app/globals.css`
- Custom color palette in `tailwind.config.ts`
- Font families: Tajawal (headers), Amiri (body)

### Best Practices
1. Use design token colors (avoid hardcoded hex values)
2. Leverage Tailwind spacing scale (`p-4`, `gap-6`, etc.)
3. Use responsive prefixes: `md:`, `lg:`, `xl:`
4. Prefer flexbox for layouts
5. Add animations using Framer Motion for micro-interactions

## Adding New Sections

### Example: Adding a New Hero Slide

1. **Add image** to `/public/images/`
2. **Update constants** in `lib/constants.ts`:
```typescript
export const heroSlides = [
  // ... existing slides
  {
    id: 4,
    title: 'نص جديد',
    subtitle: 'وصف جديد',
    image: '/images/new-image.jpg',
    alt: 'وصف بديل',
  },
]
```
3. Component auto-updates (no code changes needed)

### Example: Adding a New Service

1. **Update constants** in `lib/constants.ts`:
```typescript
export const servicesHubItems = [
  // ... existing services
  {
    id: 5,
    title: 'خدمة جديدة',
    description: 'وصف الخدمة',
    icon: 'help',
    cta: 'قدّم الآن',
    href: '/services/new-service',
  },
]
```
2. Services grid auto-updates

## Animations & Interactions

### Framer Motion Features Used
- **Component entry/exit animations**
- **Hover state transforms** (scale, rotate)
- **Staggered children animations**
- **Smooth transitions** (spring physics)

### Adding Custom Animations

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>
```

## Performance Optimization

### Image Optimization
- Use Next.js `Image` component with `fill` or responsive widths
- All images lazy-loaded with blur placeholders
- Hero images are high-priority (cached)

### Code Splitting
- All components are tree-shakeable
- Dynamic imports for heavy components if needed
- Client components marked with `'use client'` directive

### Font Loading
- Google Fonts with `display=swap` for better LCP
- System font fallbacks included

## RTL & Internationalization

### RTL Support
- `direction: rtl;` set on `<html>` in `layout.tsx`
- CSS Grid/Flexbox automatically adjust
- Navigation items order-aware

### Adding RTL Variants (if needed)
```css
html[dir="rtl"] .some-element {
  /* RTL-specific styles */
}
```

## Firebase Integration Checklist

- [ ] Add Firebase SDK: `pnpm add firebase`
- [ ] Create `.env.local` with Firebase config
- [ ] Create `lib/firebase.ts` initialization file
- [ ] Add authentication context in `components/`
- [ ] Create API routes in `app/api/` for Firestore
- [ ] Add user profile component
- [ ] Implement service application form
- [ ] Add real-time event updates
- [ ] Create admin dashboard

## Testing Locally

### Desktop Testing
```bash
pnpm dev
# Visit http://localhost:3000
```

### Mobile Testing
```bash
# On same network, visit:
# http://<YOUR_IP>:3000
```

### Performance Check
```bash
# Generate performance report
pnpm build
pnpm start
# Check Core Web Vitals
```

## Building for Production

```bash
# Build
pnpm build

# Test production build locally
pnpm start

# Deploy to Vercel (recommended)
vercel deploy --prod
```

## Common Tasks

### Updating Menu Items
Edit `lib/constants.ts` → `menuItems` array

### Changing Colors
Edit CSS variables in `app/globals.css`:
```css
--burgundy: #NEW_COLOR
--gold: #NEW_COLOR
```

### Adding a New Page
1. Create new folder in `app/[page-name]/`
2. Create `page.tsx` inside
3. Optional: Create `layout.tsx` for page-specific layout

### Creating a New Component
1. Create file in `components/`
2. Mark with `'use client'` if interactive
3. Export as named export
4. Import and use in `page.tsx` or other components

## Debugging

### Enable Debug Logs
Add to components:
```typescript
console.log("[v0] Debug message:", variable)
```

### Browser DevTools
- Chrome DevTools for JavaScript debugging
- React DevTools for component inspection
- Lighthouse for performance audit

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push

# Auto-deploys from git
# Manual: vercel deploy
```

### Environment Variables
- `NEXT_PUBLIC_*` - Available in browser
- `PRIVATE_*` - Server-only variables

## Troubleshooting

### Components Not Showing
1. Check `'use client'` directive for interactive components
2. Verify imports are correct
3. Check browser console for errors

### Styles Not Applying
1. Clear `.next` folder: `rm -rf .next`
2. Restart dev server
3. Check Tailwind config is correct

### Images Not Loading
1. Verify image path starts with `/`
2. Check image file exists in `/public/`
3. Use `Image` component with proper dimensions

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn UI](https://ui.shadcn.com)
- [Embla Carousel](https://www.embla-carousel.com/)

## Support & Maintenance

For issues or questions, contact: info@khenchela-culture.dz

---

**Last Updated**: March 27, 2024
