import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { RegularText } from '../Typography'

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  iconColor?: 'purple'
  label: string
}

const PaymentMethod = forwardRef<HTMLInputElement, PaymentMethodProps>(
  ({ icon, iconColor = 'purple', label, ...props }, ref) => {
    const iconColorVariant = {
      purple: 'text-brand-purple',
    }
    return (
      <div className="p-4 bg-base-button rounded-md flex items-center gap-3 select-none">
        {icon && (
          <span className={`${iconColorVariant[iconColor]}`}>{icon}</span>
        )}
        <div>
          <RegularText size="xs" className="uppercase">
            {label}
          </RegularText>
          <input
            className={`appearance-none hidden`}
            type="radio"
            {...props}
            ref={ref}
          />
        </div>
      </div>
    )
  },
)
PaymentMethod.displayName = 'PaymentMethod'
export { PaymentMethod }
