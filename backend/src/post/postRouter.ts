import { Router } from 'express';
import { PostController } from './postController';
import { adminRequired } from '../middleware/adminRequired';

const postController = new PostController();
const postRouter = Router();

postRouter.post('/create', adminRequired, postController.createPost);
postRouter.get('/:id', postController.findOnePost);
postRouter.get('/', postController.findAllPost);

export { postRouter };
