import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CheckBadgeIcon } from '@/components/icons'

const TOPICS = [
  {
    title: 'Understanding blood sugar',
    body: 'Simple explanations that help families understand food choices and why professional medical guidance still matters.',
  },
  {
    title: 'Living with hypertension at home',
    body: 'Practical thinking around household habits, cooking choices, rest, stress, and family support.',
  },
  {
    title: 'Natural ingredients in the everyday kitchen',
    body: 'Stories and uses around date sugar, turmeric, tigernuts, and other familiar kitchen staples.',
  },
  {
    title: 'Early detection and why it matters',
    body: 'Why awareness, screening, and asking better questions can change what happens next.',
  },
  {
    title: 'Feeding your family better without spending more',
    body: 'Practical ideas for improving everyday meals where budget, time, and access are real constraints.',
  },
  {
    title: 'What we learned in the field',
    body: 'Lessons from HappyMe Health’s outreach work in communities and schools.',
  },
]

const QUICK_TIPS = [
  'Swap refined sugar gradually rather than changing everything at once.',
  'Add familiar ingredients like turmeric into meals your family already eats.',
  'Keep simple snacks nearby so long days do not always lead to processed options.',
  'Talk to your family about health history.',
  'Do not wait until symptoms become severe before seeking professional advice.',
  'Treat screening as care, not fear.',
]

export function Learn() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-12 sm:py-20 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
            Learn
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Simple health thinking for everyday homes.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Practical, honest content about food, family health, kitchen
            habits, early detection, and community care. No medical claims.
            No fear based advice. Just useful thinking for families making
            better choices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="#topics" size="lg">Explore topics</Button>
            <Button to="/shop" variant="outline" size="lg">Shop products</Button>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-10 rounded-xl2 bg-white p-8 shadow-lift ring-1 ring-line sm:p-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-block rounded-pill bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                Featured article
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl text-charcoal sm:text-4xl">
                Why what we eat at home matters more than most of us were told
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Food is not only fuel. It is culture, comfort, memory, habit,
                and daily decision making. For families touched by chronic
                illness, the kitchen often becomes the first place where
                change starts.
              </p>
              <Button to="#topics" size="lg" className="mt-6">Read article</Button>
            </div>
            <div className="aspect-[5/4] w-full rounded-xl2 bg-gradient-to-br from-green-50 via-oat to-warm ring-1 ring-line" />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="scroll-mt-20 bg-warm py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Topics"
            heading="Practical reading for real kitchens"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <article
                key={topic.title}
                className="group flex h-full flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift sm:p-7"
              >
                <h3 className="font-serif text-xl text-charcoal">{topic.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {topic.body}
                </p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-green-700">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick tips */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Quick tips" heading="Small changes that hold up over time" />
          <ul className="mt-8 space-y-3">
            {QUICK_TIPS.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-card bg-white p-4 shadow-soft ring-1 ring-line"
              >
                <CheckBadgeIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-700" strokeWidth={1.8} />
                <span className="text-sm leading-relaxed text-charcoal">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-700 py-16 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          {subscribed ? (
            <>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
                <CheckBadgeIcon className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h2 className="mt-6 text-balance font-serif text-3xl text-white sm:text-4xl">
                Thank you for subscribing.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                We’ll only send occasional, useful notes.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-balance font-serif text-3xl text-white sm:text-4xl">
                Get simple health and nutrition thinking in your inbox.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Occasional notes on product use, family kitchen choices,
                community outreach, and practical wellness thinking.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="rounded-pill border border-white/25 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name (optional)"
                  className="rounded-pill border border-white/25 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <Button type="submit" variant="inverse" size="lg">Subscribe</Button>
              </form>
              <p className="mt-4 text-xs text-white/70">
                No spam. No medical claims. Just useful updates.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  )
}
