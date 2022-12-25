type CommentT = {
    id: Types.ObjectId,
    refPost: Types.ObjectId,
    userId: Types.ObjectId,
    comment: string,
    comments? : Types.ObjectId[]

}

type updateCommentDto = Pick<CommentT, 'id', 'comment'>
interface ICommentRepository {
    createComment: (comment: CommentT['comment'], postId: CommentT[refPost], userId: CommentT['userId']) => Promise<Object>

}
