import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { ProductVisual } from '@/components/product/ProductVisual'
import { LikeButton } from '@/components/product/LikeButton'
import { ShareButton } from '@/components/product/ShareButton'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'
import { buildProductUrl } from '@/lib/share'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-product bg-white shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <LikeButton slug={product.slug} name={product.name} />
        <ShareButton
          name={product.name}
          title={product.name}
          text={product.shortDescription}
          url={buildProductUrl(product.slug)}
        />
      </div>
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
          <div>
            <span className="font-serif text-xl text-green-700">
              {formatPrice(product.currentPackage.priceFcfa)}
            </span>
            <span className="ml-1.5 text-xs text-muted">{product.currentPackage.label}</span>
          </div>
          <Link
            to={`/product/${product.slug}`}
            className="text-xs font-medium uppercase tracking-wide text-green-700 hover:text-green-800 hover:underline"
          >
            View product
          </Link>
        </div>

        {product.plannedPackage && (
          <p className="text-xs text-muted">
            <span className="font-medium text-charcoal">{product.plannedPackage.label} coming soon</span>
            {' — '}planned {formatPrice(product.plannedPackage.priceFcfa)}
          </p>
        )}

        <button
          type="button"
          onClick={() =>
            addItem({
              kind: 'product',
              slug: product.slug,
              name: product.name,
              priceFcfa: product.currentPackage.priceFcfa,
              image: product.image,
              variantLabel: product.currentPackage.label,
            })
          }
          className="w-full rounded-pill bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-green-700 hover:shadow-lift active:scale-[0.98]"
        >
          Add to basket
        </button>
      </div>
    </article>
  )
}
