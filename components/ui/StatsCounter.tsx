'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useReducedMotion, animate } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
  className?: string
}

export function StatsCounter({
  value,
  suffix = '',
  label,
  duration = 2000,
  className,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  // Display ref for the number element
  const displayRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      if (displayRef.current) {
        displayRef.current.textContent = String(value)
      }
      return
    }

    const controls = animate(motionValue, value, {
      duration: duration / 1000,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (displayRef.current) {
          displayRef.current.textContent = String(Math.round(latest))
        }
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration, motionValue, shouldReduceMotion])

  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center text-center', className)}
    >
      <div className="text-4xl md:text-5xl font-bold text-white leading-none">
        <span ref={displayRef} aria-live="polite">
          {shouldReduceMotion ? value : 0}
        </span>
        <span aria-hidden="true">{suffix}</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-blue-200 font-medium">{label}</p>
    </div>
  )
}
