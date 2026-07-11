import { NavLink, Link } from 'react-router-dom'
import { AccountIcon, CartIcon } from '@/components/icons'
import { Mascot } from '@/components/Mascot'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'

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
    <header className="sticky top-0 z-40 hidden border-b border-line bg-warm/90 backdrop-blur-md lg:block">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <Mascot className="h-9 w-9" />
          <span className="font-serif text-lg tracking-tight text-green-700">
            HappyMe <span className="text-red-600">Health</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-9">
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
            className="text-charcoal transition-colors hover:text-green-700"
          >
            <AccountIcon className="h-5 w-5" />
          </Link>
          <Link
            to="/cart"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            className="relative text-charcoal transition-colors hover:text-green-700"
          >
            <CartIcon className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-pill bg-red-500 px-1 text-[0.6rem] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <Button to="/shop" size="md" className="ml-1">
            Shop products
          </Button>
        </div>
      </div>
    </header>
  )
}
