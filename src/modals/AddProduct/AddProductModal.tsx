import { useState } from 'react'
import { createPortal } from 'react-dom'

import { ProductForm } from '@/forms/ProductForm/ProductForm'
import { Product } from '@/types/models'

import c from './AddProductModal.module.scss'

export const AddProductModal = ({ addProduct }: AddProductModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const portal = document.getElementById('portal')

  return (
    <>
      <button onClick={() => setShowModal(true)} type={'button'}>
        Add
      </button>
      {showModal &&
        createPortal(
          <div className={c.root} onClick={() => setShowModal(false)}>
            <div className={c.content}>
              <ProductForm onCancel={() => setShowModal(false)} onFormSubmit={addProduct} />
            </div>
          </div>,
          portal!
        )}
    </>
  )
}

type AddProductModalProps = {
  addProduct: (product: Product) => void
}
