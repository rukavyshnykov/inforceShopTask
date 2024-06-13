export type Product = {
  comments: Comment[]
  count: number
  id: string
  imageUrl: string
  name: string
  size: {
    height: number
    width: number
  }
  weight: string
}

export type Comment = {
  date: Date
  description: string
  id: string
  productId: string
}
