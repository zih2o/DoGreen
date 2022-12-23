import { Request, Response, NextFunction } from 'express';
import { CommentService } from './commentService';

const commentService = new CommentService();

export class CommentController {
  async findAllCommentAtPost(req: Request, res: Response, next: NextFunction) {
    const postId = req.params;
    const allComment = await commentService.findAllCommentAtPost(postId);
    res.status(200).json(allComment);
  }

  async createComment(req: Request, res: Response, next: NextFunction) {
    const currentAuthId = req.context.currentUser.authId;
    const { comment, postId } = req.body;
    await commentService.createComment(comment, postId, currentAuthId);
    res.status(200).end();
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    const currentAuthId = req.context.currentUser.authId;
    const commentId = req.params.id;
    const { comment } = req.body;

    await commentService.updateComment(comment, commentId, currentAuthId);
    res.status(201).end();
  }

  async deleteComment(req: Request, res: Response, next: NextFunction) {
    const currentAuthId = req.context.currentUser.authId;
    const commentId = req.params.id;

    await commentService.deleteComment(commentId, currentAuthId);
  }
}
