import introImage from '../../assets/intro-img.svg'

export const LandingPage = () => {
  return (
    <div className={`border border-red-400`}>
      <div
        className={`layoutContainer flex items-center justify-between gap-9 my-24`}
      >
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        </div>
        <img src={introImage} alt="intro-img" />
      </div>
    </div>
  )
}
