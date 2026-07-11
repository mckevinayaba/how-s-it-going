import type { ComponentType, SVGProps } from 'react'
import type { FieldInsight, InsightIcon } from '@/data/impact'
import { TruckIcon, BoxIcon, UsersIcon, RepeatIcon } from '@/components/icons'

const ICON_BY_KEY: Record<InsightIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  transport: TruckIcon,
  materials: BoxIcon,
  people: UsersIcon,
  followup: RepeatIcon,
}

export function InsightCard({ insight }: { insight: FieldInsight }) {
  const Icon = ICON_BY_KEY[insight.icon]
  return (
    <div className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-oat text-green-700">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-charcoal">{insight.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{insight.description}</p>
    </div>
  )
}
