import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'

// The animation variants logic extracted for testing
const variants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
}

const reducedMotionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

function getActiveVariants(direction: keyof typeof variants, shouldReduceMotion: boolean) {
  return shouldReduceMotion ? reducedMotionVariants : variants[direction]
}

describe('Property 8: Reduced-motion animation variants', () => {
  it('when reduced motion is true, no x or y transforms are applied for any direction', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('up', 'left', 'right', 'fade') as fc.Arbitrary<keyof typeof variants>,
        (direction) => {
          const activeVariants = getActiveVariants(direction, true)

          // No x or y values in hidden or visible states
          expect('x' in activeVariants.hidden).toBe(false)
          expect('y' in activeVariants.hidden).toBe(false)
          expect('x' in activeVariants.visible).toBe(false)
          expect('y' in activeVariants.visible).toBe(false)

          // Only opacity transitions
          expect('opacity' in activeVariants.hidden).toBe(true)
          expect('opacity' in activeVariants.visible).toBe(true)
        }
      )
    )
  })

  it('when reduced motion is false, directional variants have x or y transforms', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('up', 'left', 'right') as fc.Arbitrary<'up' | 'left' | 'right'>,
        (direction) => {
          const activeVariants = getActiveVariants(direction, false)
          const hasTransform = 'x' in activeVariants.hidden || 'y' in activeVariants.hidden
          expect(hasTransform).toBe(true)
        }
      )
    )
  })
})
