import { Router } from 'express';
import { CommentController } from './commentController';
import { loginRequired } from '../middleware/loginRequired';
import { nextError } from '../nextError';

const commentController = new CommentController();
const commentRouter = Router();

commentRouter.get('/comments', nextError(commentController.paginationComment));
commentRouter.get('/:id', nextError(commentController.findAllCommentAtPost));

commentRouter.post('/', loginRequired, nextError(commentController.createComment));
commentRouter.patch('/:id', loginRequired, nextError(commentController.updateComment));
commentRouter.delete('/:id', loginRequired, nextError(commentController.deleteComment));
export { commentRouter };
