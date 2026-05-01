import { GraduationCap, Users, MapPin, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
          <CheckCircle
            className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CareersOpportunities() {
  return (
    <>
      {/* OPT Consultant Opportunities */}
      <section
        className="bg-white py-20 md:py-24"
        id="opt-opportunities"
        aria-labelledby="opt-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-navy-900 flex-shrink-0">
                <GraduationCap className="w-6 h-6" aria-hidden="true" />
              </div>
              <SectionHeading
                title="OPT Consultant Opportunities"
                align="left"
                showAccent={false}
                className="mb-0"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Are you an international student on Optional Practical Training (OPT) looking to
                  launch your technology career in the United States? SSV Technologies specialises
                  in helping OPT consultants navigate the competitive US job market with
                  personalised, end-to-end job marketing support.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our experienced team handles every aspect of your job search — from crafting an
                  ATS-optimised resume and building a compelling LinkedIn profile to identifying
                  the right opportunities, submitting targeted applications, and preparing you for
                  technical and behavioural interviews.
                </p>
                <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-2">Eligibility</h3>
                <BulletList
                  items={[
                    'International students currently on OPT (F-1 visa)',
                    'STEM OPT extension holders (up to 3 years)',
                    'Recent graduates from accredited US universities',
                    'Technology, engineering, and business graduates',
                  ]}
                />
              </div>
              <div className="space-y-6">
                <div className="rounded-card border border-slate-200 shadow-card p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-1">Standard Plan</h3>
                  <p className="text-sm text-slate-500 mb-3">Core job marketing essentials</p>
                  <BulletList
                    items={[
                      'Job marketing and targeted application submissions',
                      'ATS-optimised resume review and feedback',
                      'Application tracking and status updates',
                      'Job alerts for matching opportunities',
                      'Basic interview preparation guidance',
                    ]}
                  />
                </div>
                <div className="rounded-card border-2 border-gold-500 shadow-card-hover p-6 relative">
                  <span className="absolute -top-3 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-500 text-navy-900 uppercase tracking-wide">
                    Recommended
                  </span>
                  <h3 className="text-lg font-semibold text-navy-900 mb-1">Premium Plan</h3>
                  <p className="text-sm text-slate-500 mb-3">Complete end-to-end career support</p>
                  <BulletList
                    items={[
                      'Everything in Standard Plan',
                      'Comprehensive training support and skill development',
                      'Career mentorship from industry professionals',
                      'Advanced interview coaching with mock sessions',
                      'Dedicated account manager for personalised support',
                      'End-to-end placement support until you land your role',
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* US Placement */}
      <section
        className="bg-slate-50 py-20 md:py-24"
        id="us-placement"
        aria-labelledby="us-placement-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white flex-shrink-0">
                <Users className="w-6 h-6" aria-hidden="true" />
              </div>
              <SectionHeading
                id="us-placement-heading"
                title="US Placement Services"
                align="left"
                showAccent={false}
                className="mb-0"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  For US Citizens, H1B visa holders, and Green Card holders, SSV Technologies
                  provides direct placement services connecting you with top technology employers
                  across the United States. We leverage a robust network of direct employer
                  relationships and staffing partnerships to match qualified candidates with roles
                  that align with their expertise and compensation expectations.
                </p>
                <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-2">Who Can Apply</h3>
                <BulletList
                  items={[
                    'US Citizens seeking technology roles',
                    'H1B visa holders looking for new opportunities',
                    'Green Card holders across all technology disciplines',
                    'Professionals with 1–20+ years of experience',
                  ]}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">What We Offer</h3>
                <BulletList
                  items={[
                    'Access to exclusive job openings not listed on public boards',
                    'Direct employer relationships across Fortune 500 companies',
                    'Skills assessment and gap analysis',
                    'Interview scheduling and preparation support',
                    'Salary benchmarking and offer negotiation guidance',
                    'Ongoing career support post-placement',
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* India Placement */}
      <section
        className="bg-white py-20 md:py-24"
        id="india-placement"
        aria-labelledby="india-placement-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-700 text-white flex-shrink-0">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <SectionHeading
                id="india-placement-heading"
                title="India Placement Services"
                align="left"
                showAccent={false}
                className="mb-0"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  SSV Technologies bridges the gap between talented IT professionals and India&apos;s
                  rapidly growing technology sector. Whether you are a fresh graduate, an
                  experienced engineer, or a senior technology leader, our team works closely with
                  top IT companies, product firms, and GCCs across India to identify roles that
                  match your skills and ambitions.
                </p>
                <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-2">Who Can Apply</h3>
                <BulletList
                  items={[
                    'IT professionals based in India at any experience level',
                    'Fresh graduates from engineering and technology programmes',
                    'Experienced engineers seeking senior or leadership roles',
                    'Professionals targeting GCC opportunities in India',
                  ]}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Our Process</h3>
                <BulletList
                  items={[
                    'Personalised career counselling and profile preparation',
                    'Partnerships with leading IT companies and GCCs across India',
                    'Interview coaching tailored to Indian IT hiring processes',
                    'Transparent communication and regular status updates',
                    'Offer facilitation and compensation guidance',
                    'Post-placement support and career guidance',
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
