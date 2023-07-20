import { Trash } from '@phosphor-icons/react'
import { CartItem } from '../../context/CartContext'
import { useCart } from '../../hooks/useCart'
import { ProductQuantityAction } from '../../reducers/products/actions'
import { ProductQuantity } from '../ProductQuantity'
import { RegularText } from '../Typography'

interface ProductCartCardProps {
  product: CartItem
}

export function ProductCartCard({ product }: ProductCartCardProps) {
  const { photo, name, price, quantity } = product
  const { onProductQuantityChange, removeFromCart } = useCart()

  function handleProductQuantityChange(type: ProductQuantityAction) {
    onProductQuantityChange(product.id, type)
  }
  function handleRemoveFromCart() {
    removeFromCart(product.id)
  }
  return (
    <>
      <div className="flex items-center">
        <img src={photo} alt={product.name} className="h-16 w-16 mr-5" />
        <div className="flex flex-col gap-2 mr-10">
          <RegularText color="subtitle" weight="bold">
            {name}
          </RegularText>
          <div className="flex items-center gap-2">
            <ProductQuantity
              productQuantity={quantity}
              onQuantityChange={handleProductQuantityChange}
            />
            <button
              className="flex items-center gap-1 p-2 bg-base-button rounded-md"
              onClick={handleRemoveFromCart}
            >
              <Trash size={16} className="text-brand-purple" />
              <RegularText size="xs" className="uppercase">
                Remover
              </RegularText>
            </button>
          </div>
        </div>
        <RegularText as="strong" weight="bold" className="self-start">
          R$ {(price * product.quantity).toFixed(2)}
        </RegularText>
      </div>
      <hr className="text-base-button my-6" />
    </>
  )
}
