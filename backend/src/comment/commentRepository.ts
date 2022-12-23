import { model } from 'mongoose';
import { CommentSchema } from './commentSchema';

const CommentModel = model<CommentT>('comments', CommentSchema);

export class CommentRepository implements ICommentRepository {
  async createComment(postId: PostT['id'], userId:CommentT['userId'], comment: CommentT['comment']) {
    const newComment = await CommentModel.create({
      refPost: postId,
      userId,
      comment
    });
    return newComment;
  }
}
