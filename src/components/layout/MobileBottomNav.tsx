import { NavLink } from 'react-router-dom'
import { CartIcon, HomeIcon, ImpactIcon, LearnIcon, ShopIcon } from '@/components/icons'
import { useCart } from '@/context/CartContext'

const NAV_ITEMS = [
  { to: '/', label: 'Home', Icon: HomeIcon, end: true },
  { to: '/shop', label: 'Shop', Icon: ShopIcon, end: false },
  { to: '/impact', label: 'Impact', Icon: ImpactIcon, end: false },
  { to: '/learn', label: 'Learn', Icon: LearnIcon, end: false },
  { to: '/cart', label: 'Basket', Icon: CartIcon, end: false },
] as const

export function MobileBottomNav() {
  const { itemCount } = useCart()

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-warm/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-xl lg:hidden"
    >
      <ul className="flex items-stretch justify-between px-1.5">
        {NAV_ITEMS.map(({ to, label, Icon, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative flex h-[4.25rem] flex-col items-center justify-center gap-1 text-[0.68rem] font-medium tracking-wide transition-colors duration-300 ease-premium ${
                  isActive ? 'text-green-700' : 'text-muted hover:text-charcoal'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    aria-hidden
                    className={`absolute left-1/2 top-1.5 h-0.5 w-8 -translate-x-1/2 rounded-pill bg-green-500 transition-all duration-300 ease-premium ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-pill transition-all duration-300 ease-premium ${
                      isActive ? 'bg-green-50' : 'bg-transparent'
                    }`}
                  >
                    <Icon
                      className={`h-[1.35rem] w-[1.35rem] transition-transform duration-300 ease-premium ${
                        isActive ? 'scale-105' : ''
                      }`}
                      strokeWidth={isActive ? 2 : 1.6}
                    />
                    {label === 'Basket' && itemCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-pill bg-red-500 px-1 text-[0.55rem] font-semibold text-white ring-2 ring-warm">
                        {itemCount}
                      </span>
                    )}
                  </span>
                  <span className="leading-none">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
