import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { EmbeddedMap } from '@/components/sections/EmbeddedMap'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with SSV Technologies. Reach our team in Hyderabad or the United States for IT services, staffing, and placement enquiries.',
  path: '/contact',
  ogImage: '/og/contact.png',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and our team will respond promptly."
      />

      {/* Two-column contact section */}
      <section
        className="bg-white py-20 md:py-24"
        aria-labelledby="contact-section-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-section-heading" className="sr-only">
            Contact Section
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Send Us a Message</h2>
              <div className="h-1 w-12 rounded-full bg-gold-500 mb-8" aria-hidden="true" />
              <Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 rounded-lg" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Get In Touch</h2>
              <div className="h-1 w-12 rounded-full bg-gold-500 mb-8" aria-hidden="true" />
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <EmbeddedMap />
    </>
  )
}
