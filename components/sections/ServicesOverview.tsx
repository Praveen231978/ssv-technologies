import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { services } from '@/data/services'

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="services-overview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="services-overview-heading"
            title="Our Services"
            subtitle="From talent placement to technology transformation — we deliver end-to-end solutions that drive real business outcomes."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} direction="up" delay={index * 0.08}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services#${service.id}`}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
