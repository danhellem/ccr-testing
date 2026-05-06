export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  reviews: number
  image: string
  description: string
}

export interface CartItem extends Product {
  qty: number
}
