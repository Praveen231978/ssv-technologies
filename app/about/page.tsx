import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { AboutOverview } from '@/components/sections/AboutOverview'
import { CoreValues } from '@/components/sections/CoreValues'
import { LeadershipTeam } from '@/components/sections/LeadershipTeam'
import { CompanyTimeline } from '@/components/sections/CompanyTimeline'
import { CTABanner } from '@/components/sections/CTABanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about SSV Technologies — our mission, vision, core values, leadership team, and the journey that has made us a trusted IT services and staffing partner across India and the United States.',
  path: '/about',
  ogImage: '/og/about.png',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Connecting exceptional talent with leading employers since 2016."
      />
      <AboutOverview />
      <CoreValues />
      <LeadershipTeam />
      <CompanyTimeline />
      <CTABanner
        title="Ready to Partner with Us?"
        subtitle="Let's explore how SSV Technologies can support your goals — whether you're hiring, job-seeking, or transforming your technology."
      />
    </>
  )
}
