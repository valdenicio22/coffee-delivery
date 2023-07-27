import { CartItem } from '../../context/CartContext'
import { ActionType, StateAction } from './actions'

interface CartState {
  cartItems: CartItem[]
}

export function cartReducer(state: CartState, action: StateAction) {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      const { cartItems } = state
      const isProductAlreadyInCart = cartItems.findIndex(
        (item) => item.id === action.payload.newProduct.id,
      )

      if (isProductAlreadyInCart >= 0) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === action.payload.newProduct.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.newProduct.quantity,
              }
            : item,
        )
        return {
          cartItems: updatedCartItems,
        }
      }
      return {
        cartItems: [...cartItems, action.payload.newProduct],
      }
    }
    case ActionType.REMOVE_FROM_CART: {
      const { cartItems } = state
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== action.payload.productId,
      )
      return {
        cartItems: updatedCartItems,
      }
    }
    case ActionType.ON_PRODUCT_QUANTITY_CHANGE: {
      const { cartItems } = state
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          return {
            ...item,
            quantity:
              action.payload.type === 'increase'
                ? item.quantity + 1
                : item.quantity - 1,
          }
        }
        return item
      })
      return {
        cartItems: updatedCartItems,
      }
    }
    case ActionType.CLEAR_CART: {
      return {
        cartItems: [],
      }
    }
  }
  return state
}
