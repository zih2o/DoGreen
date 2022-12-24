import { Router } from 'express';
import { ImageController } from './image.controller';
import { nextError } from '../nextError';
import { loginRequired } from '../middleware/loginRequired';

const imageController = new ImageController();
const imageRouter = Router();
imageRouter.use(loginRequired);
imageRouter.post('/upload', nextError(imageController.uploadFileToS3));

export { imageRouter };
