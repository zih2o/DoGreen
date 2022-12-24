import fs from 'fs';
import { model } from 'mongoose';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { storage } from './config/s3.config';
// import { ParamsT } from './image';
import { ImageSchema } from './image.schema';

const ImageModel = model<ImageT>("images", ImageSchema);

export class ImageService {
  async uploadFileToS3(fileData: Express.Multer.File): Promise<FileResponseDto> {
    // try {
      const fileContent = fs.readFileSync(fileData.path) as Buffer;
     const params: ParamsT =
        { Bucket: config.bucketName,
            Key: fileData.originalname,
            Body: fileContent
        }

      const result = await storage.upload(params).promise();
        invariant(result !== null || result !== undefined, new BadRequestError('이미지 파일이 없습니다.'))
      const file = new File({
        link: result.Location,
        fileName: fileData.originalname
      });

      await file.save();

      const data = {
        _id: file._id,
        link: result.Location
      };

      return data;
    } 
    // catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  };
};

