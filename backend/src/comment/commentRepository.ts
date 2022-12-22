import { model } from 'mongoose';
import { CommentSchema } from './commentSchema';

const CommentModel = model<CommentT>('comments', CommentSchema);

export class CommentRepository implements ICommentRepository {
  async createComment(postId: PostT['id'], comment:CommentT['content']) {
    await CommentModel.create(comment);
  }

  async findAllComment() {

  }
}
