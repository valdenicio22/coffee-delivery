import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { useCart } from '../../hooks/useCart'
import { FormSection } from './components/FormSection'
import { PaymentSection } from './components/PaymentSection'
import { SelectedProductsSection } from './components/SelectedProductsSection'

enum paymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const checkouFormSchema = z.object({
  zipCode: z.string().min(1, 'Please enter a zip code'),
  street: z.string().min(1, 'Please enter a street'),
  number: z.string().min(1, 'Please enter a number'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Please enter a neighborhood'),
  city: z.string().min(1, 'Please enter a city'),
  state: z.string().min(1, 'Please enter a state'),
  paymentMethod: z.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: 'Please choose a payment method' }
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
  neighborhood: '',
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
  const { handleSubmit, getValues } = checkoutFormMethods

  console.log('HAHSHAHAH')
  console.log('getValues', getValues())

  function handleCheckoutFormSubmit(data: CheckoutFormData) {
    console.log('form submitted')
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
