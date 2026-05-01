import Link from 'next/link'
import { Check, Bot } from 'lucide-react'
import { PricingCard } from '@/components/ui/PricingCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { type ServiceData, type PricingPlan } from '@/data/services'
import { cn } from '@/lib/utils'

interface ServiceDetailProps {
  service: ServiceData
  pricingPlans?: PricingPlan[]
  index: number
}

export function ServiceDetail({ service, pricingPlans, index }: ServiceDetailProps) {
  const isEven = index % 2 === 0
  const isDigitalMarketing = service.id === 'digital-marketing'

  return (
    <section
      id={service.id}
      className={cn('py-20 md:py-28', isEven ? 'bg-white' : 'bg-slate-50')}
      aria-labelledby={`service-${service.id}-heading`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          {/* Agentic AI badge for digital marketing */}
          {isDigitalMarketing && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 mb-6">
              <Bot className="w-4 h-4 text-blue-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-blue-600">
                Powered by Agentic AI
              </span>
            </div>
          )}

          {/* Service title */}
          <h2
            id={`service-${service.id}-heading`}
            className="text-3xl md:text-4xl font-bold text-navy-900 mb-4"
          >
            {service.title}
          </h2>

          {/* Gold accent line */}
          <div className="h-1 w-16 rounded-full bg-gold-500 mb-6" aria-hidden="true" />

          {/* Full description */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10">
            {service.fullDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3" role="list">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700 leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process steps */}
            <div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Process</h3>
              <ol className="space-y-4" role="list">
                {service.process.map((step) => (
                  <li key={step.step} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-900 text-white text-sm font-bold flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {step.step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{step.title}</p>
                      <p className="text-sm text-slate-600 leading-snug mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* CTA button */}
          <Link
            href={`/contact?service=${service.id}`}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-gold-500 text-navy-900 font-semibold text-sm hover:bg-gold-400 transition-colors duration-200 shadow-md"
          >
            Get Started with {service.title}
          </Link>
        </AnimatedSection>

        {/* Pricing plans (only for job-marketing) */}
        {pricingPlans && pricingPlans.length > 0 && (
          <AnimatedSection direction="up" delay={0.15} className="mt-16">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Choose Your Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {pricingPlans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  planName={plan.name}
                  tagline={plan.tagline}
                  price={plan.price}
                  billingPeriod={plan.billingNote}
                  features={plan.features}
                  isRecommended={plan.isRecommended}
                  ctaLabel={plan.ctaLabel}
                  ctaHref={plan.ctaHref}
                />
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
