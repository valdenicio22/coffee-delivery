import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import confirmedOrder from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../components/Typography'

export function ConfirmedOrder() {
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
      <div className="flex items-center justify-between gap-[6.375rem]">
        <div className="flex flex-col gap-8 p-10 border cardRounded">
          <InfoWithIcon
            icon={<MapPin size={22} weight="fill" />}
            iconBgColor="purple"
            info={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </div>
        <img src={confirmedOrder} alt="Confirme Order image" />
      </div>
    </div>
  )
}
