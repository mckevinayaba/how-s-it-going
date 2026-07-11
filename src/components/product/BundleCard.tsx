import { useNavigate } from 'react-router-dom'
import type { Bundle } from '@/types'
import bundleImg from '@/assets/bundle-scene.jpg'
import { ImpactIcon } from '@/components/icons'
import { ShareButton } from '@/components/product/ShareButton'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'

export function BundleCard({ bundle }: { bundle: Bundle }) {
  const { addItem } = useCart()
  const navigate = useNavigate()
  const isImpact = Boolean(bundle.isImpactBundle)

  const addBundleToBasket = () =>
    addItem({
      kind: 'bundle',
      slug: bundle.slug,
      name: bundle.name,
      priceCents: bundle.priceCents,
      image: bundle.image,
    })

  const handleRequestBundle = () => {
    addBundleToBasket()
    navigate('/request-order')
  }

  const shopUrl = typeof window !== 'undefined' ? `${window.location.origin}/shop` : '/shop'

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-product bg-white shadow-card ring-1 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift ${
        isImpact ? 'ring-red-200' : 'ring-line'
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={bundleImg}
          alt={bundle.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.05]"
        />
        {isImpact && (
          <div className="absolute inset-0 bg-gradient-to-t from-red-500/25 via-transparent to-transparent" />
        )}
        <div className="absolute right-3 top-3">
          <ShareButton
            name={bundle.name}
            title={bundle.name}
            text={bundle.description}
            url={shopUrl}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        {isImpact && (
          <span className="flex w-fit items-center gap-1.5 rounded-pill bg-red-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-red-600">
            <ImpactIcon className="h-3 w-3" strokeWidth={2.2} />
            Buy one, support one
          </span>
        )}
        <h3 className="font-serif text-xl text-charcoal">{bundle.name}</h3>
        <p className="text-sm leading-relaxed text-muted">
          {bundle.description}
        </p>
        <ul className="flex flex-wrap gap-2 text-xs text-muted">
          {bundle.includes.map((item) => (
            <li
              key={item}
              className="rounded-pill bg-oat px-2.5 py-1"
            >
              {item}
            </li>
          ))}
        </ul>
        {isImpact && (
          <p className="rounded-card bg-red-50 px-3 py-2 text-xs leading-relaxed text-red-700">
            Every purchase contributes one wellness pack toward our next community outreach activity.
          </p>
        )}

        <span className="mt-auto pt-3 font-serif text-lg text-green-700">
          {formatPrice(bundle.priceCents)}
        </span>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleRequestBundle}
            className="rounded-pill border border-green-700/30 px-4 py-2.5 text-sm font-semibold text-green-700 transition-colors duration-300 ease-premium hover:bg-green-700/5"
          >
            Request bundle
          </button>
          <button
            type="button"
            onClick={addBundleToBasket}
            className={`rounded-pill px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 ease-premium hover:shadow-lift active:scale-[0.98] ${
              isImpact ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-700'
            }`}
          >
            Add to basket
          </button>
        </div>
      </div>
    </article>
  )
}
