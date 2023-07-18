import { ReactNode } from 'react'
import { RegularText } from '../Typography'

interface InfoWithIconProps {
  info: string | ReactNode
  icon: ReactNode
  iconBgColor: 'base-text' | 'yellow-dark' | 'yellow' | 'purple'
  iconColor?: 'background' | 'yellow-dark' | 'purple'
}

export function InfoWithIcon({
  info,
  icon,
  iconColor = 'background',
  iconBgColor,
}: InfoWithIconProps) {
  const iconBgColorVarient = {
    'base-text': 'bg-base-text',
    'yellow-dark': 'bg-brand-yellow-dark',
    yellow: 'bg-brand-yellow',
    purple: 'bg-brand-purple',
  }
  const iconColorVarient = {
    background: 'text-base-background',
    'yellow-dark': 'text-brand-yellow-dark',
    purple: 'text-brand-purple',
  }
  return (
    <div className={`flex items-center gap-3`}>
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full p-2 ${iconBgColorVarient[iconBgColor]} ${iconColorVarient[iconColor]}`}
      >
        {icon}
      </div>
      {typeof info === 'string' ? <RegularText>{info}</RegularText> : info}
    </div>
  )
}
