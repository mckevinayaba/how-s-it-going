import type { CartLineItem } from '@/types'
import { formatPrice } from '@/lib/format'

export function OrderSummary({ items, totalCents }: { items: CartLineItem[]; totalCents: number }) {
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
              <p className="text-xs text-muted">Unit price: {formatPrice(item.priceCents)}</p>
            </div>
            <span className="shrink-0 font-serif text-green-700">
              {formatPrice(item.priceCents * item.quantity)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between border-t border-line pt-4 font-serif text-lg text-charcoal">
        <span>Order total</span>
        <span>{formatPrice(totalCents)}</span>
      </div>
    </div>
  )
}
