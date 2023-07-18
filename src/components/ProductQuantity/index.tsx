import { Minus, Plus } from '@phosphor-icons/react'
import { RegularText } from '../Typography'

interface ProductQuantityProps {
  onQuantityChange(type: 'increase' | 'decrease'): void
  productQuantity: number
}

export function ProductQuantity({
  productQuantity,
  onQuantityChange,
}: ProductQuantityProps) {
  return (
    <div className="flex items-center justify-center gap-2 w-[4.5rem] h-8 p-2 bg-base-button rounded-md ">
      <button
        className="text-brand-purple enabled:hover:text-brand-purple-dark disabled:cursor-not-allowed"
        onClick={() => onQuantityChange('decrease')}
        disabled={productQuantity <= 1}
      >
        <Minus size={14} />
      </button>
      <RegularText color="title">{productQuantity}</RegularText>
      <button
        className="text-brand-purple hover:text-brand-purple-dark"
        onClick={() => onQuantityChange('increase')}
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
