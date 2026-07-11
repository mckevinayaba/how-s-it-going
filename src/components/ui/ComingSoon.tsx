import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

interface ComingSoonProps {
  eyebrow: string
  heading: string
  intro: ReactNode
}

export function ComingSoon({ eyebrow, heading, intro }: ComingSoonProps) {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">{heading}</h1>
        <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
        <p className="mt-8 rounded-pill bg-oat px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted inline-block">
          Full page arriving in the next build phase
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/shop" variant="outline">
            Shop products
          </Button>
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </div>
  )
}
