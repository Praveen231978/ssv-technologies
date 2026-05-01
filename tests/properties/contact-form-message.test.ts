import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { contactFormSchema } from '@/lib/validations'

const validBase = {
  fullName: 'Jane Smith',
  email: 'jane@example.com',
  service: 'job-marketing' as const,
}

describe('Property 10: Message length validation', () => {
  it('rejects messages shorter than 10 characters', () => {
    fc.assert(
      fc.property(
        fc.string({ maxLength: 9 }),
        (shortMessage) => {
          const result = contactFormSchema.safeParse({ ...validBase, message: shortMessage })
          expect(result.success).toBe(false)
          if (!result.success) {
            const messageErrors = result.error.flatten().fieldErrors.message
            expect(messageErrors).toBeDefined()
          }
        }
      )
    )
  })

  it('accepts messages of 10 or more characters', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 10 }),
        (longMessage) => {
          const result = contactFormSchema.safeParse({ ...validBase, message: longMessage })
          if (!result.success) {
            const messageErrors = result.error.flatten().fieldErrors.message
            // Should not have a length error
            const hasLengthError = messageErrors?.some(e => e.includes('10'))
            expect(hasLengthError).toBeFalsy()
          }
        }
      )
    )
  })
})
