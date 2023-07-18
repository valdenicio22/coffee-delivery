import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'

interface HeaderSectionProps {
  icon: ReactNode
  iconColor: 'yellow-dark' | 'purple'
  title: string
  subTitle: string
}

export function HeaderSection({
  icon,
  iconColor,
  subTitle,
  title,
}: HeaderSectionProps) {
  const colorVariant = {
    'yellow-dark': 'text-brand-yellow-dark',
    purple: 'text-brand-purple',
  }

  const HeaderSectionStyle = `flex items-center gap-2  ${colorVariant[iconColor]}`

  return (
    <div className={HeaderSectionStyle}>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="sm">{subTitle}</RegularText>
      </div>
    </div>
  )
}
