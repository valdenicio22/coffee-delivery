import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { useCart } from '../../hooks/useCart'
import { FormSection } from './components/FormSection'
import { PaymentSection } from './components/PaymentSection'
import { SelectedProductsSection } from './components/SelectedProductsSection'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const checkouFormSchema = z.object({
  zipCode: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a Rua'),
  number: z.string().min(1, 'Informe o Número'),
  complement: z.string(),
  district: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})
export type CheckoutFormData = z.infer<typeof checkouFormSchema>
export type CheckoutFormDataKeys = keyof CheckoutFormData

const checkoutFormDefaultValues = {
  zipCode: '',
  street: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  state: '',
  paymentMethod: undefined,
}

export const CheckoutPage = () => {
  const { cleanCart } = useCart()
  const navigate = useNavigate()
  const checkoutFormMethods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkouFormSchema),
    defaultValues: checkoutFormDefaultValues,
  })
  const { handleSubmit } = checkoutFormMethods

  function handleCheckoutFormSubmit(data: CheckoutFormData) {
    navigate('/confirmedOrder', { state: data })
    cleanCart()
  }

  return (
    <FormProvider {...checkoutFormMethods}>
      <form
        onSubmit={handleSubmit(handleCheckoutFormSubmit)}
        id="checkoutForm"
        className="flex gap-8 my-8 layoutContainer"
      >
        <div className="flex flex-col gap-4">
          <FormSection />
          <PaymentSection />
        </div>
        <SelectedProductsSection />
      </form>
    </FormProvider>
  )
}
