# Design Document: SSV Technologies Website

## Overview

SSV Technologies Pvt. Ltd. requires a production-ready digital marketing website that communicates the company's IT services, staffing capabilities, and brand identity to prospective clients and candidates. The site must project credibility, professionalism, and technical sophistication — consistent with leading IT services companies — while remaining fast, accessible, and SEO-optimised.

### Design Goals

- **Brand authority**: Dark navy / blue palette with gold CTAs conveys enterprise trust
- **Conversion-focused**: Every page drives visitors toward contact or application
- **Performance-first**: Static generation where possible, image optimisation, minimal JS bundle
- **Accessibility**: WCAG 2.1 AA throughout; keyboard-navigable; screen-reader-friendly
- **Maintainability**: Typed data models, co-located component styles, clear file conventions

### Technology Decisions

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | RSC for performance, built-in image/font optimisation, Metadata API for SEO |
| Language | TypeScript | Type safety across components and data models |
| Styling | Tailwind CSS v3 | Utility-first, design-token-friendly, purges unused CSS |
| Animation | Framer Motion | Declarative scroll-triggered animations, `useReducedMotion` hook built-in |
| Forms | React Hook Form + Zod | Performant uncontrolled forms, schema-driven validation |
| Icons | Lucide React | Consistent, tree-shakeable SVG icon set |
| Fonts | `next/font` (Inter) | Zero layout shift, self-hosted, subset automatically |
| Deployment target | Vercel (recommended) | Edge network, automatic preview deployments, Next.js-native |

---

## Architecture

### Application Structure

```
ssc-technologies/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services landing
│   │   └── [slug]/page.tsx       # Individual service detail (optional deep-link)
│   ├── industries/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # robots.txt generation
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                 # Page-level section components
│   │   ├── HeroSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PartnersStrip.tsx
│   │   ├── CTABanner.tsx
│   │   ├── AboutOverview.tsx
│   │   ├── CoreValues.tsx
│   │   ├── LeadershipTeam.tsx
│   │   ├── CompanyTimeline.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── IndustriesGrid.tsx
│   │   ├── CareersHero.tsx
│   │   └── ContactInfo.tsx
│   ├── ui/                       # Reusable atomic components
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── PricingCard.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── ValueCard.tsx
│   │   ├── LeaderCard.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── Badge.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       └── ApplicationForm.tsx
├── data/                         # Static content / CMS-ready data layer
│   ├── services.ts
│   ├── industries.ts
│   ├── testimonials.ts
│   ├── stats.ts
│   ├── team.ts
│   ├── timeline.ts
│   └── navigation.ts
├── lib/
│   ├── utils.ts                  # cn() helper, misc utilities
│   ├── validations.ts            # Zod schemas for forms
│   └── metadata.ts               # Shared metadata helpers
├── public/
│   ├── images/
│   ├── icons/
│   └── og/                       # Open Graph images
├── styles/
│   └── globals.css               # Tailwind base + custom CSS variables
├── tailwind.config.ts
└── next.config.ts
```

### Rendering Strategy

| Page | Strategy | Reason |
|---|---|---|
| Home | Static (SSG) | Content is static; maximum performance |
| About | Static (SSG) | Static content |
| Services | Static (SSG) | Static content |
| Industries | Static (SSG) | Static content |
| Careers | Static (SSG) + Client form | Form is client-side only |
| Contact | Static (SSG) + Client form | Form is client-side only |
| 404 | Static | Built-in Next.js not-found |

All pages are statically generated at build time. Forms are client components (`"use client"`) embedded within server-rendered page shells.

### Data Flow

```
Static Data Files (data/*.ts)
        │
        ▼
Server Components (app/*/page.tsx)
        │  props
        ▼
Section Components (components/sections/*.tsx)
        │  props
        ▼
UI Components (components/ui/*.tsx)

Client Components (forms/*.tsx)
        │  React Hook Form + Zod
        ▼
API Route / External Email Service (POST /api/contact, /api/apply)
```

---

## Components and Interfaces

### Layout Components

#### `Navbar`

```typescript
// Sticky header; transparent over hero, solid navy on scroll
interface NavbarProps {
  // No props — reads navigation data from data/navigation.ts
}
```

Behaviour:
- `position: sticky; top: 0` with `z-50`
- Background transitions from `transparent` → `bg-navy-900/95 backdrop-blur` when `scrollY > 80`
- Mobile: hamburger icon toggles a full-height drawer (`AnimatePresence` from Framer Motion)
- Active link highlighted with gold underline

#### `Footer`

```typescript
interface FooterProps {
  // No props — static content
}
```

Sections: Logo + tagline | Navigation links | Services quick-links | Contact details | Social icons | Copyright

---

### Section Components

#### `HeroSection`

```typescript
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  backgroundVariant: 'gradient' | 'image';
}
```

#### `ServicesOverview`

```typescript
interface ServicesOverviewProps {
  services: ServiceData[];
}
```

#### `WhyChooseUs`

```typescript
interface WhyChooseUsProps {
  items: ValueProposition[];
}
```

#### `StatsSection`

```typescript
interface StatsSectionProps {
  stats: StatItem[];
}
```

#### `TestimonialsSection`

```typescript
interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}
```

#### `ServiceDetail`

```typescript
interface ServiceDetailProps {
  service: ServiceData;
  pricingPlans?: PricingPlan[];  // Only for Job Marketing Services
}
```

---

### UI Components

#### `ServiceCard`

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accentColor?: string;
}
```

Hover: `scale(1.03)` + box-shadow elevation, border-top gold accent line

#### `TestimonialCard`

```typescript
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}
```

#### `StatsCounter`

```typescript
interface StatsCounterProps {
  value: number;
  suffix?: string;   // e.g. "+" or "%"
  label: string;
  duration?: number; // animation duration ms, default 2000
}
```

Uses `useInView` + `useMotionValue` from Framer Motion to count up when entering viewport.

#### `PricingCard`

```typescript
interface PricingCardProps {
  planName: string;
  price?: string;
  billingPeriod?: string;
  features: string[];
  isRecommended?: boolean;  // renders gold "Recommended" badge + highlighted border
  ctaLabel: string;
  ctaHref: string;
}
```

#### `IndustryCard`

```typescript
interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  expandedDescription?: string;
}
```

Supports accordion-style expand on click (client component).

#### `AnimatedSection`

```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;       // stagger delay in seconds
  direction?: 'up' | 'left' | 'right' | 'fade';
}
```

Wraps any section in a Framer Motion `motion.div` with `whileInView` trigger. Respects `useReducedMotion()`.

---

### Form Components

#### `ContactForm`

```typescript
interface ContactFormProps {
  preselectedService?: string;  // pre-fills service dropdown from URL param
}
```

Fields: `fullName` (required), `email` (required), `phone` (optional), `company` (optional), `service` (required dropdown), `message` (required)

#### `ApplicationForm`

Fields: `fullName` (required), `email` (required), `phone` (required), `location` (required), `visaStatus` (required for US track), `yearsExperience` (required), `techStack` (required), `resume` (file upload, required)

---

## Data Models

### `ServiceData`

```typescript
interface ServiceData {
  id: string;                    // kebab-case slug, e.g. "job-marketing"
  title: string;
  shortDescription: string;      // Used in cards (≤ 120 chars)
  fullDescription: string;       // Used in detail sections
  icon: string;                  // Lucide icon name
  benefits: string[];
  process: ProcessStep[];
  category: 'staffing' | 'digital' | 'technology' | 'consulting';
  featured?: boolean;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
```

The eight services:

| id | title | category |
|---|---|---|
| `job-marketing` | Job Marketing Services | staffing |
| `placement-services` | Placement Services | staffing |
| `domestic-placement` | Domestic Placement Services | staffing |
| `digital-marketing` | Digital Marketing Services | digital |
| `software-services` | Software Services | technology |
| `cloud-modernization` | Cloud Modernization Services | technology |
| `enterprise-consulting` | Enterprise Architectural Consulting | consulting |
| `gcc-services` | GCC Services | consulting |

> Note: Requirements list 8 services; the table above maps them. `gcc-services` may be merged with `enterprise-consulting` depending on final content — the data model supports either approach.

### `PricingPlan`

```typescript
interface PricingPlan {
  id: 'standard' | 'premium';
  name: string;
  tagline: string;
  price?: string;
  billingNote?: string;
  features: string[];
  isRecommended: boolean;
  ctaLabel: string;
  ctaHref: string;
}
```

Standard Plan features: job marketing, application assistance, resume review, job alerts.

Premium Plan features: all Standard features + training support, career mentorship, interview coaching, end-to-end placement support, dedicated account manager.

### `Testimonial`

```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  category: 'client' | 'candidate';
}
```

### `StatItem`

```typescript
interface StatItem {
  id: string;
  value: number;
  suffix: string;   // "+", "%", "x"
  label: string;
  icon?: string;
}
```

Example stats: `500+ Placements`, `50+ Clients Served`, `8+ Years Experience`, `98% Satisfaction Rate`.

### `Industry`

```typescript
interface Industry {
  id: string;
  title: string;
  icon: string;
  description: string;
  expandedDescription: string;
}
```

Six verticals: Technology, Finance & Banking, Healthcare, Retail & E-Commerce, Manufacturing, GCCs.

### `TeamMember`

```typescript
interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio?: string;
  photoUrl?: string;   // placeholder image if not provided
  linkedinUrl?: string;
}
```

### `TimelineMilestone`

```typescript
interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}
```

### `ValueProposition`

```typescript
interface ValueProposition {
  id: string;
  icon: string;
  title: string;
  description: string;
}
```

### Form Schemas (Zod)

```typescript
// Contact form
const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum([...serviceIds], { required_error: 'Please select a service' }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Application form
const applicationFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  location: z.string().min(2),
  visaStatus: z.enum(['opt', 'h1b', 'green-card', 'us-citizen', 'india-based']),
  yearsExperience: z.number().min(0).max(50),
  techStack: z.string().min(2),
  resume: z.instanceof(File).refine(f => f.size <= 5_000_000, 'Resume must be under 5MB'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type ApplicationFormData = z.infer<typeof applicationFormSchema>;
```

---

## Styling System

### Design Tokens (Tailwind Config)

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      navy: {
        900: '#0A1628',   // primary background
        800: '#0D1F3C',
        700: '#112850',
        600: '#1A3A6B',
      },
      blue: {
        600: '#1E6FD9',   // accent blue
        500: '#2E7FE8',
        400: '#4A95F0',
      },
      gold: {
        500: '#F59E0B',   // CTA / highlight
        400: '#FBBF24',
        600: '#D97706',
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    borderRadius: {
      card: '12px',
    },
    boxShadow: {
      card: '0 4px 24px rgba(0,0,0,0.12)',
      'card-hover': '0 8px 40px rgba(30,111,217,0.25)',
    },
  },
}
```

### Section Alternation Pattern

Sections alternate between two background treatments:

- **Dark sections**: `bg-navy-900` with white text — used for Hero, Stats, CTA Banner, alternating feature sections
- **Light sections**: `bg-white` or `bg-slate-50` with dark text — used for Services Overview, Testimonials, alternating feature sections

### Typography Scale

| Element | Class | Size |
|---|---|---|
| H1 (hero) | `text-5xl md:text-7xl font-bold` | 48–72px |
| H2 (section) | `text-3xl md:text-4xl font-bold` | 30–36px |
| H3 (card) | `text-xl font-semibold` | 20px |
| Body | `text-base` | 16px |
| Caption | `text-sm text-slate-500` | 14px |

### Card System

All cards share:
- `rounded-card` (12px border-radius)
- `shadow-card` at rest
- `shadow-card-hover` + `scale-[1.03]` on hover (Framer Motion `whileHover`)
- `transition-all duration-300`
- `border border-slate-200` on light backgrounds; `border border-navy-700` on dark backgrounds

### Button Variants

```
Primary (gold):   bg-gold-500 text-navy-900 font-semibold hover:bg-gold-400
Secondary (blue): bg-blue-600 text-white hover:bg-blue-500
Outline:          border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white
Ghost:            text-white hover:text-gold-500 (nav links)
```

---

## Animation Approach

### Core Principle

All animations use Framer Motion's `whileInView` with `viewport={{ once: true }}` so they trigger once as the section enters the viewport. The `AnimatedSection` wrapper component encapsulates this pattern.

### `AnimatedSection` Implementation

```typescript
'use client';
import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export function AnimatedSection({ children, direction = 'up', delay = 0, className }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : variants[direction];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      variants={activeVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Stagger Pattern for Card Grids

```typescript
// Parent container
const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Each card child uses AnimatedSection with delay={index * 0.1}
```

### Transition Budget

All transitions complete within 400ms (per Requirement 10.9):
- Section entrance: `duration: 0.4s`
- Hover effects: `duration: 0.2s`
- Navbar background: `duration: 0.3s`
- Mobile drawer: `duration: 0.35s`
- Stats counter: `duration: 2s` (intentionally longer — decorative, not a UI transition)

### Reduced Motion

`useReducedMotion()` from Framer Motion reads the OS `prefers-reduced-motion` media query. When true:
- All directional animations collapse to a simple opacity fade
- Stats counter animates instantly (no count-up)
- Hover scale effects are disabled

---

## Page Designs

### Home Page (`/`)

```
<Navbar />
<HeroSection />                    ← dark navy gradient, full-viewport
<ServicesOverview />               ← white bg, 4-col card grid
<WhyChooseUs />                    ← navy bg, 2-col feature list
<StatsSection />                   ← blue-600 bg, 4 counters
<TestimonialsSection />            ← white bg, 3-col card carousel
<PartnersStrip />                  ← slate-50 bg, logo row
<CTABanner />                      ← navy-900 bg, centered CTA
<Footer />
```

### About Us Page (`/about`)

```
<Navbar />
<PageHero title="About Us" />      ← navy gradient, shorter than home hero
<AboutOverview />                  ← white bg, text + image split
<CoreValues />                     ← slate-50 bg, 4-col icon cards
<LeadershipTeam />                 ← white bg, team member cards
<CompanyTimeline />                ← navy bg, vertical timeline
<CTABanner />
<Footer />
```

### Services Page (`/services`)

```
<Navbar />
<PageHero title="Our Services" />
<ServicesLanding />                ← white bg, 8-card grid with links
<ServiceDetail id="job-marketing"> ← alternating dark/light sections
  <PricingPlans />                 ← Standard + Premium cards
</ServiceDetail>
<ServiceDetail id="placement-services" />
<ServiceDetail id="domestic-placement" />
<ServiceDetail id="digital-marketing" />   ← Agentic AI callout
<ServiceDetail id="software-services" />
<ServiceDetail id="cloud-modernization" />
<ServiceDetail id="enterprise-consulting" />
<CTABanner />
<Footer />
```

### Industries Page (`/industries`)

```
<Navbar />
<PageHero title="Industries We Serve" />
<IndustriesGrid />                 ← 3-col grid, expandable cards
<CTABanner />
<Footer />
```

### Careers Page (`/careers`)

```
<Navbar />
<PageHero title="Careers & Placement" />
<CareersOPT />                     ← OPT consultant section
<CareersUSPlacement />             ← US citizens / H1B / GC section
<CareersIndiaPlacement />          ← India IT placement section
<WhyWorkWithUs />                  ← benefits section
<ApplicationForm />                ← client component
<Footer />
```

### Contact Us Page (`/contact`)

```
<Navbar />
<PageHero title="Contact Us" />
<ContactSection>
  <ContactForm />                  ← left column, client component
  <ContactInfo />                  ← right column: CEO details, addresses
</ContactSection>
<EmbeddedMap />                    ← Google Maps iframe, Hyderabad office
<Footer />
```

### 404 Page (`/not-found`)

```
<Navbar />
<NotFoundSection />                ← centered, illustration, CTA to Home
<Footer />
```

---

## SEO Implementation

### Metadata API

Each page exports a `generateMetadata` function (or static `metadata` object):

```typescript
// app/page.tsx
export const metadata: Metadata = {
  title: 'SSV Technologies | IT Services & Staffing Solutions',
  description: 'SSV Technologies delivers job marketing, placement, digital marketing, software development, cloud modernization, and enterprise consulting services from Hyderabad and the US.',
  openGraph: {
    title: 'SSV Technologies | IT Services & Staffing Solutions',
    description: '...',
    url: 'https://ssv-tech.com',
    images: [{ url: '/og/home.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};
```

### Sitemap (`app/sitemap.ts`)

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ssv-tech.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://ssv-tech.com/about', ... },
    { url: 'https://ssv-tech.com/services', ... },
    { url: 'https://ssv-tech.com/industries', ... },
    { url: 'https://ssv-tech.com/careers', ... },
    { url: 'https://ssv-tech.com/contact', ... },
  ];
}
```

### Robots (`app/robots.ts`)

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ssv-tech.com/sitemap.xml',
  };
}
```

---

## API Routes

### `POST /api/contact`

Receives `ContactFormData`, validates with Zod, forwards to email service (e.g., Resend, SendGrid, or Nodemailer). Returns `{ success: true }` or `{ error: string }`.

### `POST /api/apply`

Receives `ApplicationFormData` as `multipart/form-data` (for resume upload), validates, stores resume to cloud storage (e.g., Vercel Blob or S3), sends notification email. Returns `{ success: true }` or `{ error: string }`.

---

## Error Handling

### Form Errors

- **Validation errors**: Zod schema errors surfaced inline via React Hook Form's `formState.errors`. Each field shows a red helper text below the input.
- **Network errors**: `try/catch` around `fetch` call; on failure, sets a top-level `submitError` state that renders a dismissible error banner with fallback contact details (phone + email).
- **Success state**: On `{ success: true }` response, replaces form with a success message component.

### Page-Level Errors

- **404**: `not-found.tsx` renders a branded 404 page with a "Back to Home" CTA.
- **Runtime errors**: Next.js `error.tsx` boundary catches unexpected errors and shows a generic error page.

### Image Errors

All `<Image>` components include an `onError` handler that swaps to a placeholder SVG to prevent broken image icons.

---

## Testing Strategy

### Unit Tests (Vitest + React Testing Library)

Focus areas:
- Form validation logic: Zod schema correctness for edge cases (empty strings, invalid emails, oversized files)
- `StatsCounter`: correct final value rendered after animation
- `PricingCard`: Premium plan renders "Recommended" badge; Standard plan does not
- `AnimatedSection`: renders children correctly; applies reduced-motion variant when `useReducedMotion` returns true
- Navigation: active link detection, hamburger toggle state
- `ContactForm`: pre-selected service from URL param populates dropdown correctly

### Property-Based Tests (fast-check)

See Correctness Properties section below.

### Integration Tests (Playwright)

- Full form submission flow: fill → submit → success message
- Navigation: all nav links resolve to correct pages
- Responsive breakpoints: viewport resize tests at 320px, 768px, 1024px, 1440px
- Keyboard navigation: tab through all interactive elements on each page

### Accessibility Tests

- `axe-core` via `@axe-core/playwright` on all pages
- Colour contrast verified via Tailwind token audit (all text/background combinations checked against WCAG AA)

### Performance

- Lighthouse CI in GitHub Actions pipeline; fail build if Performance < 80 or Accessibility < 90
- `next/bundle-analyzer` to monitor JS bundle size

---


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Property-based testing is applicable here because the website contains pure rendering functions (components that map data → UI), validation schemas (functions that map input → valid/invalid), and universal structural invariants (every page must have metadata, every image must have alt text). These are ideal candidates for property-based testing with [fast-check](https://fast-check.dev/).

---

### Property 1: Services overview renders one card per service

*For any* non-empty array of `ServiceData` objects passed to the `ServicesOverview` component, the number of rendered `ServiceCard` elements SHALL equal the length of the input array.

**Validates: Requirements 2.3**

---

### Property 2: Contact form blocks submission when any required field is invalid

*For any* combination of contact form field values where at least one required field (`fullName`, `email`, `service`, `message`) is empty or invalid, the `contactFormSchema` Zod validation SHALL return a failure result, and the `ContactForm` component SHALL not invoke the submit handler.

**Validates: Requirements 2.10, 2.11**

---

### Property 3: Application form blocks submission when any required field is invalid

*For any* combination of application form field values where at least one required field is empty or invalid, the `applicationFormSchema` Zod validation SHALL return a failure result, and the `ApplicationForm` component SHALL not invoke the submit handler.

**Validates: Requirements 6.3, 6.4**

---

### Property 4: Service detail renders all required content elements

*For any* valid `ServiceData` object, the rendered `ServiceDetail` component SHALL contain a non-empty service title, description, at least one benefit item, at least one process step, and a CTA element.

**Validates: Requirements 4.3**

---

### Property 5: Recommended pricing card renders badge; non-recommended does not

*For any* `PricingPlan` object, if `isRecommended` is `true` then the rendered `PricingCard` SHALL include a visible recommended badge element; if `isRecommended` is `false` then the rendered `PricingCard` SHALL NOT include a recommended badge element.

**Validates: Requirements 4.9**

---

### Property 6: Every page exports non-empty, unique metadata

*For any* page route in the site's route manifest, the exported `metadata` object SHALL contain a non-empty `title`, a non-empty `description`, and non-empty Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`). No two pages SHALL share an identical `title` value.

**Validates: Requirements 8.1, 8.2**

---

### Property 7: All non-decorative images have non-empty alt text

*For any* `<Image>` or `<img>` element rendered on any page that is not marked as decorative (`role="presentation"` or `aria-hidden="true"`), the `alt` attribute SHALL be a non-empty string.

**Validates: Requirements 9.3**

---

### Property 8: Reduced-motion disables directional animation transforms

*For any* `AnimatedSection` component rendered with any `direction` prop value (`'up'`, `'left'`, `'right'`, `'fade'`), when `useReducedMotion()` returns `true`, the applied animation variant SHALL contain no `x` or `y` transform values — only opacity transitions.

**Validates: Requirements 10.10**

---

### Property 9: Contact form email validation rejects malformed addresses

*For any* string that does not conform to the RFC 5322 email address format, the `contactFormSchema` Zod schema SHALL return a validation error on the `email` field. *For any* string that does conform to a valid email format, the schema SHALL not return an error on the `email` field.

**Validates: Requirements 2.10, 7.2 (Contact_Form field requirements)**

---

### Property 10: Contact form message length validation enforces minimum

*For any* string of length less than 10 characters (including empty string and whitespace-only strings), the `contactFormSchema` Zod schema SHALL return a validation error on the `message` field. *For any* string of length 10 or more characters, the schema SHALL not return a length error on the `message` field.

**Validates: Requirements 2.10**

---

### Property 11: Resume file size validation rejects files exceeding 5 MB

*For any* `File` object whose `size` property exceeds 5,000,000 bytes, the `applicationFormSchema` Zod schema SHALL return a validation error on the `resume` field. *For any* `File` object whose `size` is 5,000,000 bytes or less, the schema SHALL not return a size error on the `resume` field.

**Validates: Requirements 6.3**

---
