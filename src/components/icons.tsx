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

export function CalendarCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8.5 13.5 10.7 15.7 15.5 11" />
    </svg>
  )
}

export function FirstAidIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6.5" width="17" height="13" rx="2.4" />
      <path d="M9 6.5V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M12 10.5v5M9.5 13h5" />
    </svg>
  )
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h10v9H3z" />
      <path d="M13 10.5h4l3.5 3V16h-7.5z" />
      <circle cx="7" cy="17.5" r="1.7" />
      <circle cx="17" cy="17.5" r="1.7" />
    </svg>
  )
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11v2a1.5 1.5 0 0 0 1.5 1.5H6l1 5h2l-1-5h1l9 4V6L9 10H4.5A1.5 1.5 0 0 0 3 11.5Z" />
      <path d="M19 9.5v5" />
    </svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.2 19c1.1-3 3.2-4.6 5.8-4.6s4.7 1.6 5.8 4.6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.6c2.1.2 3.6 1.7 4.4 4.4" />
    </svg>
  )
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" />
      <path d="M3.5 8v8L12 20V12M20.5 8v8L12 20" />
    </svg>
  )
}

export function RepeatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 0 1 13.5-5.7L20 8.5" />
      <path d="M20 4.5v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.5 5.7L4 15.5" />
      <path d="M4 19.5v-4h4" />
    </svg>
  )
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12.5 6 9l3 2.2" />
      <path d="M21.5 12.5 18 9l-3 2.2" />
      <path d="M9 11.2 11.3 13a1.4 1.4 0 0 0 2-2l-2.6-2.6a3 3 0 0 0-2.1-.9H6" />
      <path d="M15 11.2 12.7 13" />
      <path d="M6 9 3 11.8V16l3.5 3.5 3-2.3" />
      <path d="M18 9l3 2.8V16l-3.5 3.5-3-2.3" />
    </svg>
  )
}

export function CheckBadgeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 14 5l2.6-.3 1 2.4 2.4 1-.3 2.6L21 13l-1.3 2.3.3 2.6-2.4 1-1 2.4-2.6-.3-2 1.5-2-1.5-2.6.3-1-2.4-2.4-1 .3-2.6L3 13l1.3-2.3-.3-2.6 2.4-1 1-2.4 2.6.3Z" />
      <path d="M9 12.3 11.2 14.5 15.5 10" />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h8L19 8v12a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4.5" />
      <path d="M8.5 13h7M8.5 16.5h7" />
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
