import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export function CTABanner({
  title = 'Ready to Transform Your Business?',
  subtitle = "Let's discuss how SSV Technologies can help you achieve your goals.",
}: CTABannerProps) {
  return (
    <section
      className="bg-navy-900 py-20 md:py-24"
      aria-labelledby="cta-banner-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection direction="up">
          <h2
            id="cta-banner-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{subtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-gold-500 text-navy-900 font-semibold text-base hover:bg-gold-400 transition-colors duration-200 shadow-lg"
          >
            Get In Touch
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
