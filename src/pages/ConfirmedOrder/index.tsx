import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import confirmedOrder from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../components/Typography'
import { CheckoutFormData } from '../CheckoutPage'
import { paymentMethods } from '../CheckoutPage/components/PaymentSection'

type CheckoutFormDataState = {
  state: CheckoutFormData
}

export function ConfirmedOrder() {
  const { state } = useLocation() as CheckoutFormDataState
  const navigate = useNavigate()
  const {
    number,
    street,
    district,
    city,
    state: clientState,
    paymentMethod,
  } = state

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])
  if (!state) return <></>

  return (
    <div className="layoutContainer">
      <div className="mt-20 mb-10">
        <TitleText size="lg" color="yellow-dark" weight="extrabold">
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText color="subtitle" size="lg">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between sm:gap-[6.375rem]">
        <div
          className="flex flex-col gap-8 bg-base-background p-10 w-full max-w-[32.875rem] cardRounded relative  
          gradientBorder"
        >
          <InfoWithIcon
            icon={<MapPin size={22} weight="fill" />}
            iconBgColor="purple"
            info={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
                <br />
                {district} - {city}, {clientState}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Timer size={22} weight="fill" />}
            iconBgColor="yellow"
            info={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar size={22} weight="fill" />}
            iconBgColor="yellow-dark"
            info={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </div>
        <img
          src={confirmedOrder}
          alt="Confirme Order image"
          className="w-full max-w-[16rem] md:max-w-[19rem] lg:max-w-[31rem]"
        />
      </section>
    </div>
  )
}
