import introImage from '../../assets/intro-img.svg'
import { RegularText, TitleText } from '../../components/Typography'

export const LandingPage = () => {
  return (
    <div className={`border border-red-400`}>
      <div
        className={`layoutContainer flex items-center justify-between gap-9 my-24`}
      >
        <div>
          <TitleText weight="extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>
          <RegularText size="lg">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
        </div>
        <img src={introImage} alt="intro-img" />
      </div>
    </div>
  )
}
