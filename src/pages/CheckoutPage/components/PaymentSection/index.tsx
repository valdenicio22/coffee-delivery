import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { PaymentMethod } from '../../../../components/PaymentMethod'
import { HeaderSection } from '../HeaderSection'

export function PaymentSection() {
  return (
    <div className="p-10 bg-base-card flex flex-col gap-8">
      <HeaderSection
        icon={<CurrencyDollar size={22} />}
        iconColor="purple"
        title="Pagamento"
        subTitle="O pagamento é feito na entrega. Escolha a forma que desja pagar"
      />
      <div className="grid grid-cols-3 gap-3">
        <PaymentMethod
          icon={<CreditCard size={16} />}
          label="Cartão de Crédito"
          type="radio"
          name="credit"
          id="credit"
        />
        <PaymentMethod
          icon={<Bank size={16} />}
          label="Cartão de Débito"
          type="radio"
          name="debit"
          id="debit"
        />
        <PaymentMethod
          icon={<Money size={16} />}
          label="Dinheiro"
          type="radio"
          name="money"
          id="money"
        />
      </div>
    </div>
  )
}
