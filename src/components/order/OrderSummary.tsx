import type { CartLineItem } from '@/types'
import { formatPrice } from '@/lib/format'

interface OrderSummaryProps {
  items: CartLineItem[]
  subtotalFcfa: number
  supportAddOnFcfa?: number
  totalFcfa: number
}

export function OrderSummary({ items, subtotalFcfa, supportAddOnFcfa = 0, totalFcfa }: OrderSummaryProps) {
  return (
    <div className="rounded-xl2 bg-oat p-6">
      <h2 className="font-serif text-lg text-charcoal">Your order</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={`${item.kind}-${item.slug}-${item.variantLabel ?? ''}`}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <div>
              <p className="font-medium text-charcoal">
                {item.name}
                <span className="text-muted"> &times; {item.quantity}</span>
              </p>
              {item.variantLabel && <p className="text-xs text-muted">{item.variantLabel}</p>}
              <p className="text-xs text-muted">Unit price: {formatPrice(item.priceFcfa)}</p>
            </div>
            <span className="shrink-0 font-serif text-green-700">
              {formatPrice(item.priceFcfa * item.quantity)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-charcoal">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotalFcfa)}</span>
        </div>
        {supportAddOnFcfa > 0 && (
          <div className="flex justify-between text-green-700">
            <span>Outreach contribution</span>
            <span>{formatPrice(supportAddOnFcfa)}</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex justify-between border-t border-line pt-4 font-serif text-lg text-charcoal">
        <span>Order total</span>
        <span>{formatPrice(totalFcfa)}</span>
      </div>
    </div>
  )
}
