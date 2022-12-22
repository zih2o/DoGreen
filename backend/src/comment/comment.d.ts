type CommentT = {
    refPost: Types.ObjectId,
    userId: Types.ObjectId,
    comment: string,
}

interface ICommentRepository {
    createComment: (comment: CommentT['comment'], postId: CommentT[refPost], userId: CommentT['userId']) => Promise<Object>

}
