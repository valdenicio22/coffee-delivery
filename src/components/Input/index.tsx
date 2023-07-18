import { InputHTMLAttributes, forwardRef } from 'react'
import { RegularText } from '../Typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <div
        className={`flex flex-col gap-1 p-3 rounded-[4px] border border-base-button bg-base-input ${className} ${
          error && `border-base-error`
        }`}
      >
        <div className="flex items-center justify-between gap-1">
          <input className={`w-full bg-transparent `} {...props} ref={ref} />
          {rightText && (
            <RegularText color="label" size="xs">
              {rightText}
            </RegularText>
          )}
        </div>
        {error && (
          <RegularText color="error" size="sm">
            {error}
          </RegularText>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export { Input }
