import { Link } from 'react-router-dom'
import logo from '@/assets/happyme-logo.png'

const SHOP_LINKS = [
  { to: '/shop', label: 'All products' },
  { to: '/product/date-sugar', label: 'Date Sugar' },
  { to: '/product/turmeric', label: 'Turmeric' },
  { to: '/product/tigernuts', label: 'Tigernuts' },
]

const COMPANY_LINKS = [
  { to: '/about', label: 'About us' },
  { to: '/learn', label: 'Learn' },
  { to: '/contact', label: 'Contact' },
]

const IMPACT_LINKS = [
  { to: '/impact', label: 'Our impact work' },
  { to: '/support', label: 'Support outreach' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-green-700 pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="container-page grid grid-cols-2 gap-10 py-14 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Link
            to="/"
            aria-label="HappyMe Health — home"
            className="inline-flex items-center justify-center rounded-xl2 bg-white px-6 py-5 shadow-soft"
          >
            <img
              src={logo}
              alt="HappyMe Health"
              className="h-28 w-auto object-contain sm:h-32"
              draggable={false}
            />
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Nourishing everyday products for families making more mindful
            kitchen choices — and outreach that supports health education and
            screening in communities with limited access to care.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/55">
            Shop
          </h3>
          <ul className="mt-4 space-y-3">
            {SHOP_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/55">
            Company
          </h3>
          <ul className="mt-4 space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/55">
            HappyMe Health Impact
          </h3>
          <ul className="mt-4 space-y-3">
            {IMPACT_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs leading-relaxed text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} HappyMe Health. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            HappyMe Health products are food items and do not constitute
            medical treatment or advice. Always consult a qualified health
            professional regarding your personal health needs.
          </p>
        </div>
      </div>
    </footer>
  )
}
