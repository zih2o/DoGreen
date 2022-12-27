import { Router } from 'express';
import { PostController } from './postController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';
import { nextError } from '../nextError';

const postController = new PostController();
const postRouter = Router();

postRouter.post('/create', loginRequired, adminRequired, nextError(postController.createPost));
postRouter.get('/like/:id', loginRequired, nextError(postController.addlikeUserId));
postRouter.patch('/:id', loginRequired, adminRequired, nextError(postController.updatePost));
postRouter.delete('/:id', loginRequired, adminRequired, nextError(postController.deletePost));
postRouter.get('/posts', nextError(postController.paginationPost));
postRouter.get('/:id', nextError(postController.findOnePost));
postRouter.get('/', nextError(postController.findAllPost));

export { postRouter };
