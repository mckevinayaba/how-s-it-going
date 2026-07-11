import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'happyme-liked-products-v1'

interface LikedProductsContextValue {
  likedSlugs: string[]
  isLiked: (slug: string) => boolean
  toggleLike: (slug: string) => void
}

const LikedProductsContext = createContext<LikedProductsContextValue | undefined>(undefined)

function readStoredLikes(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function LikedProductsProvider({ children }: { children: ReactNode }) {
  const [likedSlugs, setLikedSlugs] = useState<string[]>(() => readStoredLikes())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(likedSlugs))
  }, [likedSlugs])

  const isLiked = useCallback((slug: string) => likedSlugs.includes(slug), [likedSlugs])

  const toggleLike = useCallback((slug: string) => {
    setLikedSlugs((current) =>
      current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug],
    )
  }, [])

  const value = useMemo(
    () => ({ likedSlugs, isLiked, toggleLike }),
    [likedSlugs, isLiked, toggleLike],
  )

  return <LikedProductsContext.Provider value={value}>{children}</LikedProductsContext.Provider>
}

export function useLikedProducts(): LikedProductsContextValue {
  const ctx = useContext(LikedProductsContext)
  if (!ctx) throw new Error('useLikedProducts must be used within a LikedProductsProvider')
  return ctx
}
