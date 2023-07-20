import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { CART_STORAGE_KEY } from '../constants'
import { Product } from '../pages/LandingPage/components/ProductSection'
import {
  ProductQuantityAction,
  addToCartAction,
  clearCartAction,
  productQuantityChangeAction,
  removeFromCartAction,
} from '../reducers/products/actions'
import { cartReducer } from '../reducers/products/reduces'

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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
    },
    (initialValue) => {
      const storageCartItems = localStorage.getItem(CART_STORAGE_KEY)
      return storageCartItems
        ? { cartItems: JSON.parse(storageCartItems) }
        : initialValue
    },
  )
  const { cartItems } = cartState

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(newProduct: CartItem) {
    dispatch(addToCartAction(newProduct))
  }

  function onProductQuantityChange(
    productId: CartItem['id'],
    type: ProductQuantityAction,
  ) {
    dispatch(productQuantityChangeAction(productId, type))
  }

  function removeFromCart(productId: Product['id']) {
    dispatch(removeFromCartAction(productId))
  }

  function cleanCart() {
    dispatch(clearCartAction())
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
