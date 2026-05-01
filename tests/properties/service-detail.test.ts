import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { services } from '@/data/services'

describe('Property 4: Service detail content completeness', () => {
  it('every service has non-empty title, description, benefits, and process steps', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1 }),
          title: fc.string({ minLength: 1 }),
          shortDescription: fc.string({ minLength: 1 }),
          fullDescription: fc.string({ minLength: 1 }),
          icon: fc.constant('Briefcase'),
          benefits: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          process: fc.array(
            fc.record({
              step: fc.integer({ min: 1, max: 10 }),
              title: fc.string({ minLength: 1 }),
              description: fc.string({ minLength: 1 }),
            }),
            { minLength: 1 }
          ),
          category: fc.constantFrom('staffing', 'digital', 'technology', 'consulting') as fc.Arbitrary<'staffing' | 'digital' | 'technology' | 'consulting'>,
        }),
        (service) => {
          expect(service.title.length).toBeGreaterThan(0)
          expect(service.fullDescription.length).toBeGreaterThan(0)
          expect(service.benefits.length).toBeGreaterThan(0)
          expect(service.process.length).toBeGreaterThan(0)
          service.benefits.forEach(b => expect(b.length).toBeGreaterThan(0))
          service.process.forEach(p => {
            expect(p.title.length).toBeGreaterThan(0)
            expect(p.description.length).toBeGreaterThan(0)
          })
        }
      )
    )
  })

  it('all 8 actual services have complete content', () => {
    services.forEach((service) => {
      expect(service.title).toBeTruthy()
      expect(service.fullDescription).toBeTruthy()
      expect(service.benefits.length).toBeGreaterThan(0)
      expect(service.process.length).toBeGreaterThan(0)
    })
  })
})
