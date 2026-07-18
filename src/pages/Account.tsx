import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { CheckBadgeIcon, ChatIcon } from '@/components/icons'
import { CONTACT_METHODS } from '@/data/orderOptions'
import { submitOrderFollowUp, type OrderFollowUpPayload } from '@/lib/submissions'
import { usePageMeta } from '@/hooks/usePageMeta'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const NEED_OPTIONS = [
  'I submitted an order request',
  'I want to change my order',
  'I want to ask about delivery',
  'I want to ask about product availability',
  'I want to speak to someone',
] as const

const inputClass =
  'mt-1.5 w-full rounded-card border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-muted/60 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20'
const labelClass = 'text-sm font-medium text-charcoal'

export function Account() {
  usePageMeta(
    'Order Follow Up | HappyMe Health',
    'Follow up on a HappyMe Health order request — check delivery, change an order, or ask about product availability.',
  )
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [orderReference, setOrderReference] = useState('')
  const [needType, setNeedType] = useState<string>(NEED_OPTIONS[0])
  const [message, setMessage] = useState('')
  const [contactMethod, setContactMethod] = useState<string>(CONTACT_METHODS[0])
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!consent) return
    const payload: OrderFollowUpPayload = {
      fullName, phone, whatsapp, orderReference, needType, message, contactMethod, consent,
      submittedAt: new Date().toISOString(),
    }
    await submitOrderFollowUp(payload)
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-warm py-12 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
            Order follow up
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Follow up on your order.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            If you submitted an order request, the HappyMe Health team will
            contact you directly. You can also use this page to follow up on
            an existing request.
          </p>
          <p className="mt-4 rounded-card bg-oat p-4 text-sm leading-relaxed text-muted">
            Order online. Confirm by WhatsApp. Pay after confirmation.
          </p>
        </div>
      </section>

      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page max-w-2xl">
          {submitted ? (
            <div className="rounded-xl2 bg-white p-8 text-center shadow-card ring-1 ring-line sm:p-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                <CheckBadgeIcon className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-charcoal sm:text-3xl">
                Thank you. Your follow up request has been received.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Our team will contact you shortly.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={buildWhatsAppLink(
                    `Hi HappyMe Health, I'm following up on an order. ${orderReference ? `Reference: ${orderReference}. ` : ''}${needType}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-green-500 px-7 py-4 text-base font-medium text-white shadow-soft transition-all duration-300 ease-premium hover:bg-green-700"
                >
                  <ChatIcon className="h-5 w-5" strokeWidth={1.7} />
                  Continue on WhatsApp
                </a>
                <Button to="/" variant="outline" size="lg">Back to home</Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Full name</span>
                  <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} placeholder="Jane Doe" />
                </label>
                <label className="block">
                  <span className={labelClass}>Phone number</span>
                  <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="6XX XXX XXX" />
                </label>
                <label className="block">
                  <span className={labelClass}>WhatsApp number</span>
                  <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className={inputClass} placeholder="If different from phone" />
                </label>
                <label className="block">
                  <span className={labelClass}>Order reference (optional)</span>
                  <input value={orderReference} onChange={(e) => setOrderReference(e.target.value)} className={inputClass} placeholder="If you have one" />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>What do you need help with</span>
                  <select value={needType} onChange={(e) => setNeedType(e.target.value)} className={inputClass}>
                    {NEED_OPTIONS.map((o) => (<option key={o} value={o}>{o}</option>))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className={inputClass} placeholder="Share any details that will help us follow up faster" />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Preferred contact method</span>
                  <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} className={inputClass}>
                    {CONTACT_METHODS.map((m) => (<option key={m} value={m}>{m}</option>))}
                  </select>
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-charcoal">
                <input required type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-line text-green-500 focus:ring-green-500" />
                <span>I agree to let HappyMe Health contact me about this follow up.</span>
              </label>

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!consent}>
                Send follow up
              </Button>

              <p className="text-xs text-muted">
                Full customer accounts and order tracking will be added later.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
