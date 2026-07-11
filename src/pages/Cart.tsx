import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/format'

const SUPPORT_ADD_ON_CENTS = 500

export function Cart() {
  const { items, subtotalCents, setQuantity, removeItem } = useCart()
  const [supportAddOn, setSupportAddOn] = useState(false)

  const total = subtotalCents + (supportAddOn ? SUPPORT_ADD_ON_CENTS : 0)

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Your cart is empty</h1>
        <p className="mt-3 text-muted">
          Start with a simple, nourishing staple for your kitchen.
        </p>
        <Button to="/shop" size="lg" className="mt-8">
          Shop products
        </Button>
      </div>
    )
  }

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="font-serif text-3xl text-charcoal sm:text-4xl">Your cart</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-5">
          {items.map((item) => (
            <li
              key={`${item.kind}-${item.slug}-${item.variantLabel ?? ''}`}
              className="flex gap-4 rounded-xl2 bg-white p-4 shadow-soft ring-1 ring-line"
            >
              <PlaceholderImage
                spec={item.image}
                className="h-24 w-24 shrink-0"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="font-serif text-base text-charcoal">{item.name}</h2>
                  {item.variantLabel && (
                    <p className="text-xs text-muted">{item.variantLabel}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="sr-only" htmlFor={`qty-${item.slug}`}>
                      Quantity for {item.name}
                    </label>
                    <select
                      id={`qty-${item.slug}`}
                      value={item.quantity}
                      onChange={(event) =>
                        setQuantity(item.slug, Number(event.target.value), item.variantLabel)
                      }
                      className="rounded-pill border border-line bg-white px-3 py-1.5 text-sm text-charcoal"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug, item.variantLabel)}
                      className="text-xs font-medium text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <span className="font-serif text-base text-green-700">
                    {formatPrice(item.priceCents * item.quantity)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-xl2 bg-oat p-6">
          <h2 className="font-serif text-lg text-charcoal">Order summary</h2>

          <div className="mt-4 flex justify-between text-sm text-charcoal">
            <span>Subtotal</span>
            <span>{formatPrice(subtotalCents)}</span>
          </div>

          <label className="mt-4 flex items-start gap-3 rounded-card bg-green-50 p-4 text-sm text-green-800">
            <input
              type="checkbox"
              checked={supportAddOn}
              onChange={(event) => setSupportAddOn(event.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-green-500/30 text-green-500 focus:ring-green-500"
            />
            <span>
              Add a {formatPrice(SUPPORT_ADD_ON_CENTS)} contribution to
              HappyMe Health Impact outreach with this order.
            </span>
          </label>

          <div className="mt-4 flex justify-between border-t border-line pt-4 font-serif text-lg text-charcoal">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <Button to="/checkout" size="lg" className="mt-6 w-full">
            Checkout
          </Button>
          <Link
            to="/shop"
            className="mt-3 block text-center text-sm text-muted hover:text-green-700"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
