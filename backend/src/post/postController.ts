import { Request, Response, NextFunction } from 'express';
import { ObjectId, Types } from 'mongoose';
import { PostRepository } from './postRepository';
import { PostService } from './postService';

const postService = new PostService();

export class PostController {
  async createPost(req: Request, res: Response, next: NextFunction) {
    const createPostInfo = req.body;
    await postService.createPost(createPostInfo);
    res.status(200).end();
  }

  async deletePost(req: Request, res: Response, next: NextFunction) {
    const id = req.params;
    await postService.deletePost(id);
    res.status(200).end();
  }

  async updatePost(req: Request, res: Response, next: NextFunction) {
    const updatedContents = req.body;
    await postService.updatePost(updatedContents, req.params.id);
    res.status(200).end();
  }

  async findOnePost(req: Request, res: Response, next: NextFunction) {
    const id = req.params;
    const postInfo = await postService.findOnePost(id);
    res.status(201).json(postInfo);
  }

  async findAllPost(req: Request, res: Response, next: NextFunction) {
    try {
      const postInfo = await postService.findAllPost();
      res.status(201).json(postInfo);
    } catch (err) {
      next(err);
    }
  }
}
