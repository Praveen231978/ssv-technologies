import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
  avatarUrl?: string
  rating?: 1 | 2 | 3 | 4 | 5
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col bg-white rounded-card shadow-card border border-slate-200 p-6 h-full',
        className,
      )}
    >
      {/* Star rating */}
      <div className="flex items-center gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < rating ? 'fill-gold-500 text-gold-500' : 'fill-slate-200 text-slate-200',
            )}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Opening quote mark */}
      <div
        className="text-6xl leading-none text-gold-500 font-serif mb-2 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <blockquote className="flex-1 text-sm text-slate-700 leading-relaxed italic mb-6">
        {quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={`Photo of ${author}`}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-white text-sm font-semibold">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-navy-900">{author}</p>
          <p className="text-xs text-slate-500">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  )
}
