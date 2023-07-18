import { ConfirmeOrderSection } from './components/ConfirmeOrderSection'
import { FormSection } from './components/FormSection'
import { PaymentSection } from './components/PaymentSection'

export const CheckoutPage = () => {
  return (
    <div className="layoutContainer flex  gap-8 my-8">
      <div className="flex flex-col gap-4">
        <FormSection />
        <PaymentSection />
      </div>
      <ConfirmeOrderSection />
    </div>
  )
}
