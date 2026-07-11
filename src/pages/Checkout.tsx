import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'
import { Button } from '@/components/ui/Button'

export function Checkout() {
  const { items, subtotalCents } = useCart()

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="font-serif text-3xl text-charcoal sm:text-4xl">Checkout</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Payment integration is coming in a future build phase. This page
        shows the intended checkout flow so it is ready to connect to a
        real payment provider.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <fieldset className="rounded-xl2 bg-white p-6 shadow-soft ring-1 ring-line">
            <legend className="px-1 font-serif text-lg text-charcoal">Contact & delivery</legend>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  disabled
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-card border border-line bg-oat px-4 py-2.5 text-sm text-charcoal placeholder:text-muted/60"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  disabled
                  placeholder="jane@example.com"
                  className="mt-1 w-full rounded-card border border-line bg-oat px-4 py-2.5 text-sm text-charcoal placeholder:text-muted/60"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted" htmlFor="address">
                  Delivery address
                </label>
                <input
                  id="address"
                  disabled
                  placeholder="Street, city, country"
                  className="mt-1 w-full rounded-card border border-line bg-oat px-4 py-2.5 text-sm text-charcoal placeholder:text-muted/60"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-xl2 bg-white p-6 shadow-soft ring-1 ring-line">
            <legend className="px-1 font-serif text-lg text-charcoal">Payment</legend>
            <p className="mt-2 text-sm text-muted">
              Card and mobile money payment will be connected here via
              environment-configured provider keys. No payment details are
              collected yet.
            </p>
            <div className="mt-4 h-12 rounded-card border border-dashed border-line bg-oat" />
          </fieldset>
        </div>

        <aside className="h-fit rounded-xl2 bg-oat p-6">
          <h2 className="font-serif text-lg text-charcoal">Order summary</h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal">
            {items.length === 0 && <li className="text-muted">Your cart is empty.</li>}
            {items.map((item) => (
              <li key={`${item.slug}-${item.variantLabel ?? ''}`} className="flex justify-between">
                <span>
                  {item.name} &times; {item.quantity}
                </span>
                <span>{formatPrice(item.priceCents * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-line pt-4 font-serif text-lg text-charcoal">
            <span>Total</span>
            <span>{formatPrice(subtotalCents)}</span>
          </div>
          <Button
            type="button"
            disabled
            size="lg"
            className="mt-6 w-full cursor-not-allowed"
          >
            Payment coming soon
          </Button>
          <Link
            to="/cart"
            className="mt-3 block text-center text-sm text-muted hover:text-green-700"
          >
            Back to cart
          </Link>
        </aside>
      </div>
    </div>
  )
}
