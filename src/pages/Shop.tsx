import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProductCard } from '@/components/product/ProductCard'
import { BundleCard } from '@/components/product/BundleCard'
import { products } from '@/data/products'
import { bundles } from '@/data/bundles'
import type { ProductCategory } from '@/types'

type Filter = 'all' | ProductCategory | 'bundles'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'sweeteners', label: 'Sweeteners' },
  { key: 'spices', label: 'Spices' },
  { key: 'snacks', label: 'Snacks' },
  { key: 'bundles', label: 'Bundles' },
]

const SHOP_BY_NEED: { label: string; filter: Filter }[] = [
  { label: 'Better everyday sweetening', filter: 'sweeteners' },
  { label: 'Daily kitchen wellness', filter: 'spices' },
  { label: 'Natural snacking', filter: 'snacks' },
  { label: 'Family starter bundles', filter: 'bundles' },
  { label: 'Community support packs', filter: 'bundles' },
]

export function Shop() {
  const [filter, setFilter] = useState<Filter>('all')

  const visibleProducts = useMemo(() => {
    if (filter === 'all') return products
    if (filter === 'bundles') return []
    return products.filter((product) => product.category === filter)
  }, [filter])

  return (
    <div className="py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="Shop"
          heading="Nourishing everyday staples"
          intro="Simple, honest products built from a family kitchen — sweeteners, spices, and snacks for more mindful everyday choices."
        />

        {/* Filter bar */}
        <div
          role="tablist"
          aria-label="Filter products"
          className="mt-8 flex flex-wrap gap-2"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={`rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-300 ease-premium ${
                filter === key
                  ? 'bg-green-500 text-white'
                  : 'bg-oat text-charcoal hover:bg-oat-dark'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Product grid or bundles */}
        {filter !== 'bundles' ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
            {visibleProducts.length === 0 && (
              <p className="col-span-full text-sm text-muted">
                No products in this category yet.
              </p>
            )}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map((bundle) => (
              <BundleCard key={bundle.slug} bundle={bundle} />
            ))}
          </div>
        )}
      </div>

      {/* Bundles section (always visible below the filtered grid) */}
      {filter !== 'bundles' && (
        <div className="container-page mt-20">
          <SectionHeading eyebrow="Bundles" heading="Save with a bundle" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map((bundle) => (
              <BundleCard key={bundle.slug} bundle={bundle} />
            ))}
          </div>
        </div>
      )}

      {/* Shop by need */}
      <div className="container-page mt-20">
        <SectionHeading eyebrow="Shop by need" heading="What are you looking for today?" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SHOP_BY_NEED.map((need) =>
            need.filter === 'bundles' && need.label === 'Community support packs' ? (
              <Link
                key={need.label}
                to="/support"
                className="rounded-xl2 bg-white p-5 text-sm font-medium text-charcoal shadow-soft ring-1 ring-line transition-colors hover:text-green-700"
              >
                {need.label}
              </Link>
            ) : (
              <button
                key={need.label}
                type="button"
                onClick={() => setFilter(need.filter)}
                className="rounded-xl2 bg-white p-5 text-left text-sm font-medium text-charcoal shadow-soft ring-1 ring-line transition-colors hover:text-green-700"
              >
                {need.label}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
