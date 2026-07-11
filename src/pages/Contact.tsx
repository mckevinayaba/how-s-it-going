import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CheckBadgeIcon, ChatIcon } from '@/components/icons'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CONTACT_METHODS } from '@/data/orderOptions'
import { submitContactInquiry, type ContactInquiryPayload } from '@/lib/submissions'
import { usePageMeta } from '@/hooks/usePageMeta'

const INQUIRY_TYPES = [
  'Product order',
  'Product question',
  'Delivery question',
  'Support outreach',
  'Partnership',
  'Media',
  'General inquiry',
] as const

const OPTIONS = [
  {
    title: 'Order support',
    body: 'For product requests, delivery questions, basket follow up, and product availability.',
  },
  {
    title: 'Partnerships',
    body: 'For organisations, clinics, schools, churches, diaspora groups, companies, and funders.',
  },
  {
    title: 'Support outreach',
    body: 'For people or institutions that want to support screenings, supplies, transport, or larger outreach.',
  },
  {
    title: 'General inquiry',
    body: 'For all other questions.',
  },
]

const inputClass =
  'mt-1.5 w-full rounded-card border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-muted/60 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20'
const labelClass = 'text-sm font-medium text-charcoal'

export function Contact() {
  usePageMeta(
    'Contact | HappyMe Health',
    'Get in touch with HappyMe Health about products, orders, delivery, support, or partnership. Reach us by WhatsApp, phone, or message.',
  )
  const [submitted, setSubmitted] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState<string>(INQUIRY_TYPES[0])
  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')
  const [contactMethod, setContactMethod] = useState<string>(CONTACT_METHODS[0])
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!consent) return
    const payload: ContactInquiryPayload = {
      fullName, phone, whatsapp, email, inquiryType, city, message, contactMethod, consent,
      submittedAt: new Date().toISOString(),
    }
    await submitContactInquiry(payload)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-12 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Contact</p>
          <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Let’s talk about products, orders, support, or partnership.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Whether you want to request products, ask about delivery, support
            outreach, or explore partnership, the HappyMe Health team can
            follow up with you directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/request-order" size="lg">Request an order</Button>
            <Button to="#message" variant="outline" size="lg">Send a message</Button>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How we can help" heading="Pick the conversation you need" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OPTIONS.map((opt) => (
              <article
                key={opt.title}
                className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line"
              >
                <h3 className="font-serif text-lg text-charcoal">{opt.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{opt.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="message" className="scroll-mt-20 bg-warm py-16 sm:py-24">
        <div className="container-page max-w-2xl">
          {submitted ? (
            <div className="rounded-xl2 bg-white p-8 text-center shadow-card ring-1 ring-line sm:p-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                <CheckBadgeIcon className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-charcoal sm:text-3xl">
                Thank you. Your message has been received.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                The HappyMe Health team will contact you shortly. Order
                online. Confirm by WhatsApp. Pay after confirmation.
              </p>
              <Button to="/" size="lg" className="mt-8">Back to home</Button>
            </div>
          ) : (
            <>
              <SectionHeading eyebrow="Send a message" heading="Tell us what you need" />
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Full name</span>
                    <input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Phone number</span>
                    <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="6XX XXX XXX" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>WhatsApp number</span>
                    <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="If different from phone" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Email address</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Inquiry type</span>
                    <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className={inputClass}>
                      {INQUIRY_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>City or town</span>
                    <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Buea, Douala, Yaoundé..." className={inputClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Preferred contact method</span>
                    <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} className={inputClass}>
                      {CONTACT_METHODS.map((m) => (<option key={m} value={m}>{m}</option>))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Message</span>
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="How can we help?" className={inputClass} />
                  </label>
                </div>

                <label className="flex items-start gap-3 text-sm text-charcoal">
                  <input required type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-line text-green-500 focus:ring-green-500" />
                  <span>I agree to let HappyMe Health contact me about this inquiry.</span>
                </label>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!consent}>
                  Send message
                </Button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* WhatsApp + Location */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl2 bg-green-700 p-8 text-white shadow-lift sm:p-10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              <ChatIcon className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <h2 className="mt-5 font-serif text-2xl">Prefer WhatsApp?</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              For faster support, you can continue the conversation on
              WhatsApp. Our team will help with product questions, order
              requests, delivery details, and support inquiries.
            </p>
            {/* TODO: replace WHATSAPP_NUMBER in src/lib/whatsapp.ts with the real HappyMe Health WhatsApp business number. */}
            <a
              href={buildWhatsAppLink('Hi HappyMe Health, I have a question.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-pill bg-white px-7 py-3.5 text-sm font-medium text-green-700 shadow-soft transition-transform duration-300 ease-premium hover:-translate-y-0.5"
            >
              <ChatIcon className="h-4 w-4" strokeWidth={1.8} />
              Continue on WhatsApp
            </a>
          </div>

          <div className="rounded-xl2 bg-white p-8 shadow-card ring-1 ring-line sm:p-10">
            <span className="inline-block rounded-pill bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              Location and hours
            </span>
            <h2 className="mt-4 font-serif text-2xl text-charcoal">Based in Cameroon</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Serving customers through direct order requests and team follow up.
            </p>
            <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex justify-between text-charcoal">
                <dt className="font-medium">Monday to Saturday</dt>
                <dd className="text-muted">9 AM to 6 PM</dd>
              </div>
              <div className="flex justify-between text-charcoal">
                <dt className="font-medium">Sunday</dt>
                <dd className="text-muted">Closed</dd>
              </div>
            </dl>
            <p className="mt-6 rounded-card bg-oat p-4 text-xs leading-relaxed text-muted">
              Order online. Confirm by WhatsApp. Pay after confirmation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
