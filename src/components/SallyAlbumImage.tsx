import { useState } from 'react'

const SRC = '/images/sally-njoh-impact-collage.png'
const ALT =
  'Sally Njoh, Founder and CEO of HappyMe Health, with the team during community health outreach, screenings, and awareness activities in Cameroon.'

type Props = {
  loading?: 'eager' | 'lazy'
  sizes?: string
  className?: string
}

export function SallyAlbumImage({
  loading = 'lazy',
  sizes = '(min-width: 1024px) 560px, 100vw',
  className = 'h-auto w-full rounded-[calc(theme(borderRadius.card)-0.25rem)] object-cover',
}: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={ALT}
        className="flex aspect-[16/9] w-full flex-col items-center justify-center rounded-[calc(theme(borderRadius.card)-0.25rem)] bg-oat p-8 text-center"
      >
        <p className="font-serif text-xl text-charcoal sm:text-2xl">
          Real outreach photos coming soon.
        </p>
        <p className="mt-2 text-sm text-muted">
          HappyMe Health community outreach in Cameroon.
        </p>
      </div>
    )
  }

  return (
    <img
      src={SRC}
      alt={ALT}
      loading={loading}
      decoding="async"
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
