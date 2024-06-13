import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/hooks'
import { DeleteProductModal } from '@/modals/DeleteProduct/DeleteProductModal'
import { productsActions } from '@/store/ProductsSlice'

import c from './ProductCard.module.scss'

import { Product } from '../../types/models'

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const deleteProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(productsActions.deleteProductThunk(product.id))
  }

  return (
    <div className={c.card} onClick={() => navigate(`/${product.id}`)}>
      <img src={product.imageUrl} />
      <span>{product.name}</span>
      <DeleteProductModal deleteProduct={deleteProduct} />
    </div>
  )
}

type ProductCardProps = {
  product: Product
}
