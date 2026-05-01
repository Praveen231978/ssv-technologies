'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  accentColor?: string
  className?: string
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }> | undefined>)[name] as React.ComponentType<{ className?: string }> | undefined
  if (!IconComponent) {
    const Fallback = LucideIcons.Layers
    return <Fallback className={className} />
  }
  return <IconComponent className={className} />
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  accentColor = 'bg-gold-500',
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'group relative flex flex-col bg-white rounded-card shadow-card hover:shadow-card-hover',
        'border border-slate-200 overflow-hidden transition-shadow duration-300',
        className,
      )}
    >
      {/* Gold accent border-top on hover */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100',
          accentColor,
        )}
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 text-gold-500">
          <DynamicIcon name={icon} className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>

        {/* Learn More link */}
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-200 group/link"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
