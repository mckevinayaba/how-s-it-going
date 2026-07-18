import { DELIVERY_TRUST_STEPS } from '@/lib/delivery'

export function DeliveryTrustStrip({ className = '' }: { className?: string }) {
  return (
    <section className={`border-y border-line bg-oat py-4 ${className}`}>
      <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm font-medium text-charcoal">
        {DELIVERY_TRUST_STEPS.map((step, index) => (
          <span key={step} className="flex items-center gap-3">
            {index > 0 && <span className="text-green-600">&rarr;</span>}
            {step}
          </span>
        ))}
      </div>
    </section>
  )
}
