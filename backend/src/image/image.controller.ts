// import { Request, Response } from 'express';
// import { BadRequestError } from '../errors/BadRequestError';
// import invariant from '../invariant';
// import { generateUploadUrl } from './presigned-url.router';

// class ImageController {
//   async generateUrl(req: Request, res: Response) {
//     const { type } = req.body;
//     invariant(type !== undefined && type !== null, new BadRequestError('invalid format error'));
//     const url = await generateUploadUrl({ type });
//     res.status(200).json(url);
//   }
// }
// export { ImageController };
