# منصة قطاع الثقافة والفنون - Institutional Web Portal

## Overview

A high-end, professional Arabic institutional web portal for the Culture and Arts Sector of Khenchela, Algeria. Built with Next.js 16, Tailwind CSS, Shadcn UI, and Framer Motion for smooth animations.

## Features

### 🎨 Design
- **Premium Color Palette**: Deep Burgundy (#800020), Elegant Gold (#D4AF37), Soft Off-white (#f5f3f0)
- **Typography**: Tajawal (headings) + Amiri (body) for authentic Arabic aesthetic
- **RTL Support**: Full Right-to-Left language support for Arabic
- **Responsive**: Desktop-first design fully responsive to mobile (S22 Ultra optimized)

### 🧩 Key Components

1. **Navbar** (`components/navbar.tsx`)
   - Transparent-to-solid scroll effect
   - Professional mega menu with 3 categories
   - Hover animations with Framer Motion

2. **Hero Slider** (`components/hero-slider.tsx`)
   - Cinematic carousel using Embla Carousel
   - Auto-rotating slides (6 seconds interval)
   - Smooth transitions and navigation controls
   - Showcase: Chelia Mountains, Palais de la Kahina, Heritage sites

3. **Quick Access Grid** (`components/quick-access-grid.tsx`)
   - 4 elegant card layout
   - Listening Cell, Archaeological Map, Laws & Regulations, Cultural Festivals
   - Hover lift animations

4. **Services Hub** (`components/services-hub.tsx`)
   - 4-column service cards with icons
   - Professional Card Request, Artist Card, Inquiries, Event Bookings
   - "Apply Now" CTAs with gradient backgrounds

5. **Footer** (`components/footer.tsx`)
   - 4-column professional layout
   - Contact information (address, phone, email, hours)
   - Social media links (Facebook emphasized)
   - Quick links organized by menu category

### 🔧 Technology Stack

- **Framework**: Next.js 16.2.0
- **Styling**: Tailwind CSS 4.2.0 + RTL support
- **UI Components**: Shadcn UI (Radix UI based)
- **Animations**: Framer Motion 11.0.0
- **Carousel**: Embla Carousel 8.6.0
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Tajawal, Amiri)
- **TypeScript**: 5.7.3

## Project Structure

```
/app
  ├── page.tsx                 # Main entry point
  ├── layout.tsx               # Root layout with metadata
  └── globals.css              # Global styles with design tokens

/components
  ├── navbar.tsx               # Navigation with mega menu
  ├── hero-slider.tsx          # Hero carousel section
  ├── quick-access-grid.tsx    # 4-card quick access section
  ├── services-hub.tsx         # Services showcase section
  └── footer.tsx               # Professional footer

/lib
  ├── constants.ts             # Menu items, slides, services data
  └── utils.ts                 # Utility functions

/public
  └── /images
      ├── chelia.jpg           # Hero slide 1
      ├── palais-kahina.jpg    # Hero slide 2
      └── heritage.jpg         # Hero slide 3
```

## Configuration

### Design Tokens (app/globals.css)
```css
--burgundy: #800020
--gold: #D4AF37
--off-white: #f5f3f0
--charcoal: #2a2a2a
--light-gray: #e8e8e8
```

### Menu Structure (lib/constants.ts)
- **المؤسسات الثقافية** (Cultural Institutions)
- **المديرية** (Directorate)
- **الخدمات** (Services)

## Firebase Integration Ready

The project is structured for easy Firebase integration:

### Recommended Setup

1. **Authentication**
   - Use Firebase Auth for user management
   - Integration point: Add auth context in layout.tsx
   - Protected routes for service applications

2. **Firestore Database**
   - Collections: `services`, `events`, `users`, `applications`
   - Real-time updates for events and services
   - Integration: API routes in `/app/api/`

3. **Storage**
   - Document uploads for professional cards
   - Event images and heritage media

### Integration Steps

1. Install Firebase SDK:
```bash
pnpm add firebase
```

2. Create `lib/firebase.ts`:
```typescript
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ... other config
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
```

3. Add environment variables to `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
# ... other variables
```

4. Create API routes for Firestore operations in `/app/api/`

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for components
- **Font Loading**: Google Fonts with `display=swap`
- **CSS**: Tailwind CSS purging unused styles
- **Animations**: GPU-accelerated Framer Motion

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text on all images
- Color contrast ratios meet WCAG AA standards

## Mobile Responsiveness

- Mobile-first design approach
- Breakpoints:
  - `sm`: 640px (tablets)
  - `md`: 768px (small tablets)
  - `lg`: 1024px (desktops)
  - `xl`: 1280px (wide screens)
- Touch-optimized buttons and interactions

## Running the Project

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev
# Open http://localhost:3000

# Build for production
pnpm build

# Start production server
pnpm start
```

## Customization

### Changing Colors
Edit CSS variables in `app/globals.css` and `tailwind.config.ts`

### Adding Menu Items
Update `lib/constants.ts` - `menuItems` array

### Hero Slides
Add new images to `/public/images/` and update `heroSlides` array in `lib/constants.ts`

### Services
Modify `servicesHubItems` array in `lib/constants.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices Implemented

✅ RTL-first design for Arabic
✅ Semantic HTML structure
✅ Performance-optimized images
✅ Smooth scroll behavior
✅ Loading states & transitions
✅ Mobile-first responsive design
✅ Clean, modular component structure
✅ Type-safe with TypeScript
✅ Reusable constants and configuration
✅ Firebase-ready architecture

## Future Enhancements

- [ ] Firebase authentication integration
- [ ] Firestore database connection
- [ ] User dashboard
- [ ] Service application workflow
- [ ] Email notifications
- [ ] Analytics tracking
- [ ] Admin panel
- [ ] Multi-language support (AR/EN/FR)
- [ ] SEO optimization
- [ ] PWA capabilities

## License

Private project for منصة قطاع الثقافة والفنون

## Contact

For inquiries: info@khenchela-culture.dz
Phone: +213 28 XX XX XX

---

**Last Updated**: March 27, 2024
**Version**: 1.0.0
