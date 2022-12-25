import { model, Types } from 'mongoose';
import { CommentSchema } from './commentSchema';
import { PostSchema } from '../post/postSchema';

const CommentModel = model<CommentT>('comments', CommentSchema);
const PostModel = model<PostT>('posts', PostSchema);

export class CommentRepository implements ICommentRepository {
  async paginationComment(postId: PostT['id'] | string, page: number, perPage: number) {
    // eslint-disable-next-line max-len
    const findcomments: any | null = await PostModel.findById(postId, { comments: 1 });
    const total = findcomments?.comments?.length;
    const totalPage = Math.ceil(total / perPage);

    const comments:any = await PostModel.findById(postId).populate('comments').select('comments');
    const result = comments?.comments.slice(perPage * (page - 1), perPage * page);
    const totalPge = Math.ceil(total / perPage);

    return {
      page, perPage, result, totalPage
    };
    // console.log(totalPage);
  }

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
