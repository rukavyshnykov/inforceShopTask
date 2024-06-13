import { Outlet } from 'react-router-dom'

import c from './Layout.module.scss'

export const Layout = () => {
  return (
    <div>
      <header>TITLE OF THE SHOP</header>
      <div className={c.content}>
        <Outlet />
      </div>
    </div>
  )
}
