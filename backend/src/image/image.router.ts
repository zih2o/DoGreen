import express from 'express';
import upload from './upload.middleware';
import { ImageController } from './image.controller';
import { nextError } from '../nextError';

const imageController = new ImageController();

const imageRouter = express.Router();

imageRouter.post('/', upload.single('image'), nextError(imageController.post));

export { imageRouter };
