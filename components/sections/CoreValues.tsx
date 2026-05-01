import { SectionHeading } from '@/components/ui/SectionHeading'
import { ValueCard } from '@/components/ui/ValueCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const coreValues = [
  {
    id: 'integrity',
    icon: 'ShieldCheck',
    title: 'Integrity',
    description:
      'We operate with transparency and honesty in every client and candidate relationship.',
  },
  {
    id: 'excellence',
    icon: 'Star',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we deliver.',
  },
  {
    id: 'innovation',
    icon: 'Lightbulb',
    title: 'Innovation',
    description:
      'We embrace emerging technologies like Agentic AI to stay ahead of the curve.',
  },
  {
    id: 'partnership',
    icon: 'Handshake',
    title: 'Partnership',
    description:
      'We build long-term relationships, not transactional engagements.',
  },
]

export function CoreValues() {
  return (
    <section
      className="bg-slate-50 py-20 md:py-28"
      aria-labelledby="core-values-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="core-values-heading"
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every relationship we build."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <AnimatedSection key={value.id} direction="up" delay={index * 0.1}>
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
