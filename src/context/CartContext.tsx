import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CartLineItem } from '@/types'

const STORAGE_KEY = 'happyme-cart-v1'

interface CartContextValue {
  items: CartLineItem[]
  itemCount: number
  subtotalCents: number
  addItem: (item: Omit<CartLineItem, 'quantity'>, quantity?: number) => void
  removeItem: (slug: string, variantLabel?: string) => void
  setQuantity: (slug: string, quantity: number, variantLabel?: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

function readStoredCart(): CartLineItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartLineItem[]) : []
  } catch {
    return []
  }
}

function lineKey(slug: string, variantLabel?: string) {
  return `${slug}::${variantLabel ?? ''}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>(() => readStoredCart())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback<CartContextValue['addItem']>(
    (item, quantity = 1) => {
      setItems((current) => {
        const key = lineKey(item.slug, item.variantLabel)
        const existing = current.find(
          (line) => lineKey(line.slug, line.variantLabel) === key,
        )
        if (existing) {
          return current.map((line) =>
            lineKey(line.slug, line.variantLabel) === key
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          )
        }
        return [...current, { ...item, quantity }]
      })
    },
    [],
  )

  const removeItem = useCallback<CartContextValue['removeItem']>(
    (slug, variantLabel) => {
      setItems((current) =>
        current.filter(
          (line) => lineKey(line.slug, line.variantLabel) !== lineKey(slug, variantLabel),
        ),
      )
    },
    [],
  )

  const setQuantity = useCallback<CartContextValue['setQuantity']>(
    (slug, quantity, variantLabel) => {
      setItems((current) => {
        if (quantity <= 0) {
          return current.filter(
            (line) =>
              lineKey(line.slug, line.variantLabel) !== lineKey(slug, variantLabel),
          )
        }
        return current.map((line) =>
          lineKey(line.slug, line.variantLabel) === lineKey(slug, variantLabel)
            ? { ...line, quantity }
            : line,
        )
      })
    },
    [],
  )

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items],
  )

  const subtotalCents = useMemo(
    () => items.reduce((sum, line) => sum + line.priceCents * line.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({ items, itemCount, subtotalCents, addItem, removeItem, setQuantity, clearCart }),
    [items, itemCount, subtotalCents, addItem, removeItem, setQuantity, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
