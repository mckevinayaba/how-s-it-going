import { HeartIcon } from '@/components/icons'
import { useLikedProducts } from '@/context/LikedProductsContext'

interface LikeButtonProps {
  slug: string
  name: string
  className?: string
  size?: 'sm' | 'md'
}

export function LikeButton({ slug, name, className = '', size = 'md' }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLikedProducts()
  const liked = isLiked(slug)
  const dimension = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]'

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggleLike(slug)
      }}
      aria-pressed={liked}
      aria-label={liked ? `Remove ${name} from liked products` : `Like ${name}`}
      className={`flex ${dimension} items-center justify-center rounded-full bg-white/90 shadow-soft backdrop-blur transition-transform duration-200 ease-premium hover:scale-110 active:scale-95 ${className}`}
    >
      <HeartIcon
        className={`${iconSize} ${liked ? 'text-red-500' : 'text-charcoal/70'}`}
        fill={liked ? 'currentColor' : 'none'}
        strokeWidth={1.8}
      />
    </button>
  )
}
