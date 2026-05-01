import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function AboutOverview() {
  return (
    <section
      className="bg-white py-20 md:py-28"
      aria-labelledby="about-overview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <AnimatedSection direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                About SSV Technologies
              </p>
              <h2
                id="about-overview-heading"
                className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight mb-6"
              >
                Connecting Talent. Delivering Technology.
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  SSV Technologies Pvt. Ltd. is a full-service IT services and staffing company
                  headquartered in Hyderabad, India, with operations in the United States. Since
                  our founding in 2016, we have been dedicated to bridging the gap between
                  exceptional talent and the organisations that need them most.
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Our Mission</h3>
                  <p>
                    To empower careers and accelerate business growth by delivering world-class
                    IT staffing, digital marketing, and technology services — powered by human
                    expertise and Agentic AI.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Our Vision</h3>
                  <p>
                    To be the most trusted technology services partner for companies and
                    candidates across India and the United States — known for integrity,
                    innovation, and measurable outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    Dual-Location Advantage
                  </h3>
                  <p>
                    With teams in Hyderabad and the US, we offer round-the-clock support and
                    deep market knowledge on both sides of the globe — giving our clients and
                    candidates a genuine competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: decorative element */}
          <AnimatedSection direction="right">
            <div className="relative">
              {/* Gradient card with stats */}
              <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-blue-600 p-8 md:p-10 text-white shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-6">
                  By the Numbers
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '500+', label: 'Successful Placements' },
                    { value: '50+', label: 'Clients Served' },
                    { value: '8+', label: 'Years of Experience' },
                    { value: '98%', label: 'Satisfaction Rate' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl md:text-4xl font-bold text-gold-400">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-navy-700">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" aria-hidden="true" />
                    <p className="text-sm text-slate-300">
                      Offices in <span className="text-white font-medium">Hyderabad, India</span>{' '}
                      &amp; <span className="text-white font-medium">United States</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative blobs */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gold-500/20 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-blue-600/20 blur-2xl"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
