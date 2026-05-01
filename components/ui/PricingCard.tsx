import Link from 'next/link'
import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  planName: string
  tagline?: string
  price?: string
  billingPeriod?: string
  features: string[]
  isRecommended?: boolean
  ctaLabel: string
  ctaHref: string
  className?: string
}

export function PricingCard({
  planName,
  tagline,
  price,
  billingPeriod,
  features,
  isRecommended = false,
  ctaLabel,
  ctaHref,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-card p-6 md:p-8 transition-shadow duration-300',
        isRecommended
          ? 'border-2 border-gold-500 shadow-card-hover bg-white'
          : 'border border-slate-200 shadow-card bg-white',
        className,
      )}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge label="Recommended" variant="gold" />
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-xl font-bold text-navy-900 mt-2">{planName}</h3>

      {/* Tagline */}
      {tagline && (
        <p className="mt-1 text-sm text-slate-500 leading-snug">{tagline}</p>
      )}

      {/* Price */}
      {price && (
        <div className="mt-4">
          <span className="text-3xl font-bold text-navy-900">{price}</span>
          {billingPeriod && (
            <span className="ml-1 text-sm text-slate-500">{billingPeriod}</span>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="my-6 border-t border-slate-100" />

      {/* Features list */}
      <ul className="flex-1 space-y-3" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500"
              aria-hidden="true"
            />
            <span className="text-sm text-slate-700 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link
        href={ctaHref}
        className={cn(
          'mt-8 block w-full text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200',
          isRecommended
            ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
            : 'bg-navy-900 text-white hover:bg-navy-800',
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}
