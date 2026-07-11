import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9.5a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.5a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V10" />
    </svg>
  )
}

export function ShopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l-1 12a2 2 0 0 1-2 1.8H9A2 2 0 0 1 7 20L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

export function ImpactIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20c-4-2.6-8-6-8-10.6A4.4 4.4 0 0 1 12 6.5 4.4 4.4 0 0 1 20 9.4C20 14 16 17.4 12 20Z" />
    </svg>
  )
}

export function LearnIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5C5.5 4.6 8 4 12 5v13.5c-4-1-6.5-.4-8 .5v-13.5Z" />
      <path d="M20 5.5C18.5 4.6 16 4 12 5v13.5c4-1 6.5-.4 8 .5v-13.5Z" />
    </svg>
  )
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l-1 12a2 2 0 0 1-2 1.8H9A2 2 0 0 1 7 20L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M9.5 12v3M14.5 12v3" />
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c-1-6 2.5-13 14-14 1 8-4 13-9 13.5-2 .2-3.8.3-5 .5Z" />
      <path d="M6 18c3-4 6-6.5 10-10" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6.3v5c0 4.6-3 8.2-7 9.2-4-1-7-4.6-7-9.2v-5L12 3.5Z" />
      <path d="M9 12.2 11.2 14.4 15.3 10" />
    </svg>
  )
}

export function AccountIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.5" r="3.4" />
      <path d="M4.8 19.5c1.4-3 4-4.6 7.2-4.6s5.8 1.6 7.2 4.6" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
