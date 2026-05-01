import { StatsCounter } from '@/components/ui/StatsCounter'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { stats } from '@/data/stats'

export function StatsSection() {
  return (
    <section
      className="bg-blue-600 py-16 md:py-20"
      aria-label="Company statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatsCounter
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
