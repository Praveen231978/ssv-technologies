import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { CTABanner } from '@/components/sections/CTABanner'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { services, jobMarketingPricingPlans } from '@/data/services'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Our Services',
  description:
    "Explore SSV Technologies' full range of IT services: job marketing, placement, digital marketing powered by Agentic AI, custom software development, cloud modernization, enterprise consulting, and GCC services.",
  path: '/services',
  ogImage: '/og/services.png',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end IT services and staffing solutions designed to drive measurable outcomes."
      />

      {/* Services landing grid */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <SectionHeading
              id="services-grid-heading"
              title="Everything You Need to Succeed"
              subtitle="From talent acquisition to technology transformation — our eight service lines cover the full spectrum of your IT needs."
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} direction="up" delay={index * 0.07}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  href={`#${service.id}`}
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Individual service detail sections */}
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          pricingPlans={service.id === 'job-marketing' ? jobMarketingPricingPlans : undefined}
          index={index}
        />
      ))}

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Contact our team to discuss which services are right for your business or career goals."
      />
    </>
  )
}
