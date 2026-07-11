import { useState, type FormEvent } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SupportCard } from '@/components/support/SupportCard'
import { CheckBadgeIcon } from '@/components/icons'
import { supportOptions } from '@/data/support'
import { SUPPORT_INTERESTS, CONTACT_METHODS } from '@/data/orderOptions'

const inputClass =
  'mt-1.5 w-full rounded-card border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-muted/60 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20'
const labelClass = 'text-sm font-medium text-charcoal'

export function Support() {
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!consent) return
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
              <Button to="/" size="lg" className="mt-8">
                Back to home
              </Button>
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
                    <input required placeholder="Jane Doe" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Phone number</span>
                    <input required type="tel" placeholder="6XX XXX XXX" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Email</span>
                    <input type="email" placeholder="jane@example.com" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Organisation, if any</span>
                    <input placeholder="Company, clinic, NGO..." className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Support interest</span>
                    <select defaultValue={SUPPORT_INTERESTS[0]} className={inputClass}>
                      {SUPPORT_INTERESTS.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Amount or type of support</span>
                    <input placeholder="e.g. 30,000 FCFA, transport for one day" className={inputClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Preferred contact method</span>
                    <select defaultValue={CONTACT_METHODS[0]} className={inputClass}>
                      {CONTACT_METHODS.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Message</span>
                    <textarea rows={4} placeholder="Tell us more about how you'd like to help" className={inputClass} />
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

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!consent}>
                  Send inquiry
                </Button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  )
}
