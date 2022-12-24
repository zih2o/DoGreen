import express from 'express';
import upload from './upload.middleware';
import { ImageController } from './image.controller';

const imageController = new ImageController();

const imageRouter = express.Router();

imageRouter.post('/image', upload.single('image'), imageController.post);

export { imageRouter };
