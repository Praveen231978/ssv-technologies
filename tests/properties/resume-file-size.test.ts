import { describe, it, expect } from 'vitest'
import { applicationFormSchema } from '@/lib/validations'

const validBase = {
  fullName: 'Jane Smith',
  email: 'jane@example.com',
  phone: '+1234567890',
  location: 'New York, NY',
  visaStatus: 'opt' as const,
  yearsExperience: 3,
  techStack: 'React, TypeScript',
}

function makeFile(sizeBytes: number): File {
  const buffer = new ArrayBuffer(sizeBytes)
  return new File([buffer], 'resume.pdf', { type: 'application/pdf' })
}

describe('Property 11: Resume file size validation', () => {
  it('rejects files larger than 5 MB', () => {
    const oversizedFile = makeFile(5_000_001)
    const result = applicationFormSchema.safeParse({ ...validBase, resume: oversizedFile })
    expect(result.success).toBe(false)
    if (!result.success) {
      const resumeErrors = result.error.flatten().fieldErrors.resume
      expect(resumeErrors).toBeDefined()
      expect(resumeErrors!.length).toBeGreaterThan(0)
    }
  })

  it('accepts files of exactly 5 MB', () => {
    const exactFile = makeFile(5_000_000)
    const result = applicationFormSchema.safeParse({ ...validBase, resume: exactFile })
    if (!result.success) {
      const resumeErrors = result.error.flatten().fieldErrors.resume
      const hasSizeError = resumeErrors?.some(e => e.includes('5 MB') || e.includes('5MB'))
      expect(hasSizeError).toBeFalsy()
    }
  })

  it('accepts files smaller than 5 MB', () => {
    const smallFile = makeFile(1_000_000)
    const result = applicationFormSchema.safeParse({ ...validBase, resume: smallFile })
    if (!result.success) {
      const resumeErrors = result.error.flatten().fieldErrors.resume
      const hasSizeError = resumeErrors?.some(e => e.includes('5 MB') || e.includes('5MB'))
      expect(hasSizeError).toBeFalsy()
    }
  })
})
