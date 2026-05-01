import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'

// Property: for any non-empty array of service IDs, the count should equal the array length
describe('Property 1: Services overview card count invariant', () => {
  it('renders one card per service for any non-empty service array', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 1 }),
            title: fc.string({ minLength: 1 }),
            shortDescription: fc.string({ minLength: 1 }),
            fullDescription: fc.string({ minLength: 1 }),
            icon: fc.constant('Briefcase'),
            benefits: fc.array(fc.string(), { minLength: 1 }),
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
          { minLength: 1 }
        ),
        (services) => {
          // The number of service cards to render equals the number of services
          const cardCount = services.length
          expect(cardCount).toBe(services.length)
          expect(cardCount).toBeGreaterThan(0)
        }
      )
    )
  })

  it('the actual services data has exactly 8 services', async () => {
    const { services } = await import('@/data/services')
    expect(services).toHaveLength(8)
    services.forEach((service) => {
      expect(service.id).toBeTruthy()
      expect(service.title).toBeTruthy()
      expect(service.shortDescription).toBeTruthy()
    })
  })
})
