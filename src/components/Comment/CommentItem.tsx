import { Comment } from '@/types/models'

export const CommentItem = ({ comment }: CommentProps) => {
  return (
    <div>
      <div>{comment.description}</div>
      <div>{new Date(comment.date).toLocaleString('ru-RU')}</div>
    </div>
  )
}

type CommentProps = {
  comment: Comment
}
