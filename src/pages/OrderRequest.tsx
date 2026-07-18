import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'
import { Button } from '@/components/ui/Button'
import { OrderSummary } from '@/components/order/OrderSummary'
import { HowOrderingWorks } from '@/components/order/HowOrderingWorks'
import { CheckBadgeIcon, ChatIcon } from '@/components/icons'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CONTACT_METHODS, PAYMENT_METHODS } from '@/data/orderOptions'
import { submitOrderRequest, buildCartLinePayload, type OrderRequestPayload } from '@/lib/submissions'
import { usePageMeta } from '@/hooks/usePageMeta'
import type { CartLineItem } from '@/types'

interface OrderConfirmation {
  items: CartLineItem[]
  totalFcfa: number
  name: string
  city: string
  contactMethod: string
}

const inputClass =
  'mt-1.5 w-full rounded-card border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-muted/60 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20'
const labelClass = 'text-sm font-medium text-charcoal'

export function OrderRequest() {
  usePageMeta('Request Order | HappyMe Health')
  const { items, subtotalFcfa, totalFcfa, supportAddOn, supportAddOnFcfa, clearCart } = useCart()
  const [confirmation, setConfirmation] = useState<OrderConfirmation | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [quarter, setQuarter] = useState('')
  const [address, setAddress] = useState('')
  const [contactMethod, setContactMethod] = useState<string>(CONTACT_METHODS[0])
  const [paymentMethod, setPaymentMethod] = useState<string>(PAYMENT_METHODS[0])
  const [notes, setNotes] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!consent || items.length === 0 || submitting) return

    const payload: OrderRequestPayload = {
      fullName,
      phone,
      whatsapp,
      email,
      city,
      quarter,
      addressOrPickup: address,
      items: buildCartLinePayload(items),
      subtotalFcfa,
      supportAddOn,
      supportAddOnFcfa,
      totalFcfa,
      contactMethod,
      paymentMethod,
      notes,
      consent,
      submittedAt: new Date().toISOString(),
    }

    setSubmitting(true)
    await submitOrderRequest(payload)
    setSubmitting(false)

    setConfirmation({
      items,
      totalFcfa,
      name: fullName,
      city,
      contactMethod,
    })
    clearCart()
  }

  if (confirmation) {
    const message = [
      `New order request from ${confirmation.name || 'a customer'}`,
      '',
      'Products:',
      ...confirmation.items.map(
        (item) => `- ${item.name} x${item.quantity} (${formatPrice(item.priceFcfa * item.quantity)})`,
      ),
      '',
      `Total: ${formatPrice(confirmation.totalFcfa)}`,
      `City/town: ${confirmation.city || 'not provided'}`,
      `Preferred contact: ${confirmation.contactMethod}`,
    ].join('\n')

    return (
      <div className="container-page flex min-h-[70vh] items-center justify-center py-16">
        <div className="max-w-lg text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
            <CheckBadgeIcon className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <h1 className="mt-6 font-serif text-3xl text-charcoal sm:text-4xl">
            Your order request has been received.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Thank you for choosing HappyMe Health. Our team will contact you
            shortly to confirm product availability, delivery details, and
            payment options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-green-500 px-7 py-4 text-base font-medium text-white shadow-soft transition-all duration-300 ease-premium hover:bg-green-700"
            >
              <ChatIcon className="h-5 w-5" strokeWidth={1.7} />
              Continue on WhatsApp
            </a>
            <Button to="/shop" variant="outline" size="lg">
              Back to shop
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Your basket is empty</h1>
        <p className="mt-3 text-muted">
          Add a product or bundle before requesting an order.
        </p>
        <Button to="/shop" size="lg" className="mt-8">
          Shop products
        </Button>
      </div>
    )
  }

  return (
    <div className="container-page py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
        Request order
      </p>
      <h1 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
        Tell us where to send your order
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        No online payment is required at this stage. Our team will contact
        you to confirm delivery and payment options.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line sm:p-7">
            <legend className="px-1 font-serif text-lg text-charcoal">Your details</legend>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Full name</span>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Phone number</span>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="6XX XXX XXX"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>WhatsApp number</span>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="If different from phone number"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Email address (optional)</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line sm:p-7">
            <legend className="px-1 font-serif text-lg text-charcoal">Delivery</legend>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>City or town</span>
                <input
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Buea, Douala, Yaoundé..."
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Quarter or neighbourhood</span>
                <input
                  value={quarter}
                  onChange={(e) => setQuarter(e.target.value)}
                  placeholder="Molyko, Bonapriso..."
                  className={inputClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className={labelClass}>Delivery address or pickup preference</span>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  placeholder="Landmark, house description, or where you'd like to pick up"
                  className={inputClass}
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line sm:p-7">
            <legend className="px-1 font-serif text-lg text-charcoal">Contact and payment</legend>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Preferred contact method</span>
                <select
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className={inputClass}
                >
                  {CONTACT_METHODS.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className={labelClass}>
                  Payment will be confirmed after our team contacts you
                </span>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className={inputClass}
                >
                  {PAYMENT_METHODS.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className={labelClass}>Order notes</span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Anything else we should know about your order"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-charcoal">
              <input
                required
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-line text-green-500 focus:ring-green-500"
              />
              <span>
                I agree to let HappyMe Health contact me about this order by
                phone, WhatsApp, SMS, or email.
              </span>
            </label>
          </fieldset>

          <div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!consent || submitting}>
              {submitting ? 'Submitting...' : 'Submit order request'}
            </Button>
            <p className="mt-3 text-sm text-muted">
              No online payment is required at this stage. Our team will
              contact you to confirm delivery and payment options.
            </p>
          </div>
        </form>

        <aside className="space-y-6">
          <OrderSummary
            items={items}
            subtotalFcfa={subtotalFcfa}
            supportAddOnFcfa={supportAddOnFcfa}
            totalFcfa={totalFcfa}
          />
          <HowOrderingWorks />
          <Link
            to="/cart"
            className="block text-center text-sm text-muted hover:text-green-700"
          >
            Back to basket
          </Link>
        </aside>
      </div>
    </div>
  )
}
