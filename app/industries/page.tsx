import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { CTABanner } from '@/components/sections/CTABanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Industries We Serve',
  description:
    'SSV Technologies delivers specialized IT services and staffing solutions across Technology, Finance & Banking, Healthcare, Retail & E-Commerce, Manufacturing, and GCCs.',
  path: '/industries',
  ogImage: '/og/industries.png',
})

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Deep domain expertise across the sectors that matter most."
      />
      <IndustriesGrid />
      <CTABanner
        title="Let's Talk About Your Industry"
        subtitle="Our specialists understand your sector's unique challenges. Let's explore how we can help."
      />
    </>
  )
}
