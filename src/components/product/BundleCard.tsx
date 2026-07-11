import type { Bundle } from '@/types'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'

export function BundleCard({ bundle }: { bundle: Bundle }) {
  const { addItem } = useCart()

  return (
    <article className="flex flex-col overflow-hidden rounded-product bg-white shadow-card ring-1 ring-line">
      <PlaceholderImage
        spec={bundle.image}
        rounded="rounded-none"
        className="aspect-[16/10] w-full"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        {bundle.isImpactBundle && (
          <span className="w-fit rounded-pill bg-red-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-red-600">
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
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-serif text-lg text-green-700">
            {formatPrice(bundle.priceCents)}
          </span>
          <button
            type="button"
            onClick={() =>
              addItem({
                kind: 'bundle',
                slug: bundle.slug,
                name: bundle.name,
                priceCents: bundle.priceCents,
                image: bundle.image,
              })
            }
            className="rounded-pill bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700"
          >
            Add bundle
          </button>
        </div>
      </div>
    </article>
  )
}
