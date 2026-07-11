import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'inverse' | 'inverse-outline'
type Size = 'md' | 'lg'

const VARIANT_CLASSES: Record<Variant, string> = {
  // Solid HappyMe Green — main commerce actions
  primary: 'bg-green-500 text-white shadow-soft hover:bg-green-700 active:bg-green-800',
  // Thin border, Tomato Red text — sparing emotional accent
  secondary:
    'bg-white text-red-600 border border-red-200 hover:bg-red-50 active:bg-red-100',
  // Thin border, Deep Green text — everyday secondary action
  outline:
    'border border-green-700/30 text-green-700 hover:bg-green-700/5 active:bg-green-700/10',
  ghost: 'text-green-700 hover:bg-green-700/5',
  // White on Deep Green sections
  inverse: 'bg-white text-charcoal hover:bg-oat',
  'inverse-outline': 'border border-white/40 text-white hover:bg-white/10',
}

const SIZE_CLASSES: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-all duration-300 ease-premium disabled:opacity-50 disabled:pointer-events-none'

interface LinkButtonProps {
  to: string
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

interface NativeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: undefined
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const variant = props.variant ?? 'primary'
  const size = props.size ?? 'md'
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${props.className ?? ''}`

  if (props.to) {
    return (
      <Link to={props.to} className={classes}>
        {props.children}
      </Link>
    )
  }

  const { variant: _variant, size: _size, to: _to, className: _className, ...nativeProps } = props
  void _variant
  void _size
  void _to
  void _className

  return (
    <button className={classes} {...nativeProps}>
      {props.children}
    </button>
  )
}
