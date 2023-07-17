import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import introImage from '../../../../assets/intro-img.svg'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../../../components/Typography'

export function Intro() {
  return (
    <div
      className={`layoutContainer flex flex-row justify-between gap-9 my-24`}
    >
      <div className="flex-1 flex flex-col gap-16 max-w-[588px]">
        <div className="flex flex-col gap-4">
          <TitleText weight="extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>
          <RegularText size="lg">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
        </div>
        <div className={` grid grid-cols-2 gap-y-5`}>
          <InfoWithIcon
            icon={<ShoppingCart size={16} weight="fill" />}
            iconBgColor="yellow-dark"
            info={`Compra simples e segura`}
          />
          <InfoWithIcon
            icon={<Package size={16} weight="fill" />}
            iconBgColor="base-text"
            info={`Embalagem mantém o café intacto`}
          />
          <InfoWithIcon
            icon={<Timer size={16} weight="fill" />}
            iconBgColor="yellow"
            info={`Entrega rápida e rastreada`}
          />
          <InfoWithIcon
            icon={<Coffee size={16} weight="fill" />}
            iconBgColor="purple"
            info={`O café chega fresquinho até você`}
          />
        </div>
      </div>
      <img src={introImage} alt="intro-img" />
    </div>
  )
}
