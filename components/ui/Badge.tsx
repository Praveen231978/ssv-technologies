import { cn } from '@/lib/utils'

interface BadgeProps {
  label: string
  variant?: 'gold' | 'blue' | 'navy'
  className?: string
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  gold:  'bg-gold-500 text-navy-900',
  blue:  'bg-blue-600 text-white',
  navy:  'bg-navy-700 text-white',
}

export function Badge({ label, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variantClasses[variant],
        className,
      )}
    >
      {label}
    </span>
  )
}
