import { cn } from '@/lib/utils'

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLeft?: boolean
  className?: string
}

export function TimelineItem({
  year,
  title,
  description,
  isLeft = true,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0',
        className,
      )}
    >
      {/* Mobile layout: single column with left border */}
      <div className="flex md:hidden items-start gap-4 w-full">
        {/* Year badge */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shadow-md">
            <span className="text-navy-900 text-xs font-bold text-center leading-tight">
              {year}
            </span>
          </div>
          {/* Vertical connector line (not on last item — handled by parent) */}
          <div className="w-0.5 flex-1 bg-navy-700 mt-2 min-h-[2rem]" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Desktop layout: alternating left/right */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6 w-full">
        {/* Left content */}
        <div
          className={cn(
            'py-4',
            isLeft ? 'text-right pr-6' : 'text-left pl-6 col-start-3',
          )}
        >
          {isLeft && (
            <>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed">{description}</p>
            </>
          )}
        </div>

        {/* Centre: year badge + vertical line */}
        <div className="flex flex-col items-center col-start-2">
          <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center shadow-md flex-shrink-0 z-10">
            <span className="text-navy-900 text-sm font-bold">{year}</span>
          </div>
          <div className="w-0.5 flex-1 bg-navy-700 mt-2 min-h-[3rem]" aria-hidden="true" />
        </div>

        {/* Right content */}
        <div
          className={cn(
            'py-4',
            !isLeft ? 'text-left pl-6 col-start-3' : 'col-start-3',
          )}
        >
          {!isLeft && (
            <>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed">{description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
