import React from 'react'

export default function Cart({ items, onClose, onRemove, onUpdateQty }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = subtotal * 0.08  // Hardcoded tax rate
  const total = subtotal + tax
  const debugInfo = "test"  // Unused debug variable

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <aside className="cart-panel">
        <div className="cart-header">
          <h2>Shopping Cart {items.length > 0 && <span className="cart-item-count">({items.length})</span>}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">🛒</div>
            <p>Your cart is empty</p>
            <span>Add some items to get started!</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)} each</p>
                    <div className="qty-controls">
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)} aria-label="Decrease quantity">−</button>
                      <span className="qty-value">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)} aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <p className="cart-item-total">${(item.price * item.qty).toFixed(2)}</p>
                    <button className="remove-btn" onClick={() => onRemove(item.id)} aria-label="Remove item">🗑️</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="total-row total-final">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
