const STEPS = [
  { number: '1', title: 'Choose your products or bundle' },
  { number: '2', title: 'Submit your order request' },
  { number: '3', title: 'Our team confirms availability and delivery' },
  { number: '4', title: 'You pay using the agreed method and receive your order' },
]

export function HowOrderingWorks() {
  return (
    <div className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line">
      <h2 className="font-serif text-lg text-charcoal">How ordering works</h2>
      <ol className="mt-4 space-y-4">
        {STEPS.map((step) => (
          <li key={step.number} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-semibold text-green-700">
              {step.number}
            </span>
            <span className="pt-0.5 text-sm leading-relaxed text-charcoal">{step.title}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
