import { useNavigate } from 'react-router-dom'
import { ProductCartCard } from '../../../../components/ProductCartCard'
import { RegularText, TitleText } from '../../../../components/Typography'

export function SelectedProductsSection() {
  const navigate = useNavigate()

  function handleConfirmeOrder() {
    navigate('/confirmeOrder')
  }

  return (
    <div>
      <TitleText size="xs" color="subtitle" className="mb-4">
        Cafés selecionados
      </TitleText>
      <div className="flex flex-col p-10 bg-base-card rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px]">
        <ProductCartCard />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <RegularText size="sm">Total de itens</RegularText>
            <RegularText>R$ 29,70</RegularText>
          </div>
          <div className="flex items-center justify-between">
            <RegularText size="sm">Entrega</RegularText>
            <RegularText>R$ 3,50</RegularText>
          </div>
          <div className="flex items-center justify-between">
            <RegularText size="lg" color="subtitle" weight="bold">
              Total de itens
            </RegularText>
            <RegularText size="lg" color="subtitle" weight="bold">
              R$ 33,20
            </RegularText>
          </div>
        </div>
        <button
          onClick={handleConfirmeOrder}
          className="w-full flex items-center justify-center bg-brand-yellow text-base-white text-button-lg font-bold rounded-md uppercase mt-6 py-3 px-2"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  )
}
