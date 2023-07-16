import { ReactNode } from 'react'

interface TitleTextProps {
  color?: 'title' | 'subtitle'
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  weight?: 'bold' | 'extrabold'
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
}

export const TitleText = ({
  color = 'title',
  size = 'xl',
  weight = 'bold',
  children,
  as: Element = 'h1',
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
  }
  const weightVariant = {
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }

  const componentStyle = `${sizeVariant[size]} ${colorVariant[color]} ${weightVariant[weight]} font-title leading-[1.3]`
  return <Element className={componentStyle}>{children}</Element>
}
