import { PostRepository } from '../post/postRepository';
import { CommentRepository } from './commentRepository';
import invariant from '../invariant';

const commentRepository = new CommentRepository();
const postRepository = new PostRepository();

export class CommentService {
  async paginationPost(postId: string, page: number, perPage: number) {
    const pagingComment = await commentRepository.paginationComment(postId, page, perPage);
    return pagingComment;
  }

  async deleteComment(commentId: string, currentAuthId: string) {
    // personal 배열에서 삭제
    // await commentRepository.deletePersonalCommentId(commentId, currentAuthId);
    // posts 배열에서 삭제
    await postRepository.deletePostCommentId(commentId);
    // comment 삭제
    await commentRepository.deleteComment(commentId);
  }

  async updateComment(comment: CommentT['comment'], commentId: string, currentAuthId:string) {
    // 코멘트 수정

    const toUpdate = {
      ...(comment && { comment })
    };

    await commentRepository.updateComment(commentId, toUpdate);
  }

  async findAllCommentAtPost(postId: string) {
    // 보내고 싶은 형태
    //   [
    //     username: ,
    //     comment: ,
    //     createAt,
    //     upadateAt
    // ]
    const commentId = await postRepository.findAllCommentAtPost(postId);
    return commentId;
  }

  async createComment(comment: CommentT['comment'], postId: string, authId:string) {
    // 코멘트 등록
    // 포스트의 아이디를 찾아 넣어줘야한다 (바디로 온것으로 찾기) (코멘트에)
    const post = await postRepository.findPost(postId);

    // 찾은 username은 comment에 받아온 내용과 함께 생성
    const newComment = await commentRepository
      .createComment(post.id, authId, comment);
    // 생성완료
    // 생성된 코멘트에서 또 id를 뽑아서 post에 comments 배열에 저장시켜줘야함

    // 찾은 postId를 postSchma에 저장
    await postRepository.addcommentList(post.id, newComment.id);

    // 이미 개인의 댓글 DB가 존재하는지 검증
    // 찾은 userId를 personalComment Schema에 할당
    // const isExist = await comment.isExist(authId);
    // if (isExist === null) {
    //   await personalCommentRepository.createList(authId, newComment.id);
    // } else await personalCommentRepository.pushList(authId, newComment.id);
  }
}
