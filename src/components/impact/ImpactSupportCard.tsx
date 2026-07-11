import type { ComponentType, SVGProps } from 'react'
import type { ImpactSupportOption, SupportIcon } from '@/data/impact'
import { CalendarCheckIcon, FirstAidIcon, TruckIcon, HandshakeIcon } from '@/components/icons'
import { Button } from '@/components/ui/Button'

const ICON_BY_KEY: Record<SupportIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  screening: CalendarCheckIcon,
  supplies: FirstAidIcon,
  transport: TruckIcon,
  partner: HandshakeIcon,
}

export function ImpactSupportCard({ option }: { option: ImpactSupportOption }) {
  const Icon = ICON_BY_KEY[option.icon]
  const isPartner = option.icon === 'partner'

  return (
    <div className="flex flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full ${
          isPartner ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-charcoal">{option.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{option.description}</p>
      <Button
        to={isPartner ? '/contact' : `/support#${option.slug}`}
        variant={isPartner ? 'secondary' : 'outline'}
        size="md"
        className="mt-5 w-full"
      >
        {option.ctaLabel}
      </Button>
    </div>
  )
}
