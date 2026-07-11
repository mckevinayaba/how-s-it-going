import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getProductBySlug, products } from '@/data/products'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { GuidanceNote } from '@/components/ui/GuidanceNote'
import { ProductCard } from '@/components/product/ProductCard'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  const [activeImage, setActiveImage] = useState(0)
  const [variantIndex, setVariantIndex] = useState(0)
  const [subscribe, setSubscribe] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const variant = product.variants[variantIndex]
  const gallery = [product.image, ...product.gallery]
  const related = products.filter((p) => product.relatedSlugs.includes(p.slug))

  const handleAddToCart = () =>
    addItem({
      kind: 'product',
      slug: product.slug,
      name: product.name,
      priceCents: subscribe ? Math.round(variant.priceCents * 0.9) : variant.priceCents,
      image: product.image,
      variantLabel: variant.label,
    })

  return (
    <div className="py-10 pb-28 sm:py-14 lg:pb-14">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image gallery */}
        <div>
          <PlaceholderImage
            spec={gallery[activeImage]}
            className="aspect-square w-full"
          />
          <div className="mt-4 flex gap-3">
            {gallery.map((spec, index) => (
              <button
                key={spec.label}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show image: ${spec.label}`}
                className={`h-16 w-16 overflow-hidden rounded-card ring-2 transition-colors ${
                  activeImage === index ? 'ring-green-700' : 'ring-transparent'
                }`}
              >
                <PlaceholderImage spec={spec} rounded="rounded-none" className="h-full w-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <span className="inline-block rounded-pill bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
            {product.category}
          </span>
          <h1 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {product.shortDescription} {product.longDescription}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="font-serif text-2xl text-green-700">
              {formatPrice(variant.priceCents)}
            </span>
            <label className="sr-only" htmlFor="pack-size">
              Pack size
            </label>
            <select
              id="pack-size"
              value={variantIndex}
              onChange={(event) => setVariantIndex(Number(event.target.value))}
              className="rounded-pill border border-line bg-white px-4 py-2 text-sm text-charcoal"
            >
              {product.variants.map((v, index) => (
                <option key={v.label} value={index}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          <label className="mt-5 flex items-center gap-2 text-sm text-charcoal">
            <input
              type="checkbox"
              checked={subscribe}
              onChange={(event) => setSubscribe(event.target.checked)}
              className="h-4 w-4 rounded border-line text-green-500 focus:ring-green-500"
            />
            Subscribe and save 10% — delivered every month
          </label>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-6 hidden w-full rounded-pill bg-green-500 px-6 py-3.5 text-sm font-medium text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700 sm:w-auto lg:inline-flex"
          >
            Add to cart
          </button>

          <GuidanceNote className="mt-8" />

          {/* Story */}
          <div className="mt-10">
            <h2 className="font-serif text-xl text-charcoal">Our story with {product.name.toLowerCase()}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{product.story}</p>
          </div>

          {/* Safe benefits */}
          <div className="mt-8">
            <h2 className="font-serif text-xl text-charcoal">Why people choose it</h2>
            <ul className="mt-3 space-y-2">
              {product.safeBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* How to use */}
          <div className="mt-8">
            <h2 className="font-serif text-xl text-charcoal">How to use it</h2>
            <ul className="mt-3 space-y-2">
              {product.howToUse.map((step) => (
                <li key={step} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="container-page mt-20">
          <h2 className="font-serif text-2xl text-charcoal">You may also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Reviews placeholder */}
      <div className="container-page mt-20 max-w-2xl">
        <h2 className="font-serif text-2xl text-charcoal">Customer reviews</h2>
        <div className="mt-5 rounded-xl2 bg-oat p-6 text-sm text-muted">
          Reviews are coming soon. Once customers start receiving {product.name.toLowerCase()},
          their feedback will appear here.
        </div>
      </div>

      {/* Sticky mobile add-to-cart bar */}
      <div className="fixed inset-x-0 bottom-16 z-30 flex items-center justify-between gap-4 border-t border-line bg-white/95 px-5 py-3 backdrop-blur lg:hidden">
        <span className="font-serif text-lg text-green-700">
          {formatPrice(subscribe ? Math.round(variant.priceCents * 0.9) : variant.priceCents)}
        </span>
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 max-w-[220px] rounded-pill bg-green-500 px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
