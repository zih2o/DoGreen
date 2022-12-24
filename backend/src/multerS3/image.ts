import express from 'express';
import upload from './upload.middleware';
import { ImageController } from './image.controller';

const imageController = new ImageController();

export const router = express.Router();

router.post('/image', upload.single('image'), imageController.post);
