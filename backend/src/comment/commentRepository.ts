import { model, Types } from 'mongoose';
import { CommentSchema } from './commentSchema';

const CommentModel = model<CommentT>('comments', CommentSchema);

export class CommentRepository implements ICommentRepository {
  async deleteComment(commentId: string) {
    await CommentModel.findByIdAndDelete(commentId);
  }

  async updateComment(commentId: updatePostDto, toUpdate: updatePostDto) {
    await CommentModel.findByIdAndUpdate(commentId, toUpdate);
  }

  async createComment(postId: PostT['id'], userId:CommentT['userId'], comment: CommentT['comment']) {
    const newComment = await CommentModel.create({
      refPost: postId,
      userId,
      comment
    });
    return newComment;
  }
}
