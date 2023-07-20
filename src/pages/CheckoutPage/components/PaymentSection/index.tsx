import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethod } from '../../../../components/PaymentMethod'
import { RegularText } from '../../../../components/Typography'
import { HeaderSection } from '../HeaderSection'

export const paymentMethods = {
  credit: {
    label: 'Credit Card',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Debit Card',
    icon: <Bank size={16} />,
  },
  cash: {
    label: 'Money',
    icon: <Money size={16} />,
  },
}

export function PaymentSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <div className="p-10 bg-base-card">
      <HeaderSection
        icon={<CurrencyDollar size={22} />}
        iconColor="purple"
        title="Pagamento"
        subTitle="O pagamento é feito na entrega. Escolha a forma que desja pagar"
      />
      <div className="grid grid-cols-3 gap-3 mt-8">
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethod
            key={key}
            icon={icon}
            label={label}
            id={key}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </div>
      {paymentMethodError && (
        <RegularText color="error" size="sm" className="mt-[6px]">
          {paymentMethodError}
        </RegularText>
      )}
    </div>
  )
}
