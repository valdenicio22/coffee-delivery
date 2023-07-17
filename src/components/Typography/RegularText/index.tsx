import { HTMLAttributes, ReactNode } from 'react'

type RegularTextProps = {
  color?: 'text' | 'subtitle' | 'label' | 'error' | 'purple-dark' | 'title'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  weight?: 'regular' | 'bold'
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
} & HTMLAttributes<HTMLOrSVGElement>

export const RegularText = ({
  color = 'text',
  size = 'md',
  weight = 'regular',
  children,
  as: Tag = 'p',
  className,
  ...props
}: RegularTextProps) => {
  const sizeVariant = {
    lg: 'text-text-lg',
    md: 'text-text-md',
    sm: 'text-text-sm',
    xs: 'text-text-xs',
  }
  const colorVariant = {
    text: 'text-base-text',
    title: 'text-base-title',
    subtitle: 'text-base-subtitle',
    label: 'text-base-label',
    error: 'text-base-error',
    'purple-dark': 'text-brand-purple-dark',
  }
  const weightVariant = {
    regular: 'font-normal',
    bold: 'font-bold',
  }
  const componentStyle = `font-regular leading-[1.3] ${sizeVariant[size]} ${colorVariant[color]}
  ${weightVariant[weight]} ${className}`

  return (
    <Tag className={componentStyle} {...props}>
      {children}
    </Tag>
  )
}
