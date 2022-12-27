import { Router } from 'express';
import { CommentController } from './commentController';
import { loginRequired } from '../middleware/loginRequired';
import { nextError } from '../nextError';

const commentController = new CommentController();
const commentRouter = Router();

commentRouter.use(loginRequired);

commentRouter.get('/', nextError(commentController.paginationComment));
commentRouter.get('/:id', nextError(commentController.findAllCommentAtPost));
// commentRouter.get('/me', nextError(commentController.findMyComment));

commentRouter.post('/', nextError(commentController.createComment));
commentRouter.patch('/:id', nextError(commentController.updateComment));
commentRouter.delete('/:id', nextError(commentController.deleteComment));
export { commentRouter };
