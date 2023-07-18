import { ReactNode, createContext, useState } from 'react'
import { Product } from '../pages/LandingPage/components/ProductSection'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (newProduct: CartItem) => void
  removeFromCart: (productId: CartItem['id']) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(newProduct: CartItem) {
    const isProductAlreadyInCart = cartItems.findIndex(
      (item) => item.id === newProduct.id,
    )

    if (isProductAlreadyInCart >= 0) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === newProduct.id
          ? { ...item, quantity: item.quantity + newProduct.quantity }
          : item,
      )
      setCartItems(updatedCartItems)
      return
    }
    setCartItems((state) => [...state, newProduct])
  }
  function removeFromCart(productId: CartItem['id']) {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCartItems)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
