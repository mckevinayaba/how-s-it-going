import { NavLink, Link } from 'react-router-dom'
import { AccountIcon, CartIcon } from '@/components/icons'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/happyme-logo.png'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/impact', label: 'Impact' },
  { to: '/learn', label: 'Learn' },
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support' },
] as const

export function Header() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-warm/90 backdrop-blur-md">
      <div className="container-page flex h-24 items-center justify-between gap-4 sm:h-28 lg:h-32">
        <Link to="/" aria-label="HappyMe Health — home" className="flex items-center">
          <img
            src={logo}
            alt="HappyMe Health"
            className="h-20 w-auto object-contain sm:h-24 lg:h-28"
            draggable={false}
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-green-700'
                    : 'text-charcoal hover:text-green-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/account"
            aria-label="Account"
            className="hidden text-charcoal transition-colors hover:text-green-700 sm:inline-flex"
          >
            <AccountIcon className="h-5 w-5" />
          </Link>
          <Link
            to="/cart"
            aria-label={`Basket, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            className="relative text-charcoal transition-colors hover:text-green-700"
          >
            <CartIcon className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-pill bg-red-500 px-1 text-[0.6rem] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <Button to="/shop" size="md" className="ml-1 hidden lg:inline-flex">
            Shop products
          </Button>
        </div>
      </div>
    </header>
  )
}

