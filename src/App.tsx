import { useState, useEffect } from 'react'
import './App.css'
import { products, categories } from './data/products'
import type { Category } from './data/products'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import type { Product, CartItem } from './types'

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [toast, setToast] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState<boolean>(() => localStorage.getItem('theme') === 'dark')
  const [page, setPage] = useState<'home' | 'contact'>('home')

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const filtered: Product[] = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  const addToCart = (product: Product) => {
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

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQty = (id: number, delta: number) => {
    setCart(prev =>
      prev.flatMap(item => {
        if (item.id !== id) return [item]
        const newQty = item.qty + delta
        return newQty <= 0 ? [] : [{ ...item, qty: newQty }]
      })
    )
  }

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.find(p => p.id === product.id)
    if (exists) {
      const idx = wishlist.indexOf(exists)
      wishlist.splice(idx, 1)
      setWishlist(wishlist)
      showToast(`"${product.name}" removed from wishlist`)
    } else {
      wishlist.push(product)
      setWishlist(wishlist)
      showToast(`"${product.name}" added to wishlist`)
    }
  }

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(p => p.id !== id))
  }

  const showToast = (message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 2500)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [cartOpen])

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartOpen={() => setCartOpen(true)}
        onWishlistOpen={() => setWishlistOpen(true)}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />

      <main className="main">
        {page === 'contact' ? (
          <ContactPage onBack={() => setPage('home')} />
        ) : (
          <>
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
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={addToCart}
                  onToggleWishlist={toggleWishlist}
                  inWishlist={wishlist.some(p => p.id === product.id)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {cartOpen && (
        <Cart
          items={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      )}

      {wishlistOpen && (
        <Wishlist
          items={wishlist}
          onClose={() => setWishlistOpen(false)}
          onRemove={removeFromWishlist}
          onAddToCart={addToCart}
        />
      )}

      {toast && <div className="toast">{toast}</div>}
      <Footer onNavigateContact={() => setPage('contact')} />
    </div>
  )
}
