import { ShoppingCart, Sun, Moon, Store } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  onCartOpen: () => void
  darkMode: boolean
  onToggleTheme: () => void
}

export default function Header({ cartCount, onCartOpen, darkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <Store size={24} className="logo-icon-svg" />
          <span className="logo-text">Contoso Product Catalog</span>
        </div>
        <div className="header-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="cart-btn" onClick={onCartOpen}>
            <ShoppingCart size={18} />
            <span className="cart-label">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount > 99 ? '99+' : cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
