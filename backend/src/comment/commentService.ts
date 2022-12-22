import { PostRepository } from '../post/postRepository';
import { CommentRepository } from './commentRepository';

const commentRepository = new CommentRepository();
const postRepository = new PostRepository();

export class CommentService {
    async createComment(comment: CommentT['content'], id: PostT['id'], username: UserT['username']) {
        // 코멘트 등록
        // 포스트의 아이디를 찾아 넣어줘야한다
        // 
        const findIdForComment = await postRepository.findPost(id);
        const findNameForComment = await
      await commentRepository.createComment(findIdForComment?.id, comment);
      
}
