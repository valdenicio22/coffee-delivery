import { ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'
import { CartItem, ProductQuantityAction } from '../../context/CartContext'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../pages/LandingPage/components/ProductSection'
import { formatMoney } from '../../utils/formatMoney'
import { ProductQuantity } from '../ProductQuantity'
import { ProductTag } from '../ProductTag'
import { RegularText, TitleText } from '../Typography'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [productQuantity, setProductQuantity] = useState(1)

  const { addToCart } = useCart()

  const { description, name, photo, price, tags } = product
  const formattedPrice = formatMoney(price)

  function handleAddToCart() {
    const productToCart: CartItem = { ...product, quantity: productQuantity }
    addToCart(productToCart)
  }
  function handleQuantityChange(type: ProductQuantityAction) {
    if (type === 'increase') {
      setProductQuantity((state) => state + 1)
    } else {
      setProductQuantity((state) => state - 1)
    }
  }

  return (
    <div className="productCard">
      <div className="flex flex-col items-center">
        <img
          src={photo}
          alt="Coffee image"
          className="mb-3 -mt-5 w-[7.5rem] h-[7.5rem]"
        />
        <div className="flex items-center gap-1">
          {tags.map((tag) => (
            <ProductTag key={`${name}-${tag}`}>{tag}</ProductTag>
          ))}
        </div>
      </div>

      <div className="text-center mt-4 mb-8">
        <TitleText size="sm" color="subtitle">
          {name}
        </TitleText>
        <RegularText size="sm" color="label" className="text-center mt-2 ">
          {description}
        </RegularText>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <RegularText as="span" weight="bold" size="sm">
            R$
          </RegularText>
          <TitleText size="md" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <div className="w-[7.5rem] flex items-center gap-2">
          <ProductQuantity
            onQuantityChange={handleQuantityChange}
            productQuantity={productQuantity}
          />
          <button
            type="button"
            className="text-base-card p-2 rounded-md bg-brand-purple-dark hover:bg-brand-purple"
            onClick={handleAddToCart}
          >
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}
