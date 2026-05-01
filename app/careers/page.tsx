import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/sections/PageHero'
import { CareersOpportunities } from '@/components/sections/CareersOpportunities'
import { WhyWorkWithUs } from '@/components/sections/WhyWorkWithUs'
import { ApplicationForm } from '@/components/forms/ApplicationForm'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Careers & Placement',
  description:
    'Explore career and placement opportunities with SSV Technologies. OPT consultant job marketing, US placement for H1B and Green Card holders, and India IT placement services.',
  path: '/careers',
  ogImage: '/og/careers.png',
})

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers & Placement"
        subtitle="Your next opportunity starts here. Explore our placement tracks and apply today."
      />

      <CareersOpportunities />

      <WhyWorkWithUs />

      {/* Apply Now */}
      <section
        className="bg-slate-50 py-20 md:py-24"
        id="apply"
        aria-labelledby="apply-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="apply-heading"
              className="text-3xl md:text-4xl font-bold text-navy-900 mb-4"
            >
              Apply Now
            </h2>
            <div className="h-1 w-16 rounded-full bg-gold-500 mx-auto mb-4" aria-hidden="true" />
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Ready to take the next step? Fill out the form below and our team will be in touch
              within 2 business days.
            </p>
          </div>
          <div className="bg-white rounded-card shadow-card border border-slate-200 p-8">
            <Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 rounded-lg" />}>
              <ApplicationForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
