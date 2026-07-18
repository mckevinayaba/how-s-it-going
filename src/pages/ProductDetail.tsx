import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProductBySlug, products } from '@/data/products'
import { ProductVisual } from '@/components/product/ProductVisual'
import { GuidanceNote } from '@/components/ui/GuidanceNote'
import { ProductCard } from '@/components/product/ProductCard'
import { LikeButton } from '@/components/product/LikeButton'
import { ShareButton } from '@/components/product/ShareButton'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { buildProductUrl } from '@/lib/share'
import { ChatIcon, ShopIcon } from '@/components/icons'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const navigate = useNavigate()

  const [activeImage, setActiveImage] = useState(0)
  const [reorderList, setReorderList] = useState(false)
  const { addItem } = useCart()

  usePageMeta(
    product ? `${product.name} | HappyMe Health` : 'Product | HappyMe Health',
    product ? `${product.shortDescription} ${product.longDescription}` : undefined,
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [product.image, ...product.gallery]
  const related = products.filter((p) => product.relatedSlugs.includes(p.slug))

  const addToBasket = () =>
    addItem({
      kind: 'product',
      slug: product.slug,
      name: product.name,
      priceFcfa: product.currentPackage.priceFcfa,
      image: product.image,
      variantLabel: product.currentPackage.label,
    })

  const handleRequestThisProduct = () => {
    addToBasket()
    navigate('/request-order')
  }

  const whatsappHelpLink = buildWhatsAppLink(
    `Hi, I'd like some help choosing between HappyMe Health products. I'm interested in ${product.name}.`,
  )

  const productUrl = buildProductUrl(product.slug)
  const whatsappShareLink = buildWhatsAppLink(
    `${product.name}\n\n${product.shortDescription}\n\n${productUrl}\n\nI found this on HappyMe Health and thought you might like it.`,
  )

  const whatsappPlannedPackageLink = product.plannedPackage
    ? buildWhatsAppLink(
        `Hi, I'd like to be notified when the ${product.plannedPackage.label} option for ${product.name} becomes available.`,
      )
    : undefined

  return (
    <div className="py-10 pb-28 sm:py-14 lg:pb-14">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image gallery */}
        <div>
          <ProductVisual
            slug={product.slug}
            spec={gallery[activeImage]}
            className="aspect-square w-full shadow-card"
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
                <ProductVisual slug={product.slug} spec={spec} rounded="rounded-none" className="h-full w-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <span className="inline-block rounded-pill bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              {product.category}
            </span>
            <div className="flex shrink-0 gap-2">
              <LikeButton slug={product.slug} name={product.name} className="!bg-oat" />
              <ShareButton
                name={product.name}
                title={product.name}
                text={product.shortDescription}
                url={productUrl}
                className="!bg-oat"
              />
              <a
                href={whatsappShareLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share ${product.name} on WhatsApp`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-oat text-charcoal/70 shadow-soft transition-transform duration-200 ease-premium hover:scale-110 hover:text-green-700 active:scale-95"
              >
                <ChatIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </a>
            </div>
          </div>
          <h1 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {product.shortDescription} {product.longDescription}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="font-serif text-2xl text-green-700">
              {formatPrice(product.currentPackage.priceFcfa)}
            </span>
            <span className="rounded-pill bg-oat px-3 py-1 text-xs font-medium text-charcoal">
              Currently available: {product.currentPackage.label}
            </span>
          </div>

          {product.plannedPackage && (
            <div className="mt-4 rounded-card border border-dashed border-line bg-warm p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-pill bg-green-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-green-700">
                  Coming soon
                </span>
                <span className="text-sm font-medium text-charcoal">
                  Planned pouch option: {product.plannedPackage.label}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                We're planning a move to {product.plannedPackage.label} packaging
                (estimated {formatPrice(product.plannedPackage.priceFcfa)}). This
                option is not available to order yet — only the current{' '}
                {product.currentPackage.label} can be added to your basket today.
              </p>
              <a
                href={whatsappPlannedPackageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-pill border border-green-700/30 px-4 py-2 text-xs font-medium text-green-700 transition-colors hover:bg-green-700/5"
              >
                <ChatIcon className="h-3.5 w-3.5" strokeWidth={1.8} />
                Notify me when available
              </a>
            </div>
          )}

          <label className="mt-5 flex items-center gap-2 text-sm text-charcoal">
            <input
              type="checkbox"
              checked={reorderList}
              onChange={(event) => setReorderList(event.target.checked)}
              className="h-4 w-4 rounded border-line text-green-500 focus:ring-green-500"
            />
            Join reorder list — we'll remind you when it's time to restock
          </label>

          <button
            type="button"
            onClick={addToBasket}
            className="mt-6 hidden w-full rounded-pill bg-green-500 px-6 py-3.5 text-sm font-medium text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700 sm:w-auto lg:inline-flex"
          >
            Add to basket
          </button>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted">
            <span>Choose your product</span>
            <span className="text-green-600">&rarr;</span>
            <span>Submit your request</span>
            <span className="text-green-600">&rarr;</span>
            <span>We contact you to confirm details</span>
          </div>

          <GuidanceNote className="mt-6" />

          {/* Need help choosing */}
          <div className="mt-6 rounded-xl2 bg-oat p-5">
            <h2 className="flex items-center gap-2 font-serif text-base text-charcoal">
              <ChatIcon className="h-4 w-4 text-green-700" strokeWidth={1.8} />
              Need help choosing?
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              Message us and our team will help you select the best option
              for your household.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleRequestThisProduct}
                className="inline-flex items-center gap-2 rounded-pill bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700"
              >
                <ShopIcon className="h-4 w-4" strokeWidth={1.7} />
                Request this product
              </button>
              <a
                href={whatsappHelpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-green-700/30 px-5 py-2.5 text-sm font-medium text-green-700 transition-colors hover:bg-green-700/5"
              >
                <ChatIcon className="h-4 w-4" strokeWidth={1.7} />
                Ask on WhatsApp
              </a>
            </div>
          </div>

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

      {/* Sticky mobile add-to-basket bar */}
      <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-30 flex items-center justify-between gap-4 border-t border-line bg-white/95 px-5 py-3 backdrop-blur lg:hidden">
        <span className="font-serif text-lg text-green-700">
          {formatPrice(product.currentPackage.priceFcfa)}
        </span>
        <button
          type="button"
          onClick={addToBasket}
          className="flex-1 max-w-[220px] rounded-pill bg-green-500 px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700"
        >
          Add to basket
        </button>
      </div>
    </div>
  )
}
