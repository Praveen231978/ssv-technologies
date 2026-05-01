import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import * as LucideIcons from 'lucide-react'

interface ValueProposition {
  id: string
  icon: string
  title: string
  description: string
}

const valuePropositions: ValueProposition[] = [
  {
    id: 'agentic-ai',
    icon: 'Bot',
    title: 'Agentic AI Delivery',
    description:
      'We leverage autonomous AI systems to execute marketing campaigns and deliver results faster than traditional agencies.',
  },
  {
    id: 'dual-location',
    icon: 'Globe2',
    title: 'Dual-Location Presence',
    description:
      'Teams in Hyderabad and the US ensure round-the-clock support and deep market knowledge on both sides.',
  },
  {
    id: 'end-to-end',
    icon: 'Layers',
    title: 'End-to-End Support',
    description:
      'From strategy to execution, we handle every step so you can focus on what matters most.',
  },
  {
    id: 'quality',
    icon: 'ShieldCheck',
    title: 'Unmatched Quality',
    description:
      'Rigorous quality standards and experienced professionals ensure every engagement exceeds expectations.',
  },
  {
    id: 'agile',
    icon: 'Zap',
    title: 'Agile Delivery',
    description:
      'Rapid iteration cycles and flexible engagement models adapt to your evolving business needs.',
  },
  {
    id: 'track-record',
    icon: 'Trophy',
    title: 'Proven Track Record',
    description:
      '500+ successful placements and 50+ satisfied clients speak to our consistent delivery excellence.',
  },
]

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }> | undefined>)[name]
  if (!IconComponent) {
    const Fallback = LucideIcons.Layers
    return <Fallback className={className} />
  }
  return <IconComponent className={className} />
}

export function WhyChooseUs() {
  return (
    <section
      className="bg-navy-900 py-20 md:py-28"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="why-choose-us-heading"
            title="Why Choose SSV Technologies"
            subtitle="We combine deep domain expertise, cutting-edge AI, and a genuine commitment to your success."
            align="center"
            className="text-white [&_h2]:text-white [&_p]:text-slate-300"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuePropositions.map((item, index) => (
            <AnimatedSection key={item.id} direction="up" delay={index * 0.08}>
              <div className="flex items-start gap-5 p-6 rounded-card border border-navy-700 bg-navy-800/50 hover:bg-navy-800 transition-colors duration-300">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/20 text-gold-400">
                  <DynamicIcon name={item.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
