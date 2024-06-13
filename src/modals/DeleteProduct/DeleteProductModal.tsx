import { MouseEvent, useState } from 'react'
import { createPortal } from 'react-dom'

import c from './DeleteProductModal.module.scss'

export const DeleteProductModal = ({ deleteProduct }: DeleteProductModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const portal = document.getElementById('portal')

  const handleClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setShowModal(true)
  }
  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowModal(false)
  }
  const handleDeleteProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    deleteProduct(e)
    setShowModal(false)
  }

  return (
    <>
      <button onClick={e => handleClickDelete(e)} type={'button'}>
        Delete
      </button>
      {showModal &&
        createPortal(
          <div className={c.root} onClick={e => handleCloseModal(e)}>
            <div className={c.content}>
              <span>Are you sure?</span>
              <div>
                <button onClick={() => setShowModal(false)} type={'button'}>
                  Cancel
                </button>
                <button onClick={e => handleDeleteProduct(e)} type={'button'}>
                  Delete
                </button>
              </div>
            </div>
          </div>,
          portal!
        )}
    </>
  )
}

type DeleteProductModalProps = {
  deleteProduct: (e: MouseEvent<HTMLButtonElement>) => void
}
