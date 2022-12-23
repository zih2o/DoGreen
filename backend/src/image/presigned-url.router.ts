// import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
// import { v4 as uuidv4 } from 'uuid';
// import { S3Client } from '@aws-sdk/client-s3';

// export async function generateUploadUrl({ type }: { type: string }) {
//   const fileName = `${Date.now()}${uuidv4()}`;
//   const expiresInMinutes = 1;
//   const s3Client = new S3Client({
//     credentials: {
//       accessKeyId: process.env.AWS_ACCESS_KEY as string,
//       secretAccessKey: process.env.AWS_SECRET_KEY as string
//     },
//     region: 'ap-northeast-2'

//   });
//   return createPresignedPost(
//     s3Client,
//     {
//       Bucket: 'img-bucket-green',
//       Key: `public/${fileName}`,
//       Expires: expiresInMinutes * 60, // the url will only be valid for 1 minute
//       Conditions: [['eq', '$Content-Type', type]]
//     }
//   );
// }
