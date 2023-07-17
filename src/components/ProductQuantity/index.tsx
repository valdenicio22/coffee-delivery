import { Minus, Plus } from '@phosphor-icons/react'
import { RegularText } from '../Typography'

export function ProductQuantity() {
  return (
    <div className="flex items-center justify-center gap-2 w-[4.5rem] p-2 bg-base-button rounded-md ">
      <button className="text-brand-purple hover:text-brand-purple-dark">
        <Minus size={14} />
      </button>
      <RegularText color="title">1</RegularText>
      <button className="text-brand-purple hover:text-brand-purple-dark">
        <Plus size={14} />
      </button>
    </div>
  )
}
