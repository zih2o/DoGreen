type CommentT = {
    refPost: Types.ObjectId,
    username: Types.ObjectId,
    content: string,
}

interface ICommentRepository {
    createComment: (commentInfo: CommentT['content']) => Promise<void>
    findAllComment: ()=>Promise<CommentT[]>
}
