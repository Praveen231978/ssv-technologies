'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, X, Loader2 } from 'lucide-react'
import { contactFormSchema, ContactFormData, SERVICE_IDS } from '@/lib/validations'

const SERVICE_LABELS: Record<(typeof SERVICE_IDS)[number], string> = {
  'job-marketing': 'Job Marketing Services',
  'placement-services': 'Placement Services',
  'domestic-placement': 'Domestic Placement Services',
  'digital-marketing': 'Digital Marketing Services',
  'software-services': 'Custom Software Development',
  'cloud-modernization': 'Cloud Modernization Services',
  'enterprise-consulting': 'Enterprise Architectural Consulting',
  'gcc-services': 'GCC Services',
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  // Pre-populate service from URL param
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam && SERVICE_IDS.includes(serviceParam as (typeof SERVICE_IDS)[number])) {
      setValue('service', serviceParam as (typeof SERVICE_IDS)[number])
    }
  }, [searchParams, setValue])

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitSuccess(true)
      } else {
        const json = await res.json().catch(() => ({}))
        setSubmitError(
          json?.error ?? 'Something went wrong. Please try again.',
        )
      }
    } catch {
      setSubmitError(
        'Network error. Please try again or contact us directly.',
      )
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank you!</h3>
        <p className="text-slate-600 text-lg">We&apos;ll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="space-y-6"
    >
      {/* Error banner */}
      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
        >
          <span className="flex-1 text-sm">
            {submitError} Please try again or contact us directly at{' '}
            <a
              href="mailto:ambika.v@ssv-tech.com"
              className="underline font-medium"
            >
              ambika.v@ssv-tech.com
            </a>{' '}
            or{' '}
            <a href="tel:+919100828982" className="underline font-medium">
              +91 91008 28982
            </a>
            .
          </span>
          <button
            type="button"
            onClick={() => setSubmitError(null)}
            aria-label="Dismiss error"
            className="flex-shrink-0 text-red-600 hover:text-red-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          {...register('fullName')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
          placeholder="Jane Smith"
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Phone Number{' '}
          <span className="text-slate-400 font-normal text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Company (optional) */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Company{' '}
          <span className="text-slate-400 font-normal text-xs">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          {...register('company')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
          placeholder="Acme Corp"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Service of Interest <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          aria-required="true"
          aria-describedby={errors.service ? 'service-error' : undefined}
          {...register('service')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICE_IDS.map((id) => (
            <option key={id} value={id}>
              {SERVICE_LABELS[id]}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-none"
          placeholder="Tell us about your project or how we can help…"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gold-500 text-navy-900 font-semibold text-base hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
