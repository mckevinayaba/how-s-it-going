import { Link } from 'react-router-dom'
import { useCart, SUPPORT_ADD_ON_FCFA } from '@/context/CartContext'
import { ProductVisual } from '@/components/product/ProductVisual'
import bundleImg from '@/assets/bundle-scene.jpg'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/format'
import { SUPPORT_ADD_ON_CHOICES } from '@/data/orderOptions'
import { usePageMeta } from '@/hooks/usePageMeta'
import { DeliveryTrustStrip } from '@/components/ui/DeliveryTrustStrip'
import type { CartLineItem } from '@/types'

function CartItemVisual({ item }: { item: CartLineItem }) {
  if (item.kind === 'bundle') {
    return (
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-card bg-oat">
        <img src={bundleImg} alt={item.name} className="h-full w-full object-cover" />
      </div>
    )
  }
  return (
    <ProductVisual
      slug={item.slug}
      spec={item.image}
      className="h-24 w-24 shrink-0"
    />
  )
}

export function Cart() {
  usePageMeta('Your Basket | HappyMe Health')
  const {
    items,
    subtotalFcfa,
    totalFcfa,
    hasUnconfirmedItems,
    setQuantity,
    removeItem,
    supportAddOn,
    setSupportAddOn,
  } = useCart()

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Your basket is empty</h1>
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
    <>
      <DeliveryTrustStrip />
      <div className="container-page py-12 sm:py-16">
        <h1 className="font-serif text-3xl text-charcoal sm:text-4xl">Your basket</h1>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-5">
          {items.map((item) => (
            <li
              key={`${item.kind}-${item.slug}-${item.variantLabel ?? ''}`}
              className="flex gap-4 rounded-xl2 bg-white p-4 shadow-soft ring-1 ring-line"
            >
              <CartItemVisual item={item} />
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
                  {item.priceConfirmed === false ? (
                    <span className="text-xs font-medium text-green-700">
                      Price confirmed after order request
                    </span>
                  ) : (
                    <span className="font-serif text-base text-green-700">
                      {formatPrice(item.priceFcfa * item.quantity)}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-xl2 bg-oat p-6">
          <h2 className="font-serif text-lg text-charcoal">Order summary</h2>

          <div className="mt-4 flex justify-between text-sm text-charcoal">
            <span>{hasUnconfirmedItems ? 'Subtotal for priced items' : 'Subtotal'}</span>
            <span>{formatPrice(subtotalFcfa)}</span>
          </div>

          <fieldset className="mt-4 rounded-card bg-green-50 p-4">
            <legend className="px-0 text-sm font-medium text-green-800">
              Support community outreach
            </legend>
            <div className="mt-2 space-y-2">
              {SUPPORT_ADD_ON_CHOICES.map((choice) => (
                <label key={choice.value} className="flex items-center gap-2.5 text-sm text-green-800">
                  <input
                    type="radio"
                    name="support-add-on"
                    value={choice.value}
                    checked={supportAddOn === choice.value}
                    onChange={(event) =>
                      setSupportAddOn(event.target.value as typeof supportAddOn)
                    }
                    className="h-4 w-4 border-green-500/30 text-green-500 focus:ring-green-500"
                  />
                  {choice.label}
                  {choice.value === 'contribute' && (
                    <span className="text-xs text-green-700/80">
                      ({formatPrice(SUPPORT_ADD_ON_FCFA)})
                    </span>
                  )}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 flex justify-between border-t border-line pt-4 font-serif text-lg text-charcoal">
            <span>{hasUnconfirmedItems ? 'Total for priced items' : 'Total'}</span>
            <span>{formatPrice(totalFcfa)}</span>
          </div>
          {hasUnconfirmedItems && (
            <p className="mt-2 text-xs text-muted">
              Some items require price confirmation. Our team will confirm
              the final price after your order request.
            </p>
          )}

          <Button to="/request-order" size="lg" className="mt-6 w-full">
            Request order
          </Button>
          <p className="mt-3 text-center text-xs text-muted">
            No online payment is required at this stage. Our team will
            contact you to confirm availability, delivery, and payment
            options.
          </p>
          <Link
            to="/shop"
            className="mt-3 block text-center text-sm text-muted hover:text-green-700"
          >
            Continue shopping
          </Link>
        </aside>
        </div>
      </div>
    </>
  )
}
