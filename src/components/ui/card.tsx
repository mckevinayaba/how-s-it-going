import type { ReactNode } from 'react'

export function Card({
  children,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}) {
  return (
    <As
      className={`rounded-xl2 bg-white shadow-card ring-1 ring-line transition-transform duration-300 ease-premium ${className}`}
    >
      {children}
    </As>
  )
}
