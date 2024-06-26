import { RouterProvider, createHashRouter } from 'react-router-dom'

import { Layout } from './components/Layout/Layout'
import { ProductPage } from './pages/Product/ProductPage'
import { ProductListPage } from './pages/ProductList/ProductListPage'

const router = createHashRouter([
  {
    children: [
      {
        element: <ProductListPage />,
        path: '/',
      },
      {
        element: <ProductPage />,
        path: '/:id',
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
