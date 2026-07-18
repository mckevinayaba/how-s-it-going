import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import heroImg from '@/assets/hero-scene.jpg'
import founderImg from '@/assets/founder-kitchen.jpg'
import bundleImg from '@/assets/bundle-scene.jpg'

import { ProductCard } from '@/components/product/ProductCard'
import { BundleCard } from '@/components/product/BundleCard'
import { MetricCard } from '@/components/impact/MetricCard'
import { SupportCard } from '@/components/support/SupportCard'
import { LeafIcon, ImpactIcon, ShieldIcon } from '@/components/icons'
import { products } from '@/data/products'
import { bundles, getBundleBySlug } from '@/data/bundles'
import { impactMetrics } from '@/data/impact'
import { supportOptions } from '@/data/support'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { DeliveryTrustStrip } from '@/components/ui/DeliveryTrustStrip'
import { DELIVERY_CITIES_NOTE } from '@/lib/delivery'

const PROOF_STRIPS = [
  { label: 'Natural everyday products', Icon: LeafIcon },
  { label: 'Rooted in lived family experience', Icon: ImpactIcon },
  { label: 'Backed by documented community outreach', Icon: ShieldIcon },
]

export function Home() {
  usePageMeta(
    'HappyMe Health | Better Everyday Food Choices for Individuals and Families',
    'HappyMe Health creates nourishing everyday products for individuals and families making more mindful choices in the kitchen, while supporting health education and screening outreach in communities with limited access to care.',
  )
  const { addItem } = useCart()
  const navigate = useNavigate()
  const starterPack = getBundleBySlug('starter-wellness-pack')

  const handleRequestStarterPack = () => {
    if (!starterPack) return
    addItem({
      kind: 'bundle',
      slug: starterPack.slug,
      name: starterPack.name,
      priceFcfa: starterPack.priceFcfa,
      priceConfirmed: starterPack.priceConfirmed,
      image: starterPack.image,
      variantLabel: starterPack.basketLabel,
    })
    navigate('/request-order')
  }

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-warm pb-10 pt-8 sm:pb-24 sm:pt-16 lg:pt-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.4rem]">
              Better everyday <span className="text-green-600">food choices</span> for
              individuals and families who take health seriously.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              HappyMe Health creates nourishing everyday products for
              individuals and families making more mindful choices in the
              kitchen, while supporting health education and screening
              outreach in communities with limited access to care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/shop" size="lg">
                Shop products
              </Button>
              <Button to="/support" variant="outline" size="lg">
                Support outreach
              </Button>
            </div>
            <p className="mt-8 text-sm font-medium italic text-muted">
              Built from lived experience with chronic illness. Made for
              everyday homes and real communities.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-5 border-t border-line pt-8 sm:grid-cols-3">
              {PROOF_STRIPS.map(({ label, Icon }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="pt-1 text-sm font-medium text-charcoal">
                    {label}
                  </span>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-product shadow-lift lg:aspect-[5/6]">
              <img
                src={heroImg}
                alt="Date Sugar, Turmeric, and Tigernuts on a warm kitchen counter"
                width={1200}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl2 bg-white px-4 py-3 shadow-lift ring-1 ring-line sm:left-6">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full ring-2 ring-white" style={{ backgroundColor: '#1FA64A' }} />
                <span className="h-7 w-7 rounded-full ring-2 ring-white" style={{ backgroundColor: '#F0B23D' }} />
                <span className="h-7 w-7 rounded-full ring-2 ring-white" style={{ backgroundColor: '#B98A4E' }} />
              </div>
              <span className="text-xs font-semibold text-charcoal">
                Date Sugar · Turmeric · Tigernuts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Order flow trust strip */}
      <DeliveryTrustStrip />

      {/* Starter pack highlight */}
      {starterPack && (
        <section className="bg-warm py-16 sm:py-24">
          <div className="container-page">
            <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-product bg-oat shadow-card ring-1 ring-line lg:grid-cols-2">
              <div className="aspect-[16/10] w-full lg:aspect-auto">
                <img
                  src={bundleImg}
                  alt={starterPack.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="w-fit rounded-pill bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  Most popular
                </span>
                <h2 className="mt-4 font-serif text-2xl text-charcoal sm:text-3xl">
                  The easiest way to begin.
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                  Date Sugar, Turmeric, and Tigernuts in one thoughtful
                  household starter pack for individuals and families making
                  more mindful everyday food choices.
                </p>
                {starterPack.priceConfirmed ? (
                  <span className="mt-4 font-serif text-2xl text-green-700">
                    {formatPrice(starterPack.priceFcfa)}
                  </span>
                ) : (
                  <span className="mt-4 block font-serif text-xl text-green-700">
                    Price confirmed after order request
                  </span>
                )}
                <p className="mt-3 max-w-md text-xs leading-relaxed text-muted">{DELIVERY_CITIES_NOTE}</p>
                <button
                  type="button"
                  onClick={handleRequestStarterPack}
                  className="mt-6 w-fit rounded-pill bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-green-700 hover:shadow-lift active:scale-[0.98]"
                >
                  Request starter pack
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Featured products */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured products"
              heading="Start with simple, nourishing staples"
              intro="Our products did not start as trends. They started as practical answers inside one family’s kitchen, when health challenges forced a change in how we cook, sweeten, and snack."
            />
            <Button to="/shop" variant="ghost" className="shrink-0">
              Shop all products
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bundles */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Bundles"
            heading="Thoughtful bundles for real households"
            intro="Pack the essentials together for family kitchens, caregiving, and everyday wellness routines."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map((bundle) => (
              <BundleCard key={bundle.slug} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder story */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 aspect-[4/5] w-full overflow-hidden rounded-product shadow-card lg:order-1">
            <img
              src={founderImg}
              alt="A warm family kitchen scene with turmeric tea, dates, tigernuts, and a handwritten recipe notebook"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our story"
              heading="This brand was born inside a family kitchen"
              intro="HappyMe Health started as a personal response to chronic illness. A father living with hypertension. A sister growing up with type 1 diabetes. A grandmother lost to stroke. These moments turned health from something abstract into something painfully real. They pushed us to rethink how we cook, what we keep in our cupboards, and what kind of care we pass on to our communities."
            />
            <Button to="/about" variant="outline" className="mt-8">
              Read our story
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Impact proof */}
      <section className="bg-green-700 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            tone="light"
            eyebrow="HappyMe Health Impact"
            heading="Our impact work: Health in community, not only at home"
            intro="Alongside selling products, HappyMe Health supports health outreach work focused on awareness, early screening, and simple tools for care."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {impactMetrics.map((metric) => (
              <MetricCard key={metric.location} metric={metric} />
            ))}
          </div>
          <Button to="/impact" variant="inverse" size="lg" className="mt-10">
            See our impact reports
          </Button>
        </div>
      </section>

      {/* 6. Support outreach */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Support"
            heading="Support health outreach in communities that need it most"
            intro="Our project reports show a consistent pattern: when communities are mobilised, people come. What holds us back is practical: funding, transport, materials, and tools. Support from individuals and partners directly shapes how many people we can reach next."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {supportOptions.map((option) => (
              <SupportCard key={option.slug} option={option} />
            ))}
          </div>
          <Button to="/support" size="lg" className="mt-10">
            Explore support options
          </Button>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-green-800 py-16 sm:py-24">
        <div className="container-page max-w-2xl text-center mx-auto">
          <h2 className="text-balance font-serif text-3xl text-white sm:text-4xl">
            Be part of healthier homes and stronger communities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            You can support this work in two ways: by choosing better
            everyday products for you and your family, and by helping us
            reach more individuals and families with simple, practical
            health outreach. Every step matters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/shop" variant="inverse" size="lg">
              Buy products
            </Button>
            <Button to="/support" variant="secondary" size="lg">
              Support outreach
            </Button>
            <Button to="/contact" variant="inverse-outline" size="lg">
              Partner with us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
