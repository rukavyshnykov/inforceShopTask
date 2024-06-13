import { Product } from '@/types/models'

import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.length ? (
        products.map(p => <ProductCard key={p.id} product={p} />)
      ) : (
        <>Oops... something went wrong</>
      )}
    </div>
  )
}

type ProductListProps = {
  products: Product[]
}
