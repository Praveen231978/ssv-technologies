'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface IndustryCardProps {
  title: string
  description: string
  icon: string
  expandedDescription?: string
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

export function IndustryCard({
  title,
  description,
  icon,
  expandedDescription,
  className,
}: IndustryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasExpanded = Boolean(expandedDescription)

  return (
    <div
      className={cn(
        'bg-white rounded-card shadow-card border border-slate-200 overflow-hidden transition-shadow duration-300',
        isExpanded && 'shadow-card-hover',
        className,
      )}
    >
      <div className="p-6">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 text-gold-500">
          <DynamicIcon name={icon} className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

        {/* Expand button */}
        {hasExpanded && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-200"
            aria-expanded={isExpanded}
            aria-controls={`industry-expanded-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {isExpanded ? 'Show less' : 'Learn more'}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isExpanded && expandedDescription && (
          <motion.div
            id={`industry-expanded-${title.replace(/\s+/g, '-').toLowerCase()}`}
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-slate-100 pt-4">
              <p className="text-sm text-slate-600 leading-relaxed">{expandedDescription}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
