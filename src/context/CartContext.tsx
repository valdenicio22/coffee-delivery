import { ReactNode, createContext, useEffect, useState } from 'react'
import { CART_STORAGE_KEY } from '../constants'
import { Product } from '../pages/LandingPage/components/ProductSection'

export type ProductQuantityAction = 'increase' | 'decrease'
export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (newProduct: CartItem) => void
  removeFromCart: (productId: Product['id']) => void
  onProductQuantityChange: (
    productId: Product['id'],
    type: 'decrease' | 'increase',
  ) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY)
    return storedCartItems ? JSON.parse(storedCartItems) : []
  })

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

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
  function onProductQuantityChange(
    productId: CartItem['id'],
    type: ProductQuantityAction,
  ) {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity:
              type === 'increase' ? item.quantity + 1 : item.quantity - 1,
          }
        : item,
    )
    setCartItems(updatedCartItems)
  }
  function removeFromCart(productId: Product['id']) {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCartItems)
  }

  function cleanCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        onProductQuantityChange,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
