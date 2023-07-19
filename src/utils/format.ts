export function format(value: number) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(value)

  return formattedValue
}
