import { ReactNode } from 'react'

type RegularTextProps = {
  color?: 'text' | 'subtitle' | 'label' | 'error' | 'purple-dark'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  weight?: 'regular' | 'bold'
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
}

export const RegularText = ({
  color = 'text',
  size = 'md',
  weight = 'regular',
  children,
  as: Tag = 'p',
}: RegularTextProps) => {
  const sizeVariant = {
    lg: 'text-text-lg',
    md: 'text-text-md',
    sm: 'text-text-sm',
    xs: 'text-text-xs',
  }
  const colorVariant = {
    text: 'text-base-text',
    subtitle: 'text-base-subtitle',
    label: 'text-base-label',
    error: 'text-base-error',
    'purple-dark': 'text-brand-purple-dark',
  }
  const weightVariant = {
    regular: 'font-normal',
    bold: 'font-bold',
  }
  const componentStyle = `${sizeVariant[size]} ${colorVariant[color]}
  ${weightVariant[weight]} font-regular leading-[1.3]`

  return <Tag className={componentStyle}>{children}</Tag>
}
