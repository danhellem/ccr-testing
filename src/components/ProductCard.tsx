import type { Product } from '../types'

interface StarRatingProps {
  rating: number
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={n <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
      <span className="rating-value">{rating}</span>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  onAdd: (product: Product) => void
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="category-badge">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-rating">
          <StarRating rating={product.rating} />
          <span className="review-count">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-btn" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
