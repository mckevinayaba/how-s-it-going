import { useNavigate } from 'react-router-dom'
import type { Bundle } from '@/types'
import bundleImg from '@/assets/bundle-scene.jpg'
import { ChatIcon, ImpactIcon } from '@/components/icons'
import { ShareButton } from '@/components/product/ShareButton'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { DELIVERY_CITIES_NOTE } from '@/lib/delivery'

export function BundleCard({ bundle }: { bundle: Bundle }) {
  const { addItem } = useCart()
  const navigate = useNavigate()
  const isImpact = Boolean(bundle.isImpactBundle)

  const addBundleToBasket = () =>
    addItem({
      kind: 'bundle',
      slug: bundle.slug,
      name: bundle.name,
      priceFcfa: bundle.priceConfirmed ? bundle.priceFcfa : 0,
      priceConfirmed: bundle.priceConfirmed,
      image: bundle.image,
      variantLabel: bundle.basketLabel,
    })

  const handleRequestBundle = () => {
    addBundleToBasket()
    navigate('/request-order')
  }

  const shopUrl = typeof window !== 'undefined' ? `${window.location.origin}/shop` : '/shop'

  const whatsappShareMessage = bundle.priceConfirmed
    ? `I found the ${bundle.name} on HappyMe Health for ${formatPrice(bundle.priceFcfa)}. ${bundle.description} Orders are confirmed by WhatsApp or phone.\n\n${shopUrl}`
    : `I found the ${bundle.name} on HappyMe Health. ${bundle.description} Price is confirmed after an order request. Orders are confirmed by WhatsApp or phone.\n\n${shopUrl}`

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
        <div className="absolute right-3 top-3 flex gap-2">
          <ShareButton
            name={bundle.name}
            title={bundle.name}
            text={bundle.description}
            url={shopUrl}
          />
          <a
            href={buildWhatsAppLink(whatsappShareMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share ${bundle.name} on WhatsApp`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-soft backdrop-blur transition-transform duration-200 ease-premium hover:scale-110 active:scale-95"
          >
            <ChatIcon className="h-[18px] w-[18px] text-charcoal/70" strokeWidth={1.8} />
          </a>
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

        <div className="mt-auto pt-3">
          {bundle.priceConfirmed ? (
            <span className="font-serif text-lg text-green-700">
              {formatPrice(bundle.priceFcfa)}
            </span>
          ) : (
            <span className="block text-sm font-semibold text-green-700">
              Price confirmed after order request
            </span>
          )}
        </div>

        <p className="text-xs leading-relaxed text-muted">{DELIVERY_CITIES_NOTE}</p>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleRequestBundle}
            className="rounded-pill border border-green-700/30 px-4 py-2.5 text-sm font-semibold text-green-700 transition-colors duration-300 ease-premium hover:bg-green-700/5"
          >
            {bundle.requestLabel ?? 'Request bundle'}
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
