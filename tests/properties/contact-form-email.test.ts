import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { contactFormSchema } from '@/lib/validations'

const validBase = {
  fullName: 'Jane Smith',
  service: 'job-marketing' as const,
  message: 'This is a test message that is long enough.',
}

describe('Property 9: Email validation', () => {
  it('rejects strings without @ symbol', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter(s => !s.includes('@') && s.length > 0),
        (invalidEmail) => {
          const result = contactFormSchema.safeParse({ ...validBase, email: invalidEmail })
          expect(result.success).toBe(false)
          if (!result.success) {
            const emailErrors = result.error.flatten().fieldErrors.email
            expect(emailErrors).toBeDefined()
            expect(emailErrors!.length).toBeGreaterThan(0)
          }
        }
      )
    )
  })

  it('accepts valid email addresses', () => {
    // Generate emails using only alphanumeric local parts and domains to avoid
    // edge cases (consecutive dots, special chars) that Zod's validator rejects.
    const alphaNum = fc.stringMatching(/^[a-z][a-z0-9]{2,15}$/)
    const tld = fc.constantFrom('com', 'org', 'net', 'io', 'co', 'dev')

    fc.assert(
      fc.property(
        fc.tuple(alphaNum, alphaNum, tld),
        ([local, domain, ext]) => {
          const validEmail = `${local}@${domain}.${ext}`
          const result = contactFormSchema.safeParse({ ...validBase, email: validEmail })
          expect(result.success).toBe(true)
        }
      )
    )
  })
})
