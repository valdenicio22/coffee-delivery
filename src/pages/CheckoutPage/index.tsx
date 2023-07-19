import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormSection } from './components/FormSection'
import { PaymentSection } from './components/PaymentSection'
import { SelectedProductsSection } from './components/SelectedProductsSection'

const checkouFormSchema = z.object({
  zipCode: z.string().min(1, 'Please enter a zip code'),
  street: z.string().min(1, 'Please enter a street'),
  number: z.string().min(1, 'Please enter a number'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Please enter a neighborhood'),
  city: z.string().min(1, 'Please enter a city'),
  state: z.string().min(1, 'Please enter a state'),
})
type CheckoutFormData = z.infer<typeof checkouFormSchema>
export type CheckoutFormDataKeys = keyof CheckoutFormData

const checkoutFormDefaultValues = {
  zipCode: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
}

export const CheckoutPage = () => {
  const checkoutFormMethods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkouFormSchema),
    defaultValues: checkoutFormDefaultValues,
  })
  const { handleSubmit } = checkoutFormMethods

  function handleCheckoutFormSubmit(data: CheckoutFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...checkoutFormMethods}>
      <form
        onSubmit={handleSubmit(handleCheckoutFormSubmit)}
        id="checkoutForm"
        className="layoutContainer flex gap-8 my-8"
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
