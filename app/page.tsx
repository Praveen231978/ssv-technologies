import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PartnersStrip } from '@/components/sections/PartnersStrip'
import { CTABanner } from '@/components/sections/CTABanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'IT Services & Staffing Solutions',
  description:
    'SSV Technologies connects exceptional talent with leading employers and delivers technology solutions that drive measurable business outcomes — across India and the United States.',
  path: '/',
  ogImage: '/og/home.png',
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <PartnersStrip />
      <CTABanner />
    </>
  )
}
