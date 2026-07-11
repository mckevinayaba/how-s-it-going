import tomato from '@/assets/happyme-tomato.png'

interface MascotProps {
  className?: string
}

/**
 * Official HappyMe Health tomato mark (cropped from the primary logo).
 * Used as the icon in header, footer, and other brand lockups.
 */
export function Mascot({ className = 'h-9 w-9' }: MascotProps) {
  return (
    <img
      src={tomato}
      alt="HappyMe Health"
      className={`${className} object-contain`}
      draggable={false}
    />
  )
}
