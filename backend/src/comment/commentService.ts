import { PostRepository } from '../post/postRepository';
import { CommentRepository } from './commentRepository';

const commentRepository = new CommentRepository();
const postRepository = new PostRepository();

export class CommentService {
    async createComment(comment: CommentT['content'], id: PostT['id']) {
      const findIdForComment = await postRepository.findPost(id);
      await commentRepository.createComment(findIdForComment?.id, comment);
      
}
