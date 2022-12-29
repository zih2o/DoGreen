import { Router } from 'express';
import { PostController } from './postController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';
import { nextError } from '../nextError';
import { loginOptional } from '../middleware/loginOptional';

const postController = new PostController();
const postRouter = Router();

// NOT LOGGED IN
postRouter.get('/', loginOptional, nextError(postController.paginationPost));
postRouter.get('/:id', loginOptional, nextError(postController.findOnePost));

// ADMIN
postRouter.get('/all/admin', loginRequired, adminRequired, nextError(postController.findAllPost));
postRouter.post('/create', loginRequired, adminRequired, nextError(postController.createPost));
postRouter.patch('/:id', loginRequired, adminRequired, nextError(postController.updatePost));
postRouter.delete('/:id', loginRequired, adminRequired, nextError(postController.deletePost));

// USER
postRouter.patch('/like/:id', loginRequired, nextError(postController.addlikeUserId));

export { postRouter };
