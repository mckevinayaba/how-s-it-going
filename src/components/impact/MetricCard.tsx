import type { ImpactMetric } from '@/types'
import { ShieldIcon } from '@/components/icons'

export function MetricCard({ metric }: { metric: ImpactMetric }) {
  return (
    <div className="group rounded-xl2 border border-white/15 bg-white/[0.07] p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:bg-white/[0.12]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-green-200">
        <ShieldIcon className="h-4 w-4" strokeWidth={1.8} />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-green-200">
        {metric.location}
      </p>
      <p className="mt-2 font-serif text-4xl text-white">{metric.stat}</p>
      <h3 className="mt-3 text-sm font-semibold text-white">{metric.headline}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{metric.detail}</p>
    </div>
  )
}
