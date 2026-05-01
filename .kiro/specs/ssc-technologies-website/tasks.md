# Implementation Plan: SSV Technologies Website

## Overview

Build a production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion website for SSV Technologies Pvt. Ltd. The implementation proceeds from project scaffolding through data models, shared components, page assembly, forms, API routes, SEO, and property-based tests. Each task builds incrementally on the previous so no code is left orphaned.

## Tasks

- [x] 1. Scaffold project and configure tooling
  - Initialise a new Next.js 14 project with App Router, TypeScript, Tailwind CSS, and ESLint using `create-next-app`
  - Install additional dependencies: `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`, `lucide-react`, `fast-check`, `vitest`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
  - Create `tailwind.config.ts` with the full design-token extension: `navy`, `blue`, `gold` colour palettes; `card` border-radius; `card` and `card-hover` box-shadows; Inter font family
  - Create `styles/globals.css` with Tailwind directives and CSS custom properties for the design tokens
  - Create `next.config.ts` with image domain configuration and any required experimental flags
  - Create `vitest.config.ts` configured for jsdom environment and React Testing Library
  - _Requirements: 10.1, 10.2, 10.4_

- [x] 2. Define TypeScript data models and static data files
  - [x] 2.1 Create `lib/utils.ts` with `cn()` class-name helper (clsx + tailwind-merge pattern) and any shared utility functions
    - _Requirements: 10.4_

  - [x] 2.2 Create `lib/validations.ts` with Zod schemas
    - Define `contactFormSchema` with fields: `fullName` (min 2), `email` (email format), `phone` (optional), `company` (optional), `service` (enum of all 8 service IDs), `message` (min 10)
    - Define `applicationFormSchema` with fields: `fullName`, `email`, `phone` (min 7), `location`, `visaStatus` (enum), `yearsExperience` (number 0–50), `techStack`, `resume` (File, max 5 MB)
    - Export `ContactFormData` and `ApplicationFormData` inferred types
    - _Requirements: 2.10, 2.11, 6.3, 6.4_

  - [x] 2.3 Create `data/services.ts` with all 8 `ServiceData` objects
    - Include `id`, `title`, `shortDescription`, `fullDescription`, `icon` (Lucide name), `benefits[]`, `process[]`, `category`, `featured` for each service
    - Services: `job-marketing`, `placement-services`, `domestic-placement`, `digital-marketing`, `software-services`, `cloud-modernization`, `enterprise-consulting`, `gcc-services`
    - Include `PricingPlan[]` export for Job Marketing Services (Standard and Premium plans per Requirements 4.6–4.9)
    - _Requirements: 4.1, 4.2, 4.6, 4.7, 4.8_

  - [x] 2.4 Create remaining static data files
    - `data/industries.ts` — 6 `Industry` objects: Technology, Finance & Banking, Healthcare, Retail & E-Commerce, Manufacturing, GCCs
    - `data/testimonials.ts` — at least 3 `Testimonial` objects (mix of `client` and `candidate` categories)
    - `data/stats.ts` — 4 `StatItem` objects: 500+ Placements, 50+ Clients Served, 8+ Years Experience, 98% Satisfaction Rate
    - `data/team.ts` — `TeamMember[]` with placeholder entries for leadership
    - `data/timeline.ts` — `TimelineMilestone[]` with key company milestones
    - `data/navigation.ts` — nav links array (Home, About Us, Services, Industries, Careers, Contact Us) and footer link groups
    - _Requirements: 2.7, 3.3, 3.4, 3.5, 5.1_

- [x] 3. Implement shared UI components
  - [x] 3.1 Create `components/ui/AnimatedSection.tsx`
    - Mark as `'use client'`; import `motion` and `useReducedMotion` from Framer Motion
    - Implement `up`, `left`, `right`, `fade` direction variants
    - When `useReducedMotion()` is true, collapse all directional variants to opacity-only fade
    - Use `whileInView` with `viewport={{ once: true, margin: '-80px' }}`
    - Accept `children`, `className`, `delay`, `direction` props per the design interface
    - _Requirements: 10.8, 10.9, 10.10_

  - [x] 3.2 Create `components/ui/SectionHeading.tsx`
    - Render an H2 with optional subtitle paragraph and optional gold accent underline
    - Accept `title`, `subtitle`, `align` (`left` | `center`) props
    - _Requirements: 10.2, 10.4_

  - [x] 3.3 Create `components/ui/Badge.tsx`
    - Render a small pill badge; accept `label` and `variant` (`gold` | `blue` | `navy`) props
    - _Requirements: 4.9, 10.6_

  - [x] 3.4 Create `components/ui/ServiceCard.tsx`
    - Render card with Lucide icon, title, description, and "Learn More" link
    - Apply `rounded-card`, `shadow-card`, hover `shadow-card-hover` + `scale-[1.03]` via Framer Motion `whileHover`
    - Gold accent border-top on hover
    - Accept `title`, `description`, `icon`, `href`, `accentColor` props
    - _Requirements: 2.3, 10.6, 10.11_

  - [x] 3.5 Create `components/ui/TestimonialCard.tsx`
    - Render quote, author name, role, optional company, optional avatar, star rating
    - Apply card styling consistent with the card system
    - _Requirements: 2.7, 10.6_

  - [x] 3.6 Create `components/ui/StatsCounter.tsx`
    - Mark as `'use client'`; use `useInView` + `useMotionValue` + `useTransform` from Framer Motion to animate count-up on viewport entry
    - When `useReducedMotion()` is true, display final value immediately without animation
    - Accept `value`, `suffix`, `label`, `duration` props
    - _Requirements: 2.6, 10.8, 10.10_

  - [x] 3.7 Create `components/ui/PricingCard.tsx`
    - Render plan name, price, billing period, features list, CTA button
    - When `isRecommended` is true, render a gold `Badge` with label "Recommended" and apply highlighted border treatment
    - When `isRecommended` is false, render no badge
    - Accept full `PricingCardProps` interface
    - _Requirements: 4.6, 4.7, 4.8, 4.9_

  - [x] 3.8 Create `components/ui/IndustryCard.tsx`
    - Mark as `'use client'`; render icon, title, description with accordion-style expand/collapse on click
    - Show `expandedDescription` when expanded
    - _Requirements: 5.2, 5.3_

  - [x] 3.9 Create `components/ui/ValueCard.tsx`, `components/ui/LeaderCard.tsx`, `components/ui/TimelineItem.tsx`
    - `ValueCard`: icon + title + description for Core Values section
    - `LeaderCard`: photo placeholder, name, title, optional LinkedIn link for Leadership Team
    - `TimelineItem`: year badge, title, description for Company Timeline; alternate left/right layout on desktop
    - _Requirements: 3.3, 3.4, 3.5_

- [x] 4. Implement layout components
  - [x] 4.1 Create `components/layout/Navbar.tsx`
    - Mark as `'use client'`; read nav links from `data/navigation.ts`
    - Implement sticky positioning (`sticky top-0 z-50`)
    - Implement scroll-based background transition: transparent → `bg-navy-900/95 backdrop-blur` when `scrollY > 80`
    - Implement mobile hamburger toggle with Framer Motion `AnimatePresence` full-height drawer
    - Highlight active link with gold underline using `usePathname`
    - Include prominent "Get In Touch" CTA button linking to `/contact`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

  - [x] 4.2 Create `components/layout/Footer.tsx`
    - Render logo + tagline, navigation link groups, services quick-links, contact details, social icons (LinkedIn, Twitter/X, Facebook, Instagram), copyright notice
    - Display company name and registered locations (Hyderabad, India and United States)
    - _Requirements: 1.7, 7.7_

  - [x] 4.3 Create `app/layout.tsx` (root layout)
    - Configure `next/font` with Inter, apply to `<body>`
    - Compose `<Navbar />` + `{children}` + `<Footer />` within semantic `<html>` and `<body>` tags
    - _Requirements: 8.3, 10.2_

- [x] 5. Checkpoint — Ensure all shared components compile without errors
  - Run `tsc --noEmit` and fix any TypeScript errors before proceeding to page assembly
  - Ensure all imports resolve correctly

- [x] 6. Implement Home page sections and page
  - [x] 6.1 Create `components/sections/HeroSection.tsx`
    - Full-viewport dark navy gradient background with technology-themed visual treatment
    - Render headline, sub-headline, primary CTA ("Explore Services" → `/services`), secondary CTA ("Contact Us" → `/contact`)
    - Wrap content in `AnimatedSection` with `direction="up"`
    - _Requirements: 2.1, 2.2, 10.5_

  - [x] 6.2 Create `components/sections/ServicesOverview.tsx`
    - White background; render `SectionHeading` + 4-column responsive grid of `ServiceCard` components
    - Map over `services` prop (all 8 services from `data/services.ts`)
    - Each card links to the corresponding anchor on `/services`
    - Wrap grid in stagger animation using `AnimatedSection` with incremental `delay` per card
    - _Requirements: 2.3, 2.4_

  - [x] 6.3 Create `components/sections/WhyChooseUs.tsx`
    - Navy background; render `SectionHeading` + 2-column feature list of `ValueCard` components
    - Include at least 4 value propositions: quality, agility, Agentic AI delivery, dual-location presence
    - _Requirements: 2.5_

  - [x] 6.4 Create `components/sections/StatsSection.tsx`
    - Blue-600 background; render 4 `StatsCounter` components in a responsive row
    - Pass stats from `data/stats.ts`
    - _Requirements: 2.6_

  - [x] 6.5 Create `components/sections/TestimonialsSection.tsx`
    - White background; render `SectionHeading` + 3-column responsive grid of `TestimonialCard` components
    - Pass testimonials from `data/testimonials.ts`
    - _Requirements: 2.7_

  - [x] 6.6 Create `components/sections/PartnersStrip.tsx`
    - Slate-50 background; render a horizontal logo/partner strip with placeholder partner names or SVG logos
    - _Requirements: 2.8_

  - [x] 6.7 Create `components/sections/CTABanner.tsx`
    - Navy-900 background; centered headline, sub-text, and primary gold CTA button linking to `/contact`
    - _Requirements: 2.9_

  - [x] 6.8 Assemble `app/page.tsx` (Home page)
    - Compose all Home page sections in order: `HeroSection`, `ServicesOverview`, `WhyChooseUs`, `StatsSection`, `TestimonialsSection`, `PartnersStrip`, `CTABanner`
    - Export static `metadata` object with unique title, description, and Open Graph tags for the Home page
    - _Requirements: 2.1–2.9, 8.1, 8.2_

- [x] 7. Implement About Us page sections and page
  - [x] 7.1 Create `components/sections/AboutOverview.tsx`
    - White background; two-column layout: company overview text (mission + vision + dual-location description) on left, placeholder image on right
    - _Requirements: 3.1, 3.2_

  - [x] 7.2 Create `components/sections/CoreValues.tsx`
    - Slate-50 background; 4-column grid of `ValueCard` components with icons and descriptions
    - _Requirements: 3.3_

  - [x] 7.3 Create `components/sections/LeadershipTeam.tsx`
    - White background; grid of `LeaderCard` components for key team members
    - _Requirements: 3.4_

  - [x] 7.4 Create `components/sections/CompanyTimeline.tsx`
    - Navy background; vertical timeline using `TimelineItem` components from `data/timeline.ts`
    - _Requirements: 3.5_

  - [x] 7.5 Assemble `app/about/page.tsx`
    - Compose: `PageHero` (navy gradient, shorter than home hero), `AboutOverview`, `CoreValues`, `LeadershipTeam`, `CompanyTimeline`, `CTABanner`
    - Export static `metadata` with unique title, description, and Open Graph tags for About page
    - _Requirements: 3.1–3.5, 8.1, 8.2_

- [x] 8. Implement Services page sections and page
  - [x] 8.1 Create a reusable `PageHero` component in `components/sections/`
    - Accept `title` and optional `subtitle` props; render navy gradient banner shorter than the home hero
    - _Requirements: 10.5_

  - [x] 8.2 Create `components/sections/ServiceDetail.tsx`
    - Accept a `ServiceData` object and optional `PricingPlan[]` prop
    - Render service title, full description, benefits list (bulleted), process steps (numbered), and a CTA button that links to `/contact?service={id}`
    - When `pricingPlans` is provided, render a `PricingPlans` sub-section with two `PricingCard` components
    - Alternate dark/light background per service index (even = white, odd = navy)
    - Prominently call out "Agentic AI delivery" within the Digital Marketing service detail
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9_

  - [x] 8.3 Assemble `app/services/page.tsx`
    - Compose: `PageHero`, services landing grid (8 `ServiceCard` components with anchor links), then one `ServiceDetail` section per service in order
    - Pass `pricingPlans` only to the `job-marketing` `ServiceDetail`
    - Export static `metadata` with unique title, description, and Open Graph tags
    - _Requirements: 4.1–4.9, 8.1, 8.2_

- [x] 9. Implement Industries page
  - [x] 9.1 Create `components/sections/IndustriesGrid.tsx`
    - 3-column responsive grid of `IndustryCard` components from `data/industries.ts`
    - Each card supports accordion expand/collapse to show `expandedDescription`
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 9.2 Assemble `app/industries/page.tsx`
    - Compose: `PageHero`, `IndustriesGrid`, `CTABanner`
    - Export static `metadata` with unique title, description, and Open Graph tags
    - _Requirements: 5.1–5.3, 8.1, 8.2_

- [x] 10. Implement form components and API routes
  - [x] 10.1 Create `components/forms/ContactForm.tsx`
    - Mark as `'use client'`; use React Hook Form with `zodResolver(contactFormSchema)`
    - Fields: `fullName`, `email`, `phone` (optional), `company` (optional), `service` (dropdown of all 8 services), `message`
    - Read `?service=` URL param via `useSearchParams` and pre-populate the service dropdown
    - Display inline Zod validation errors below each field on submit attempt
    - On successful `POST /api/contact` response, replace form with a success message
    - On network/server error, display a dismissible error banner with fallback phone and email contact details
    - _Requirements: 2.10, 2.11, 7.2, 7.3, 7.4, 7.5_

  - [x] 10.2 Create `components/forms/ApplicationForm.tsx`
    - Mark as `'use client'`; use React Hook Form with `zodResolver(applicationFormSchema)`
    - Fields: `fullName`, `email`, `phone`, `location`, `visaStatus` (dropdown), `yearsExperience` (number input), `techStack`, `resume` (file input, accept PDF/DOC, max 5 MB)
    - Display inline validation errors on submit attempt
    - On successful `POST /api/apply` response, display confirmation message: "Thank you! Our team will respond within 2 business days."
    - On error, display dismissible error banner with fallback contact details
    - _Requirements: 6.2, 6.3, 6.4, 6.5_

  - [x] 10.3 Create `app/api/contact/route.ts`
    - Parse and validate request body with `contactFormSchema`
    - On validation failure, return `400` with Zod error details
    - On success, log submission (or forward to email service placeholder) and return `{ success: true }`
    - _Requirements: 7.4_

  - [x] 10.4 Create `app/api/apply/route.ts`
    - Parse `multipart/form-data` request; validate fields with `applicationFormSchema`
    - Validate resume file size (≤ 5 MB) and type
    - On success, return `{ success: true }`; on failure, return `400` with error details
    - _Requirements: 6.3_

- [x] 11. Implement Careers page
  - [x] 11.1 Create `components/sections/CareersHero.tsx` and career opportunity sections
    - Create three content sections: `CareersOPT` (OPT consultant opportunities), `CareersUSPlacement` (US citizens / H1B / GC), `CareersIndiaPlacement` (India IT placement)
    - Each section describes the opportunity track, eligibility, and process
    - _Requirements: 6.1_

  - [x] 11.2 Create `components/sections/WhyWorkWithUs.tsx`
    - Highlight benefits of partnering with SSV Technologies for job placement (card or icon-list layout)
    - _Requirements: 6.6_

  - [x] 11.3 Assemble `app/careers/page.tsx`
    - Compose: `PageHero`, `CareersOPT`, `CareersUSPlacement`, `CareersIndiaPlacement`, `WhyWorkWithUs`, `ApplicationForm`
    - Export static `metadata` with unique title, description, and Open Graph tags
    - _Requirements: 6.1–6.6, 8.1, 8.2_

- [x] 12. Implement Contact Us page
  - [x] 12.1 Create `components/sections/ContactInfo.tsx`
    - Display CEO direct contact: name "Surya Vedangi", phone "+91 91008 28982", emails "ambika.v@ssv-tech.com" and "nag.v@ssv-tech.com"
    - Display office addresses for Hyderabad and US locations
    - Display social media profile links: LinkedIn, Twitter/X, Facebook, Instagram
    - _Requirements: 7.1, 7.7, 7.8, 7.9_

  - [x] 12.2 Create `components/sections/EmbeddedMap.tsx`
    - Render a Google Maps iframe for the Hyderabad office location
    - Include `title` attribute on the iframe for accessibility
    - _Requirements: 7.6_

  - [x] 12.3 Assemble `app/contact/page.tsx`
    - Compose: `PageHero`, two-column `ContactSection` (`ContactForm` left, `ContactInfo` right), `EmbeddedMap`
    - Export static `metadata` with unique title, description, and Open Graph tags
    - _Requirements: 7.1–7.9, 8.1, 8.2_

- [x] 13. Implement 404 page and error boundary
  - Create `app/not-found.tsx` with branded 404 layout: centered illustration placeholder, "Page Not Found" heading, descriptive message, and "Back to Home" CTA button
  - Create `app/error.tsx` as a client component error boundary with a generic error message and "Try Again" / "Go Home" CTAs
  - _Requirements: 1.8_

- [x] 14. Implement SEO files
  - Create `app/sitemap.ts` exporting a `sitemap()` function that returns all 6 public routes with `lastModified`, `changeFrequency`, and `priority` values
  - Create `app/robots.ts` exporting a `robots()` function that allows all user agents and references the sitemap URL
  - Create `lib/metadata.ts` with a `buildMetadata()` helper that merges page-specific metadata with shared Open Graph defaults (base URL `https://ssv-tech.com`, default OG image `/og/home.png`)
  - Verify all 6 page files export unique `metadata` objects using `buildMetadata()`
  - _Requirements: 8.1, 8.2, 8.7, 8.8_

- [x] 15. Checkpoint — Full build verification
  - Run `next build` and confirm zero TypeScript errors and zero build failures
  - Verify all pages render at 320px, 768px, 1024px, and 1440px viewport widths
  - Ensure all interactive elements are keyboard-navigable (tab order, focus rings)
  - Fix any remaining accessibility issues (missing `alt` text, missing form labels, colour contrast)
  - _Requirements: 8.3–8.6, 9.1–9.6_

- [x] 16. Write property-based tests with fast-check
  - [x] 16.1 Create `tests/properties/services-overview.test.ts`
    - **Property 1: Services overview renders one card per service**
    - For any non-empty `ServiceData[]`, assert rendered `ServiceCard` count equals array length
    - Use `fc.array(fc.record({...}), { minLength: 1 })` to generate arbitrary service arrays
    - **Validates: Requirements 2.3**

  - [ ]* 16.2 Write property test for contact form schema — required field blocking
    - **Property 2: Contact form blocks submission when any required field is invalid**
    - Generate arbitrary form objects with at least one required field (`fullName`, `email`, `service`, `message`) empty or invalid; assert `contactFormSchema.safeParse()` returns `success: false`
    - **Validates: Requirements 2.10, 2.11**

  - [ ]* 16.3 Write property test for application form schema — required field blocking
    - **Property 3: Application form blocks submission when any required field is invalid**
    - Generate arbitrary application form objects with at least one required field empty or invalid; assert `applicationFormSchema.safeParse()` returns `success: false`
    - **Validates: Requirements 6.3, 6.4**

  - [x] 16.4 Create `tests/properties/service-detail.test.ts`
    - **Property 4: Service detail renders all required content elements**
    - For any valid `ServiceData` object, assert rendered `ServiceDetail` contains non-empty title, description, at least one benefit, at least one process step, and a CTA element
    - **Validates: Requirements 4.3**

  - [x] 16.5 Create `tests/properties/pricing-card.test.ts`
    - **Property 5: Recommended pricing card renders badge; non-recommended does not**
    - For any `PricingPlan` with `isRecommended: true`, assert rendered `PricingCard` includes a badge element; for `isRecommended: false`, assert no badge
    - **Validates: Requirements 4.9**

  - [ ]* 16.6 Write property test for page metadata uniqueness
    - **Property 6: Every page exports non-empty, unique metadata**
    - Import all 6 page `metadata` objects; assert each has non-empty `title`, `description`, and OG tags; assert all titles are unique
    - **Validates: Requirements 8.1, 8.2**

  - [ ]* 16.7 Write property test for image alt text
    - **Property 7: All non-decorative images have non-empty alt text**
    - Render each page component and query all `img` elements not marked `aria-hidden` or `role="presentation"`; assert each has a non-empty `alt` attribute
    - **Validates: Requirements 9.3**

  - [x] 16.8 Create `tests/properties/animated-section.test.ts`
    - **Property 8: Reduced-motion disables directional animation transforms**
    - For any `direction` prop value (`up`, `left`, `right`, `fade`), when `useReducedMotion` is mocked to return `true`, assert the applied variant contains no `x` or `y` values
    - **Validates: Requirements 10.10**

  - [x] 16.9 Create `tests/properties/contact-form-email.test.ts`
    - **Property 9: Contact form email validation rejects malformed addresses**
    - Use `fc.emailAddress()` for valid emails and `fc.string()` filtered to exclude `@` for invalid; assert schema returns error for invalid and no error for valid
    - **Validates: Requirements 2.10, 7.2**

  - [x] 16.10 Create `tests/properties/contact-form-message.test.ts`
    - **Property 10: Contact form message length validation enforces minimum**
    - For any string with length < 10, assert schema returns a `message` field error; for length ≥ 10, assert no length error
    - **Validates: Requirements 2.10**

  - [x] 16.11 Create `tests/properties/resume-file-size.test.ts`
    - **Property 11: Resume file size validation rejects files exceeding 5 MB**
    - For any `File` with `size > 5_000_000`, assert schema returns a `resume` field error; for `size ≤ 5_000_000`, assert no size error
    - **Validates: Requirements 6.3**

- [x] 17. Final polish and accessibility pass
  - [x] 17.1 Audit and fix all Tailwind colour contrast ratios
    - Verify all text/background combinations meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
    - _Requirements: 9.2_

  - [x] 17.2 Add `aria-label` and `aria-describedby` attributes to all form fields and interactive elements missing them
    - Ensure all form inputs have associated `<label>` elements
    - Ensure all icon-only buttons have `aria-label`
    - _Requirements: 9.4, 9.5_

  - [x] 17.3 Verify and complete responsive layout at all breakpoints
    - Test grid layouts at 320px (single column), 768px (2-column), 1024px (3-column), 1440px (4-column) where applicable
    - Fix any overflow or layout issues
    - _Requirements: 9.1_

  - [ ]* 17.4 Write unit tests for critical component behaviours
    - `PricingCard`: Premium renders badge, Standard does not
    - `AnimatedSection`: renders children; applies fade-only variant when reduced motion is true
    - `ContactForm`: pre-selected service from `?service=` URL param populates dropdown
    - `StatsCounter`: displays correct final value
    - _Requirements: 2.10, 4.9, 10.10_

- [x] 18. Final checkpoint — Ensure all tests pass
  - Run `vitest --run` and confirm all property-based tests and unit tests pass
  - Run `next build` one final time to confirm a clean production build
  - Ensure all tasks pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Checkpoints (tasks 5, 15, 18) ensure incremental validation before proceeding
- Property tests (task 16) validate the 11 correctness properties defined in the design document
- Contact details to hardcode: CEO Surya Vedangi, phone +91 91008 28982, emails ambika.v@ssv-tech.com and nag.v@ssv-tech.com
- All animations must complete within 400ms (except the decorative stats counter at 2s)
- The `fast-check` library is used for all property-based tests
- The `vitest` + React Testing Library stack is used for unit tests
