import { FormEventHandler, MouseEvent } from 'react'
import { useForm } from 'react-hook-form'

import { Product } from '@/types/models'
import { zodResolver } from '@hookform/resolvers/zod'
import { v1 } from 'uuid'
import { z } from 'zod'

import c from './ProductForm.module.scss'

export const ProductForm = ({ onCancel, onFormSubmit }: ProductFormProps) => {
  const ProductFormSchema = z.object({
    count: z.number(),
    height: z.number(),
    imageUrl: z.string(),
    name: z.string().min(3),
    weight: z.string(),
    width: z.number(),
  })

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ProductFormType>({ resolver: zodResolver(ProductFormSchema) })

  type ProductFormType = z.infer<typeof ProductFormSchema>

  const onSubmit = (args: ProductFormType) => {
    onFormSubmit({
      comments: [],
      count: args.count,
      id: v1(),
      imageUrl: args.imageUrl,
      name: args.name,
      size: { height: args.height, width: args.width },
      weight: args.weight,
    })
  }

  return (
    <form
      className={c.form}
      onClick={(e: MouseEvent<HTMLFormElement>) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        Set product image url
        <input type={'text'} {...register('imageUrl')} />
      </label>
      <label>
        Set product name
        <input type={'text'} {...register('name')} />
      </label>
      <label>
        Set product size
        <input type={'number'} {...register('width', { valueAsNumber: true })} />
        <input type={'number'} {...register('height', { valueAsNumber: true })} />
      </label>
      <label>
        Set product weight
        <input type={'text'} {...register('weight')} />
      </label>
      <label>
        Set product count
        <input type={'number'} {...register('count', { valueAsNumber: true })} />
      </label>
      <div className={c.buttons}>
        <button onClick={() => onCancel()} type={'button'}>
          Cancel
        </button>
        <button type={'submit'}>Submit</button>
      </div>
    </form>
  )
}

type ProductFormProps = {
  onCancel: () => void
  onFormSubmit: (product: Product) => void
}
