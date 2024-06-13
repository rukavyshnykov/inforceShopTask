import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CommentsList } from '@/components/CommentsList/CommentsList'
import { selectProducts } from '@/selectors'

export const ProductPage = () => {
  const { id } = useParams()
  const products = useSelector(selectProducts)
  const portal = document.getElementById('portal')
  const [showModal, setShowModal] = useState(false)

  const product = useMemo(() => {
    return products.find(p => p.id === id)
  }, [id, products])

  if (product === undefined) {
    return <>Oops... something went wrong</>
  }

  return (
    <div>
      <div>
        <div>
          <img src={product.imageUrl} />
        </div>
        <div>
          <div>Name: {product.name}</div>
          <div>Count: {product.count}</div>
          <div>Weight: {product.weight}</div>
          <div>
            Width: {product.size.height} Height: {product.size.height}
          </div>
          <button onClick={() => setShowModal(true)} type={'button'}>
            EDIT
          </button>
          {showModal && createPortal(<>sdfsdfsdf</>, portal!)}
        </div>
      </div>
      <div>
        <CommentsList comments={product.comments} />
      </div>
    </div>
  )
}
