import { Router } from 'express';
import { PostController } from './postController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';

const postController = new PostController();
const postRouter = Router();

postRouter.post('/create', postController.createPost);
postRouter.get('/:id', postController.findOnePost);
postRouter.get('/', postController.findAllPost);

export { postRouter };
