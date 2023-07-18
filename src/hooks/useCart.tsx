import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
  const cartContext = useContext(CartContext)
  return cartContext
}
