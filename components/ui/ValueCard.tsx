import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface ValueCardProps {
  icon: string
  title: string
  description: string
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

export function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start p-6 bg-white rounded-card shadow-card border border-slate-200',
        className,
      )}
    >
      {/* Icon in gold circle */}
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-navy-900 flex-shrink-0">
        <DynamicIcon name={icon} className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
