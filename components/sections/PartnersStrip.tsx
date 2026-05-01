import { AnimatedSection } from '@/components/ui/AnimatedSection'

const partners = [
  'AWS',
  'Microsoft Azure',
  'Google Cloud',
  'Salesforce',
  'SAP',
  'Oracle',
  'ServiceNow',
  'Workday',
]

export function PartnersStrip() {
  return (
    <section
      className="bg-slate-50 py-14 md:py-16"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <p
            id="partners-heading"
            className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8"
          >
            Trusted By Leading Organizations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 select-none"
              >
                {partner}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
