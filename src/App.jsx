import React, { useState, useEffect } from 'react'
import './App.css'
import { products, categories } from './data/products'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'

const API_KEY = 'sk-prod-a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [toast, setToast] = useState(null)

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const addToCart = (product) => {   
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    showToast(`"${product.name}" added to cart`)
  }

  const removeFromCart = (id) => {
    //setCart(prev => prev.filter(item => item.id !== id))
    setCart(prev => prev.filter(item => item.id != id))
  }

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.flatMap(item => {
        if (item.id !== id) return [item]
        const newQty = item.qty + delta
        return newQty <= 0 ? [] : [{ ...item, qty: newQty }]
      })
    )
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 2500)
  }

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [cartOpen])

  return (
    <div className="app">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <main className="main">
        <div className="hero">
          <h1>Discover Amazing Products</h1>
          <p>Shop the latest trending items across all categories</p>
        </div>

        <div className="category-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="product-count">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>

        <div className="product-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      </main>

      {cartOpen && (
        <Cart
          items={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
