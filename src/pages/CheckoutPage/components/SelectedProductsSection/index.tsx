import { useMemo } from 'react'
import { ProductCartCard } from '../../../../components/ProductCartCard'
import { RegularText, TitleText } from '../../../../components/Typography'
import { DELIVERY_FEE } from '../../../../constants'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

export function SelectedProductsSection() {
  const { cartItems } = useCart()

  const cartTotalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
    [cartItems],
  )

  const deliveryFormattedPrice = formatMoney(DELIVERY_FEE)
  const totalFormattedPrice = formatMoney(cartTotalPrice)
  const finalFormattedPrice = formatMoney(cartTotalPrice + DELIVERY_FEE)

  return (
    <div className="w-full">
      <TitleText size="xs" color="subtitle" className="mb-4">
        Cafés selecionados
      </TitleText>
      <div className="flex flex-col p-10 bg-base-card rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px]">
        {!!cartItems.length &&
          cartItems.map((item) => (
            <ProductCartCard key={item.id} product={item} />
          ))}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <RegularText size="sm">Total de itens</RegularText>
            <RegularText>R$ {totalFormattedPrice}</RegularText>
          </div>
          <div className="flex items-center justify-between">
            <RegularText size="sm">Entrega</RegularText>
            <RegularText>
              R$ {cartItems.length ? deliveryFormattedPrice : '0,00'}
            </RegularText>
          </div>
          <div className="flex items-center justify-between">
            <RegularText size="lg" color="subtitle" weight="bold">
              Total de itens
            </RegularText>
            <RegularText size="lg" color="subtitle" weight="bold">
              R$ {cartItems.length ? finalFormattedPrice : '0,00'}
            </RegularText>
          </div>
        </div>
        <button
          type="submit"
          form="checkoutForm"
          disabled={!cartItems.length}
          className={`w-full flex items-center justify-center 
          bg-brand-yellow text-base-white text-button-lg 
          font-bold rounded-md uppercase mt-6 py-3 px-2
          hover:enabled:bg-brand-yellow-dark disabled:cursor-not-allowed 
          disabled:opacity-50 disabled:text-opacity-70`}
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  )
}
