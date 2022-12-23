import { ParamsDictionary } from 'express-serve-static-core';
import { PostRepository } from '../post/postRepository';
import { CommentRepository } from './commentRepository';
import { UserService } from '../user/user.service';
import { PersonalCommentRepository } from '../personalComment/personalCommentRepository';

const commentRepository = new CommentRepository();
const personalCommentRepository = new PersonalCommentRepository();
const postRepository = new PostRepository();
const userService = new UserService();

export class CommentService {
  async findAllCommentAtPost(postId: CommentT['refPost']) {
    const commentId = await postRepository.findAllCommentAtPost(postId);
    return commentId;
  }

  async createComment(comment: CommentT['comment'], postId: PostT['id'], authId:string) {
    // 코멘트 등록
    // 포스트의 아이디를 찾아 넣어줘야한다 (바디로 온것으로 찾기) (코멘트에)
    const findIdForComment = await postRepository.findPost(postId);

    // authid로 userSchema에서 id와 이름을 받는다
    // user의 전체 정보가 저장된다. 여기서 ID랑 name만 꺼내쓰면 됨
    const findUser = await userService.findUserByAuthId(authId);

    // 찾은 username은 comment에 받아온 내용과 함께 생성

    // 그 해당 포스트에 생성된 코멘트id도 넣어줘야함(배열형태)
    const newComment = await commentRepository
      .createComment(findIdForComment?.id, findUser.id, comment);
    // 생성완료
    // 생성된 코멘트에서 또 id를 뽑아서 post에 comments 배열에 저장시켜줘야함

    // 찾은 postId를 postSchma에 저장
    await postRepository.addcommentList(findIdForComment?.id, newComment.id);

    // 이미 개인의 댓글 DB가 존재하는지 검증
    // 찾은 userId를 personalComment Schema에 할당
    const isExist = await personalCommentRepository.isExist(findUser.id);
    if (isExist === null) {
      await personalCommentRepository.createList(findUser.id, newComment.id);
    } else await personalCommentRepository.pushList(findUser.id, newComment.id);
  }
}
