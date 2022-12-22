import { Router } from 'express';
import { CommentController } from './commentController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';

const commentController = new CommentController();
const commentRouter = Router();

commentRouter.post('/');
