import { S3Client } from '@aws-sdk/client-s3';

export const storage = new S3Client({
  credentials: {

    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string
  },
  region: 'ap-northeast-2'
});
