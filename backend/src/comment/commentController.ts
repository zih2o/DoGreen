import { Request, Response, NextFunction } from 'express';
import { CommentService } from './commentService';

const commentService = new CommentService();

export class CommentController {
  async findAllCommentAtPost(req: Request, res: Response, next: NextFunction) {
    const postId = req.params;
    await commentService.findAllCommentAtPost(postId);
  }

  async createComment(req: Request, res: Response, next: NextFunction) {
    const currentAuthId = req.context.currentUser.authId;
    const { comment, postId } = req.body;
    await commentService.createComment(comment, postId, currentAuthId);
    res.status(200).end();
  }
}
