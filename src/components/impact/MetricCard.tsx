import type { ImpactMetric } from '@/types'

export function MetricCard({ metric }: { metric: ImpactMetric }) {
  return (
    <div className="rounded-xl2 border border-white/15 bg-white/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-green-200">
        {metric.location}
      </p>
      <p className="mt-3 font-serif text-3xl text-white">{metric.stat}</p>
      <h3 className="mt-3 text-sm font-semibold text-white">{metric.headline}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{metric.detail}</p>
    </div>
  )
}
