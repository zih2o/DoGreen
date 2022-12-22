import { Request, Response, NextFunction } from 'express';
import { CommentService } from './commentService';

const commentService = new CommentService();

export class CommentController {
  async createComment(req: Request, res: Response, next: NextFunction) {
    const { comment, id, username } = req.body;
    await commentService.createComment(comment, id, username);
  }
}
