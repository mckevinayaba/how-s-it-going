import type { ComponentType, SVGProps } from 'react'
import type { SupportOption } from '@/types'
import { Link } from 'react-router-dom'
import { CalendarCheckIcon, FirstAidIcon, TruckIcon } from '@/components/icons'

const ICON_BY_SLUG: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  'sponsor-a-screening-day': CalendarCheckIcon,
  'first-aid-kits-and-supplies': FirstAidIcon,
  'transport-and-logistics': TruckIcon,
}

export function SupportCard({ option }: { option: SupportOption }) {
  const Icon = ICON_BY_SLUG[option.slug] ?? CalendarCheckIcon

  return (
    <div
      id={option.slug}
      className="group scroll-mt-24 flex flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-charcoal">{option.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {option.description}
      </p>
      <Link
        to={`/support#${option.slug}`}
        className="mt-4 text-sm font-medium text-green-700 transition-colors hover:text-green-800"
      >
        Learn more &rarr;
      </Link>
    </div>
  )
}
