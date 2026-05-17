'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, X, Loader2 } from 'lucide-react'
import { applicationFormSchema, ApplicationFormData } from '@/lib/validations'

const VISA_STATUS_LABELS: Record<ApplicationFormData['visaStatus'], string> = {
  opt: 'OPT',
  h1b: 'H1B',
  'green-card': 'Green Card',
  'us-citizen': 'US Citizen',
  'india-based': 'India Based',
}

export function ApplicationForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
  })

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitError(null)
    try {
      const formData = new FormData()
      formData.append('fullName', data.fullName)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('location', data.location)
      formData.append('visaStatus', data.visaStatus)
      formData.append('yearsExperience', String(data.yearsExperience))
      formData.append('techStack', data.techStack)
      formData.append('resume', data.resume)

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setSubmitSuccess(true)
      } else {
        const json = await res.json().catch(() => ({}))
        setSubmitError(json?.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please try again or contact us directly.')
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Application Received!</h3>
        <p className="text-slate-600 text-lg">
          Thank you! Our team will respond within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Job application form"
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
            <a href="tel:+919989478181" className="underline font-medium">
              +91 9989478181
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

      {/* Two-column grid for name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="app-fullName"
            className="block text-sm font-semibold text-navy-900 mb-1"
          >
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="app-fullName"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.fullName ? 'app-fullName-error' : undefined}
            {...register('fullName')}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
            placeholder="Jane Smith"
          />
          {errors.fullName && (
            <p id="app-fullName-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="app-email"
            className="block text-sm font-semibold text-navy-900 mb-1"
          >
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="app-email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? 'app-email-error' : undefined}
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p id="app-email-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="app-phone"
            className="block text-sm font-semibold text-navy-900 mb-1"
          >
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="app-phone"
            type="tel"
            autoComplete="tel"
            aria-required="true"
            aria-describedby={errors.phone ? 'app-phone-error' : undefined}
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <p id="app-phone-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="app-location"
            className="block text-sm font-semibold text-navy-900 mb-1"
          >
            Current Location <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="app-location"
            type="text"
            autoComplete="address-level2"
            aria-required="true"
            aria-describedby={errors.location ? 'app-location-error' : undefined}
            {...register('location')}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
            placeholder="New York, NY"
          />
          {errors.location && (
            <p id="app-location-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.location.message}
            </p>
          )}
        </div>
      </div>

      {/* Visa Status + Years Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="app-visaStatus"
            className="block text-sm font-semibold text-navy-900 mb-1"
          >
            Visa / Work Status <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="app-visaStatus"
            aria-required="true"
            aria-describedby={errors.visaStatus ? 'app-visaStatus-error' : undefined}
            {...register('visaStatus')}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
            defaultValue=""
          >
            <option value="" disabled>
              Select status…
            </option>
            {(Object.keys(VISA_STATUS_LABELS) as ApplicationFormData['visaStatus'][]).map(
              (key) => (
                <option key={key} value={key}>
                  {VISA_STATUS_LABELS[key]}
                </option>
              ),
            )}
          </select>
          {errors.visaStatus && (
            <p id="app-visaStatus-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.visaStatus.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="app-yearsExperience"
            className="block text-sm font-semibold text-navy-900 mb-1"
          >
            Years of Experience <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="app-yearsExperience"
            type="number"
            min={0}
            max={50}
            aria-required="true"
            aria-describedby={errors.yearsExperience ? 'app-yearsExperience-error' : undefined}
            {...register('yearsExperience', { valueAsNumber: true })}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
            placeholder="3"
          />
          {errors.yearsExperience && (
            <p id="app-yearsExperience-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.yearsExperience.message}
            </p>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <label
          htmlFor="app-techStack"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Primary Tech Stack <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="app-techStack"
          type="text"
          aria-required="true"
          aria-describedby={errors.techStack ? 'app-techStack-error' : undefined}
          {...register('techStack')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
          placeholder="React, Node.js, AWS, TypeScript"
        />
        {errors.techStack && (
          <p id="app-techStack-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.techStack.message}
          </p>
        )}
      </div>

      {/* Resume Upload */}
      <div>
        <label
          htmlFor="app-resume"
          className="block text-sm font-semibold text-navy-900 mb-1"
        >
          Resume <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="app-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          aria-required="true"
          aria-describedby={errors.resume ? 'app-resume-error' : 'app-resume-hint'}
          {...register('resume')}
          className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 file:cursor-pointer cursor-pointer border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <p id="app-resume-hint" className="mt-1 text-xs text-slate-500">
          Accepted formats: PDF, DOC, DOCX. Maximum size: 5 MB.
        </p>
        {errors.resume && (
          <p id="app-resume-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.resume.message as string}
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
            Submitting…
          </>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  )
}
