interface ProductTagProps {
  children: string
  textColor?: 'yellow-dark'
  bgColor?: 'yellow-light'
}

export function ProductTag({
  children,
  textColor = 'yellow-dark',
  bgColor = 'yellow-light',
}: ProductTagProps) {
  const colorVarient = {
    'yellow-dark': 'text-brand-yellow-dark',
  }
  const bgVarient = {
    'yellow-light': 'bg-brand-yellow-light',
  }

  const productTagStyle = `py-1 px-2 text-tag-md font-bold leading-[1.3] uppercase cardRounded text-center
  ${colorVarient[textColor]} ${bgVarient[bgColor]}`

  return <div className={productTagStyle}>{children}</div>
}
