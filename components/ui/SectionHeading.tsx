import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  showAccent?: boolean
  id?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  showAccent = true,
  id,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={cn('mb-12', isCenter ? 'text-center' : 'text-left', className)}>
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-current leading-tight">
        {title}
      </h2>

      {showAccent && (
        <div
          className={cn(
            'mt-4 h-1 w-16 rounded-full bg-gold-500',
            isCenter ? 'mx-auto' : 'ml-0',
          )}
          aria-hidden="true"
        />
      )}

      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed opacity-80 max-w-2xl',
            isCenter ? 'mx-auto' : '',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
