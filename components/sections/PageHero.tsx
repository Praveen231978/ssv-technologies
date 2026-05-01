import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-blue-600 py-24 md:py-32"
      aria-labelledby="page-hero-heading"
    >
      {/* Dots pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, #4A95F0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection direction="up">
          <h1
            id="page-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
