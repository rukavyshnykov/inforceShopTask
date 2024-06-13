import { useSelector } from 'react-redux'

import { ProductList } from '@/components/ProductList/ProductList'
import { useAppDispatch } from '@/hooks'
import { AddProductModal } from '@/modals/AddProduct/AddProductModal'
import { selectProducts } from '@/selectors'
import { productsActions } from '@/store/ProductsSlice'
import { Product } from '@/types/models'

export const ProductListPage = () => {
  const dispatch = useAppDispatch()
  const products = useSelector(selectProducts)

  const addProduct = (product: Product) => {
    dispatch(productsActions.addProductThunk(product))
  }

  return (
    <div>
      <ProductList products={products} />
      <AddProductModal addProduct={addProduct} />
    </div>
  )
}
