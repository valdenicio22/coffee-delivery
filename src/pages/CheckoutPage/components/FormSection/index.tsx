import { MapPinLine } from '@phosphor-icons/react'
import { Input } from '../../../../components/Input'
import { TitleText } from '../../../../components/Typography'
import { HeaderSection } from '../HeaderSection'

export function FormSection() {
  return (
    <div>
      <TitleText size="xs" color="subtitle" className="mb-4">
        Complete seu pedido
      </TitleText>
      <div className="p-10 bg-base-card rounded-md">
        <HeaderSection
          icon={<MapPinLine size={22} />}
          iconColor="yellow-dark"
          title="Endereço de Entrega"
          subTitle="Informe o endereço onde deseja receber seu pedido"
        />
        <form className="w-full grid grid-cols-[12.5rem_17.25rem_3.75rem] grid-rows-4 gap-4 mt-8">
          <Input type="number" placeholder="Zip Code" />
          <Input className="col-span-3" type="text" placeholder="Street" />
          <Input type="number" placeholder="Number" />
          <Input
            className="col-span-2"
            type="text"
            placeholder="Complement"
            rightText="Optional"
          />
          <Input type="text" placeholder="Neighborhood" />
          <Input className="flex-1" type="text" placeholder="City" />
          <Input type="text" placeholder="State" />
        </form>
      </div>
    </div>
  )
}
