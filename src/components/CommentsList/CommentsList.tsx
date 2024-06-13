import { Comment } from '@/types/models'

import { CommentItem } from '../Comment/CommentItem'

export const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <div>
      {comments.map(c => (
        <CommentItem comment={c} key={c.id} />
      ))}
    </div>
  )
}

type CommentsListProps = {
  comments: Comment[]
}
