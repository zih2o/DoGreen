import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { v4 as uuidv4 } from 'uuid';
import { s3Client } from './config.s3.client';

export async function generateUploadUrl({ type }: { type: string }) {
  const fileName = `${Date.now()}${uuidv4()}`;
  const expiresInMinutes = 1;

  return createPresignedPost(s3Client, {
    Bucket: 'img-bucket-green',
    Key: `public/${fileName}`,
    Expires: expiresInMinutes * 60, // the url will only be valid for 1 minute
    Conditions: [['eq', '$Content-Type', type]]
  });
}
