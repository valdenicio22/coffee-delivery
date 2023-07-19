import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCartCard } from '../../../../components/ProductCartCard'
import { RegularText, TitleText } from '../../../../components/Typography'
import { DELIVERY_FEE } from '../../../../constants'
import { useCart } from '../../../../hooks/useCart'
import { format } from '../../../../utils/format'

export function SelectedProductsSection() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  // function handleConfirmeOrder() {
  //   navigate('/confirmeOrder')
  // }
  const totalProductsValue = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

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
            <RegularText>R$ {format(totalProductsValue)}</RegularText>
          </div>
          <div className="flex items-center justify-between">
            <RegularText size="sm">Entrega</RegularText>
            <RegularText>
              {cartItems.length ? `R$ ${format(DELIVERY_FEE)}` : 'R$ 0,00'}
            </RegularText>
          </div>
          <div className="flex items-center justify-between">
            <RegularText size="lg" color="subtitle" weight="bold">
              Total de itens
            </RegularText>
            <RegularText size="lg" color="subtitle" weight="bold">
              {cartItems.length
                ? `R$ ${format(totalProductsValue + DELIVERY_FEE)}`
                : 'R$ 0,00'}
            </RegularText>
          </div>
        </div>
        <button
          type="submit"
          form="checkoutForm"
          // onClick={handleConfirmeOrder}
          className="w-full flex items-center justify-center bg-brand-yellow text-base-white text-button-lg font-bold rounded-md uppercase mt-6 py-3 px-2"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  )
}
