import { Trash } from '@phosphor-icons/react'
import { ProductQuantity } from '../ProductQuantity'
import { RegularText } from '../Typography'

export function ProductCartCard() {
  return (
    <>
      <div className="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1690761600&Signature=OD-yQYL0BA8k-B-eyWKtNOrMcnPi7oYw2PglckxEyYBcjYzR2JJwZK1m0EId-ByA5R4MlIT2HBpmtLkTDGSeDJZkePXClHoj5NQbXiv1Ff~untYdgO6PaCWteYu1ZrDf1v-E75giwEdcKCh1eWSABIWhHDR5uv8juqAPwRDdu8Hm-airjmFX-3bZNjnt46U2~YOBJ7h0Tk7pgJWJCVpyOBKN0kIVOLUTG3QfGv7jXYKXLoe3vu~0rwOhtulE9becRdka1UKRXUJtTq3-DbuyhRsguAPoeAMjIiJKNNYuWHhGdeGfITwrtbOpoO9MK8MBxvpRnRVifLKJhwzfNpvEDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="coffee"
          className="h-16 w-16 mr-5"
        />
        <div className="flex flex-col gap-2 mr-10">
          <RegularText color="subtitle" weight="bold">
            Expresso Tracional
          </RegularText>
          <div className="flex items-center gap-2">
            <ProductQuantity />
            <button className="flex items-center gap-1 p-2 bg-base-button rounded-md">
              <Trash size={16} className="text-brand-purple" />
              <RegularText size="xs" className="uppercase">
                Remover
              </RegularText>
            </button>
          </div>
        </div>
        <RegularText as="strong" weight="bold" className="self-start">
          R$ 9,90
        </RegularText>
      </div>
      <hr className="text-base-button my-6" />
    </>
  )
}
