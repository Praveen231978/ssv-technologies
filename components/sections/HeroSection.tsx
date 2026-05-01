import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-600"
        aria-hidden="true"
      />

      {/* Animated tech grid / dots pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, #4A95F0 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Decorative floating blobs */}
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-navy-600/30 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection direction="up">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
              <span className="text-gold-400 text-sm font-medium">
                India &amp; United States
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Careers.{' '}
              <span className="text-gold-400">Accelerating Growth.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
              SSV Technologies connects exceptional talent with leading employers and delivers
              technology solutions that drive measurable business outcomes — across India and
              the United States.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold-500 text-navy-900 font-semibold text-base hover:bg-gold-400 transition-colors duration-200 shadow-lg"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-navy-900 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
