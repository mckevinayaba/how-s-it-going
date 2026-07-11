import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { ProductVisual } from '@/components/product/ProductVisual'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <article className="group flex flex-col overflow-hidden rounded-product bg-white shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <Link to={`/product/${product.slug}`} className="block overflow-hidden">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <ProductVisual
            slug={product.slug}
            spec={product.image}
            rounded="rounded-none"
            className="h-full w-full transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-serif text-lg text-charcoal">
            <Link to={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-serif text-xl text-green-700">
            {formatPrice(product.priceCents)}
          </span>
          <Link
            to={`/product/${product.slug}`}
            className="text-xs font-medium uppercase tracking-wide text-green-700 hover:text-green-800 hover:underline"
          >
            View product
          </Link>
        </div>

        <button
          type="button"
          onClick={() =>
            addItem({
              kind: 'product',
              slug: product.slug,
              name: product.name,
              priceCents: product.priceCents,
              image: product.image,
              variantLabel: product.packSize,
            })
          }
          className="w-full rounded-pill bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-green-700 hover:shadow-lift active:scale-[0.98]"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}
