import { ShoppingCart } from '@phosphor-icons/react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { ProductTag } from '../../../../components/ProductTag'
import { RegularText, TitleText } from '../../../../components/Typography'

export function ProductSection() {
  return (
    <div className="layoutContainer py-8 flex flex-col gap-14">
      <TitleText as="h2" size="lg" color="subtitle" weight="extrabold">
        Nossos Cafés
      </TitleText>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10">
        <div className="productCard">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1690761600&Signature=OD-yQYL0BA8k-B-eyWKtNOrMcnPi7oYw2PglckxEyYBcjYzR2JJwZK1m0EId-ByA5R4MlIT2HBpmtLkTDGSeDJZkePXClHoj5NQbXiv1Ff~untYdgO6PaCWteYu1ZrDf1v-E75giwEdcKCh1eWSABIWhHDR5uv8juqAPwRDdu8Hm-airjmFX-3bZNjnt46U2~YOBJ7h0Tk7pgJWJCVpyOBKN0kIVOLUTG3QfGv7jXYKXLoe3vu~0rwOhtulE9becRdka1UKRXUJtTq3-DbuyhRsguAPoeAMjIiJKNNYuWHhGdeGfITwrtbOpoO9MK8MBxvpRnRVifLKJhwzfNpvEDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Coffee image"
              className="mb-3 -mt-5 w-[7.5rem] h-[7.5rem]"
            />
            <ProductTag>Tradicional</ProductTag>
          </div>

          <div className="text-center mt-4 mb-8">
            <TitleText size="sm" color="subtitle">
              Expresso Tradicional
            </TitleText>
            <RegularText size="sm" color="label" className="text-center mt-2 ">
              O tradicional café feito com água quente e grãos moídos
            </RegularText>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <RegularText as="span" size="xs" color="label" className="pt-1">
                R$
              </RegularText>
              <TitleText size="md" color="text" as="strong">
                9,90
              </TitleText>
            </div>
            <div className="w-[7.5rem] flex items-center gap-2">
              <ProductQuantity />
              <button
                type="button"
                className="text-base-card p-2 rounded-md bg-brand-purple-dark hover:bg-brand-purple"
              >
                <ShoppingCart weight="fill" size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
