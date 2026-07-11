import type { ComponentType, SVGProps } from 'react'
import type { ImpactPillar, PillarIcon } from '@/data/impact'
import { MegaphoneIcon, CalendarCheckIcon, FirstAidIcon, UsersIcon } from '@/components/icons'

const ICON_BY_KEY: Record<PillarIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  awareness: MegaphoneIcon,
  screening: CalendarCheckIcon,
  supplies: FirstAidIcon,
  capacity: UsersIcon,
}

export function PillarCard({ pillar }: { pillar: ImpactPillar }) {
  const Icon = ICON_BY_KEY[pillar.icon]
  return (
    <div className="group rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-charcoal">{pillar.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
    </div>
  )
}
