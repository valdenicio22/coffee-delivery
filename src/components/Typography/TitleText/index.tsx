import { HTMLAttributes, ReactNode } from 'react'

type TitleTextProps = {
  color?: 'title' | 'subtitle' | 'text' | 'yellow-dark'
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  weight?: 'bold' | 'extrabold'
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
} & HTMLAttributes<HTMLOrSVGElement>

export const TitleText = ({
  color = 'title',
  size = 'xl',
  weight = 'bold',
  children,
  as: Tag = 'h1',
  className,
  ...props
}: TitleTextProps) => {
  const sizeVariant = {
    xl: 'text-title-xl',
    lg: 'text-title-lg',
    md: 'text-title-md',
    sm: 'text-title-sm',
    xs: 'text-title-xs',
  }
  const colorVariant = {
    title: 'text-base-title',
    subtitle: 'text-base-subtitle',
    text: 'text-base-text',
    'yellow-dark': 'text-brand-yellow-dark',
  }
  const weightVariant = {
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }

  const componentStyle = `font-title leading-[1.3] ${sizeVariant[size]} ${colorVariant[color]}
  ${weightVariant[weight]} ${className}`

  return (
    <Tag className={componentStyle} {...props}>
      {children}
    </Tag>
  )
}
