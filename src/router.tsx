import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout/Layout'
import { ProductList } from './pages/ProductList/ProductList'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <ProductList />,
        path: '/',
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
