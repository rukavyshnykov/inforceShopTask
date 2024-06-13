import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '@/hooks'
import { productsActions } from '@/store/ProductsSlice'

import c from './Layout.module.scss'

export const Layout = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(productsActions.getProductsThunk())
  }, [dispatch])

  return (
    <div>
      <header>TITLE OF THE SHOP</header>
      <div className={c.content}>
        <Outlet />
      </div>
    </div>
  )
}
