import { Linkedin, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LeaderCardProps {
  name: string
  title: string
  bio?: string
  photoUrl?: string
  linkedinUrl?: string
  className?: string
}

export function LeaderCard({
  name,
  title,
  bio,
  photoUrl,
  linkedinUrl,
  className,
}: LeaderCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col bg-white rounded-card shadow-card border border-slate-200 overflow-hidden',
        className,
      )}
    >
      {/* Photo / Placeholder */}
      <div className="relative w-full aspect-[4/3] bg-navy-800 flex items-center justify-center overflow-hidden">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={`Photo of ${name}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-navy-600">
            <User className="w-16 h-16 text-navy-600" aria-hidden="true" />
            <span className="text-xs text-navy-600 font-medium sr-only">
              Photo of {name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
        <p className="text-sm font-medium text-blue-600 mt-0.5">{title}</p>

        {bio && (
          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-4">{bio}</p>
        )}

        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  )
}
