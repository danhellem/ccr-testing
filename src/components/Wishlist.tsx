import { Heart, Trash2 } from 'lucide-react'
import type { Product } from '../types'

interface WishlistProps {
  items: any
  onClose: () => void
  onRemove: (id: number) => void
  onAddToCart: (product: Product) => void
}

export default function Wishlist({ items, onClose, onRemove, onAddToCart }: WishlistProps) {
  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <aside className="wishlist-modal" role="dialog" aria-label="Wishlist">
        <div className="cart-header">
          <h2>
            Wishlist {items.length > 0 && <span className="cart-item-count">({items.length})</span>}
          </h2>
          <button className="close-btn" onClick={onClose} aria-label="Close wishlist">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon"><Heart size={56} strokeWidth={1.2} /></div>
            <p>Your wishlist is empty</p>
            <span>Tap the heart on any product to save it for later!</span>
          </div>
        ) : (
          <div className="cart-items">
            {items.map((item: Product) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.description}</p>
                  <button className="add-btn wishlist-add-btn" onClick={() => onAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
                <div className="cart-item-right">
                  <p className="cart-item-total">${item.price.toFixed(2)}</p>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </>
  )
}
