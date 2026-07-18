import { useState, type FormEvent } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SupportCard } from '@/components/support/SupportCard'
import { CheckBadgeIcon, ChatIcon } from '@/components/icons'
import { supportOptions } from '@/data/support'
import { SUPPORT_INTERESTS, CONTACT_METHODS } from '@/data/orderOptions'
import { submitSupportInquiry, type SupportInquiryPayload } from '@/lib/submissions'
import { usePageMeta } from '@/hooks/usePageMeta'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const inputClass =
  'mt-1.5 w-full rounded-card border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-muted/60 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20'
const labelClass = 'text-sm font-medium text-charcoal'

export function Support() {
  usePageMeta(
    'Support Outreach | HappyMe Health',
    'Support HappyMe Health outreach — sponsor a screening day, contribute supplies, help with transport, or partner on a larger programme.',
  )
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [supportInterest, setSupportInterest] = useState<string>(SUPPORT_INTERESTS[0])
  const [amountOrType, setAmountOrType] = useState('')
  const [contactMethod, setContactMethod] = useState<string>(CONTACT_METHODS[0])
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!consent || submitting) return

    const payload: SupportInquiryPayload = {
      fullName,
      phone,
      whatsapp: '',
      email,
      organisation,
      country: '',
      city: '',
      supportInterest,
      amountOrType,
      contactMethod,
      message,
      consent,
      submittedAt: new Date().toISOString(),
    }

    setSubmitting(true)
    await submitSupportInquiry(payload)
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-warm py-12 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Support outreach"
            heading="Support health outreach in communities that need it most"
            intro="Our project reports show a consistent pattern: when communities are mobilised, people come. What holds us back is practical: funding, transport, materials, and tools. Support from individuals and partners directly shapes how many people we can reach next."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {supportOptions.map((option) => (
              <SupportCard key={option.slug} option={option} />
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-20 bg-oat py-16 sm:py-24">
        <div className="container-page max-w-2xl">
          {submitted ? (
            <div className="rounded-xl2 bg-white p-8 text-center shadow-card ring-1 ring-line sm:p-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                <CheckBadgeIcon className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-charcoal sm:text-3xl">
                Thank you. Your support inquiry has been received.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                The HappyMe Health team will contact you to discuss details.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={buildWhatsAppLink(
                    `Hi HappyMe Health, I just sent a support inquiry from ${fullName || 'a supporter'} about ${supportInterest}. Following up here on WhatsApp.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-green-500 px-7 py-4 text-base font-medium text-white shadow-soft transition-all duration-300 ease-premium hover:bg-green-700"
                >
                  <ChatIcon className="h-5 w-5" strokeWidth={1.7} />
                  Continue on WhatsApp
                </a>
                <Button to="/" variant="outline" size="lg">
                  Back to home
                </Button>
              </div>
            </div>
          ) : (
            <>
              <SectionHeading
                eyebrow="Get in touch"
                heading="Tell us how you'd like to help"
                intro="Share a few details and our team will reach out to discuss the specifics."
              />
              <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                    <span className={labelClass}>Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Organisation, if any</span>
                    <input
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                      placeholder="Company, clinic, NGO..."
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Support interest</span>
                    <select
                      value={supportInterest}
                      onChange={(e) => setSupportInterest(e.target.value)}
                      className={inputClass}
                    >
                      {SUPPORT_INTERESTS.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Amount or type of support</span>
                    <input
                      value={amountOrType}
                      onChange={(e) => setAmountOrType(e.target.value)}
                      placeholder="e.g. 30,000 FCFA, transport for one day"
                      className={inputClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
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
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Message</span>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more about how you'd like to help"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="flex items-start gap-3 text-sm text-charcoal">
                  <input
                    required
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-line text-green-500 focus:ring-green-500"
                  />
                  <span>I agree to let HappyMe Health contact me about this inquiry.</span>
                </label>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!consent || submitting}>
                  {submitting ? 'Sending...' : 'Send inquiry'}
                </Button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  )
}
