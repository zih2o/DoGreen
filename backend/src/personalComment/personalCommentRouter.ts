import { Router } from 'express';
import { PersonalCommentController } from './personalCommentController';

const personalCommentController = new PersonalCommentController();
const personalCommentRouter = Router();

personalCommentRouter.get('/');
