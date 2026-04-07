import React from 'react'

export default function Header({ cartCount, onCartOpen }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">ShopCart</span>
        </div>
        <button className="cart-btn" onClick={onCartOpen}>
          <span className="cart-icon">🛒</span>
          <span className="cart-label">Cart</span>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount > 99 ? '99+' : cartCount}</span>
          )}
        </button>
      </div>
    </header>
  )
}
