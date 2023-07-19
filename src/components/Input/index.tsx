import { InputHTMLAttributes, forwardRef } from 'react'
import { RegularText } from '../Typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <div
          className={`h-[2.625rem] rounded-[4px] 
          border border-base-button bg-base-input overflow-hidden
          ${error && `border-base-error`}
          ${rightText && `flex items-center justify-between`}
        `}
        >
          <input
            className={`w-full h-full px-3 bg-transparent border-none text-xs text-base-text placeholder:text-base-label`}
            {...props}
            ref={ref}
          />
          {rightText && (
            <RegularText color="label" size="xs" className="italic pr-3">
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
