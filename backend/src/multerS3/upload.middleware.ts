import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import { Request } from 'express';
import invariant from '../invariant';

type FileNameCallback = (error: Error | null, filename: string) => void;

invariant(process.env.AWS_ACCESS_KEY, 'ACESS_KEY 환경변수가 필요합니다.');
invariant(process.env.AWS_SECRET_KEY, 'SECRET_KEY 환경변수가 필요합니다.');
invariant(process.env.BUCKET_NAME, 'BUCKET_NAME 환경변수가 필요합니다.');

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  },
  region: 'ap-northeast-2'
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.BUCKET_NAME,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req: Request, file: Express.Multer.File, cb: FileNameCallback) {
      cb(null, `${Date.now()}_${file.originalname}`);
    }
  })
});
export default upload;
