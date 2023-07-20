import { MapPinLine } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormDataKeys } from '../..'
import { Input } from '../../../../components/Input'
import { TitleText } from '../../../../components/Typography'
import { HeaderSection } from '../HeaderSection'

type AddressCheckoutFormErros = {
  errors: {
    [key in CheckoutFormDataKeys]?: {
      message: string
    }
  }
}

export function FormSection() {
  const { register, formState } = useFormContext()
  const { errors } = formState as AddressCheckoutFormErros

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
        <div className="w-full grid grid-cols-[12.5rem_17.25rem_3.75rem] gap-x-3 gap-y-4 mt-8">
          <Input
            type="number"
            placeholder="CEP"
            {...register('zipCode')}
            error={errors.zipCode?.message}
          />
          <Input
            className="col-span-3"
            type="text"
            placeholder="Rua"
            {...register('street')}
            error={errors.street?.message}
          />
          <Input
            type="number"
            placeholder="Número"
            {...register('number')}
            error={errors.number?.message}
          />
          <Input
            className="col-span-2"
            type="text"
            placeholder="Complemento"
            rightText="Opcional"
            {...register('complement')}
            error={errors.complement?.message}
          />
          <Input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            error={errors.district?.message}
          />
          <Input
            className="flex-1"
            type="text"
            placeholder="Cidade"
            {...register('city')}
            error={errors.city?.message}
          />
          <Input
            type="text"
            placeholder="UF"
            {...register('state')}
            error={errors.state?.message}
          />
        </div>
      </div>
    </div>
  )
}
