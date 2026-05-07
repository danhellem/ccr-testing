import { ShoppingCart, Sun, Moon, Store, Heart } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  wishlistCount: number
  onCartOpen: () => void
  onWishlistOpen: () => void
  darkMode: boolean
  onToggleTheme: () => void
}

export default function Header({ cartCount, wishlistCount, onCartOpen, onWishlistOpen, darkMode, onToggleTheme }: HeaderProps) {
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
          <button className="wishlist-btn" onClick={onWishlistOpen} aria-label="Open wishlist">
            <Heart size={18} />
            <span className="cart-label">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="cart-badge wishlist-badge">{wishlistCount > 99 ? '99+' : wishlistCount}</span>
            )}
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
