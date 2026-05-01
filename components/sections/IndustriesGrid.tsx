import { SectionHeading } from '@/components/ui/SectionHeading'
import { IndustryCard } from '@/components/ui/IndustryCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { industries } from '@/data/industries'

export function IndustriesGrid() {
  return (
    <section
      className="bg-white py-20 md:py-28"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="industries-heading"
            title="Industries We Serve"
            subtitle="Deep domain expertise across the sectors that matter most — delivering tailored solutions for your industry's unique challenges."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.id} direction="up" delay={index * 0.08}>
              <IndustryCard
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                expandedDescription={industry.expandedDescription}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
