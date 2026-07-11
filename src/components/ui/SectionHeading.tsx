import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const isLight = tone === 'light'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${
            isLight ? 'text-green-200' : 'text-green-700'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-3xl leading-tight sm:text-4xl ${
          isLight ? 'text-white' : 'text-charcoal'
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            isLight ? 'text-white/85' : 'text-muted'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
