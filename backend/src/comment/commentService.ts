import { PostRepository } from '../post/postRepository';
import { CommentRepository } from './commentRepository';
import { NotFoundError } from '../errors/NotFoundError';
import invariant from '../invariant';

const commentRepository = new CommentRepository();
const postRepository = new PostRepository();

export class CommentService {
  async findPaginatedCommentAtPost(postId: string, page: number, perPage: number) {
    const pagingComment = await commentRepository.paginationComment(postId, page, perPage);
    return pagingComment;
  }

  async deleteComment(commentId: string, currentAuthId: string) {
    // 양쪽이 강하게 결합되어 있어 분리가 반드시 필요합니다
    await this.isWrittenByCurrentUser(commentId, currentAuthId);
    await postRepository.deletePostCommentId(commentId, currentAuthId);
    await commentRepository.deleteComment(commentId, currentAuthId);
  }

  async isWrittenByCurrentUser(commentId: string, currentAuthId: string) {
    await commentRepository.isWrittenByCurrentUser(commentId, currentAuthId);
  }

  async updateComment(comment: CommentT['comment'], commentId: string, currentAuthId: string) {
    // 코멘트 수정
    await this.isWrittenByCurrentUser(commentId, currentAuthId);
    const toUpdate = {
      ...(comment && { comment })
    };
    await commentRepository.updateComment(commentId, toUpdate, currentAuthId);
  }

  async createComment(comment: CommentT['comment'], postId: string, authId:string) {
    invariant(
      await postRepository.isExistPost(postId),
      new NotFoundError(`${postId} Post가 없습니다.`)
    );

    // 찾은 username은 comment에 받아온 내용과 함께 생성
    const newComment = await commentRepository
      .createComment(postId, authId, comment);

    await postRepository.addcommentList(postId, newComment.id);
  }
}
