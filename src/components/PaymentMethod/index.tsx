import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  iconColor?: 'purple'
  label: string
}

const PaymentMethod = forwardRef<HTMLInputElement, PaymentMethodProps>(
  ({ id, icon, iconColor = 'purple', label, ...props }, ref) => {
    const iconColorVariant = {
      purple: 'text-brand-purple',
    }
    return (
      <div>
        <input
          id={id}
          className={`appearance-none hidden paymentInputMethod`}
          type="radio"
          {...props}
          ref={ref}
        />
        <label
          htmlFor={id}
          className={`flex items-center justify-center gap-2 p-4 
          uppercase rounded-md select-none bg-base-button
          text-base-text text-text-xs border border-bg-base-button
          hover:bg-base-hover transitionColor`}
        >
          <span className={`${iconColorVariant[iconColor]}`}>{icon}</span>
          {label}
        </label>
      </div>
    )
  },
)
PaymentMethod.displayName = 'PaymentMethod'
export { PaymentMethod }
