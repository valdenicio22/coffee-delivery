import { CartItem } from '../../context/CartContext'
import { Product } from '../../pages/LandingPage/components/ProductSection'

export type ProductQuantityAction = 'increase' | 'decrease'

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ON_PRODUCT_QUANTITY_CHANGE = 'ON_PRODUCT_QUANTITY_CHANGE',
  CLEAR_CART = 'CLEAR_CART',
}

export type StateAction =
  | {
      type: ActionType.ADD_TO_CART
      payload: { newProduct: CartItem }
    }
  | {
      type: ActionType.REMOVE_FROM_CART
      payload: { productId: Product['id'] }
    }
  | {
      type: ActionType.ON_PRODUCT_QUANTITY_CHANGE
      payload: { productId: Product['id']; type: ProductQuantityAction }
    }
  | {
      type: ActionType.CLEAR_CART
    }

export const addToCartAction = (newProduct: CartItem): StateAction => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: { newProduct },
  }
}
export const removeFromCartAction = (productId: Product['id']): StateAction => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: { productId },
  }
}
export const productQuantityChangeAction = (
  productId: Product['id'],
  type: ProductQuantityAction,
): StateAction => {
  return {
    type: ActionType.ON_PRODUCT_QUANTITY_CHANGE,
    payload: { productId, type },
  }
}
export const clearCartAction = (): StateAction => {
  return {
    type: ActionType.CLEAR_CART,
  }
}
