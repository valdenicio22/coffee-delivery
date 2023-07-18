import { useEffect, useState } from 'react'
import { ProductCard } from '../../../../components/ProductCard'
import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/products'

export interface Product {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export function ProductSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setProducts(coffees)
    }, 1500)

    return () => clearTimeout(timeOutId)
  }, [])

  return (
    <div className="layoutContainer py-8 flex flex-col gap-14">
      <TitleText as="h2" size="lg" color="subtitle" weight="extrabold">
        Nossos Cafés
      </TitleText>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
