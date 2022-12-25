import { Router } from 'express';
import { CommentController } from './commentController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';

const commentController = new CommentController();
const commentRouter = Router();

commentRouter.post('/', loginRequired, commentController.createComment);
commentRouter.get('/comments', commentController.paginationComment);
commentRouter.get('/:id', commentController.findAllCommentAtPost);
commentRouter.patch('/:id', loginRequired, commentController.updateComment);
commentRouter.delete('/:id', loginRequired, commentController.deleteComment);
export { commentRouter };
