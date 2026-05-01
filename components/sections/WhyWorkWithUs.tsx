import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  ShieldCheck,
  Users,
  Zap,
  HeartHandshake,
  Globe,
  TrendingUp,
} from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Proven Track Record',
    description:
      'Over 500 successful placements across the US and India, with a 98% candidate satisfaction rate. Our results speak for themselves.',
  },
  {
    icon: Users,
    title: 'Dedicated Support Team',
    description:
      'Every candidate gets a dedicated account manager who provides personalised guidance throughout the entire placement journey.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'Our streamlined process and extensive employer network mean most candidates receive interview calls within 2–4 weeks of onboarding.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent & Honest',
    description:
      'We set realistic expectations, provide honest feedback, and keep you informed at every step — no surprises, no hidden fees.',
  },
  {
    icon: Globe,
    title: 'Dual-Location Presence',
    description:
      'With offices in Hyderabad and the United States, we have deep market knowledge and employer relationships on both sides of the globe.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Career Growth',
    description:
      'Our relationship doesn\'t end at placement. We provide ongoing mentorship and career guidance to help you grow throughout your career.',
  },
]

export function WhyWorkWithUs() {
  return (
    <section
      className="bg-navy-900 py-20 md:py-24"
      aria-labelledby="why-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="why-work-heading"
            title="Why Partner With SSV Technologies?"
            subtitle="We go beyond job placement — we invest in your long-term career success."
            align="center"
            className="text-white [&_p]:text-slate-300"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <AnimatedSection key={benefit.title} direction="up" delay={index * 0.08}>
                <div className="flex flex-col p-6 rounded-card border border-navy-700 bg-navy-800 h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-navy-900 flex-shrink-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
