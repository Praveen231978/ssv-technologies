import { SectionHeading } from '@/components/ui/SectionHeading'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { timeline } from '@/data/timeline'

export function CompanyTimeline() {
  return (
    <section
      className="bg-navy-900 py-20 md:py-28"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="timeline-heading"
            title="Our Journey"
            subtitle="From a startup in Hyderabad to a trusted partner across India and the United States."
            align="center"
            className="text-white [&_h2]:text-white [&_p]:text-slate-300"
          />
        </AnimatedSection>

        <div className="relative">
          {timeline.map((milestone, index) => (
            <AnimatedSection key={milestone.year} direction="up" delay={index * 0.06}>
              <TimelineItem
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isLeft={index % 2 === 0}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
