import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { jobMarketingPricingPlans } from '@/data/services'

describe('Property 5: Pricing card recommended badge logic', () => {
  it('isRecommended=true means the plan is marked as recommended', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.constantFrom('standard', 'premium') as fc.Arbitrary<'standard' | 'premium'>,
          name: fc.string({ minLength: 1 }),
          tagline: fc.string({ minLength: 1 }),
          features: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          isRecommended: fc.boolean(),
          ctaLabel: fc.string({ minLength: 1 }),
          ctaHref: fc.constant('/contact'),
        }),
        (plan) => {
          if (plan.isRecommended) {
            expect(plan.isRecommended).toBe(true)
          } else {
            expect(plan.isRecommended).toBe(false)
          }
        }
      )
    )
  })

  it('the actual pricing plans have exactly one recommended plan (Premium)', () => {
    const recommendedPlans = jobMarketingPricingPlans.filter(p => p.isRecommended)
    const standardPlans = jobMarketingPricingPlans.filter(p => !p.isRecommended)

    expect(recommendedPlans).toHaveLength(1)
    expect(recommendedPlans[0].id).toBe('premium')
    expect(standardPlans).toHaveLength(1)
    expect(standardPlans[0].id).toBe('standard')
  })

  it('premium plan has more features than standard plan', () => {
    const premium = jobMarketingPricingPlans.find(p => p.id === 'premium')!
    const standard = jobMarketingPricingPlans.find(p => p.id === 'standard')!

    expect(premium.features.length).toBeGreaterThan(standard.features.length)
  })
})
