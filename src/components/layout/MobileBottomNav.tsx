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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-warm/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur lg:hidden"
    >
      <ul className="flex items-stretch justify-between px-2">
        {NAV_ITEMS.map(({ to, label, Icon, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative flex h-16 flex-col items-center justify-center gap-1 text-[0.68rem] font-medium transition-colors ${
                  isActive ? 'text-green-500' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative">
                    <Icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.6} />
                    {label === 'Basket' && itemCount > 0 && (
                      <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-pill bg-red-500 px-1 text-[0.55rem] font-semibold text-white">
                        {itemCount}
                      </span>
                    )}
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
