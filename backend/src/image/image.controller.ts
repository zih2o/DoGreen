import {
  Request, Response
} from 'express';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { ImageService } from './image.service';

const imageService = new ImageService();
export class ImageController {
  async uploadFileToS3(req: Request, res: Response) {
    invariant(
      req.file !== null && req.file !== undefined,
      new BadRequestError('이미지 파일이 필요합니다.')
    );

    const fileData: Express.Multer.File = req.file;
    await imageService.uploadFileToS3(fileData);
    res.status(201).end();
  }
}
