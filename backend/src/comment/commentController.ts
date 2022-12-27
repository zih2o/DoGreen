import { Request, Response } from 'express';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { CommentService } from './commentService';

const commentService = new CommentService();

export class CommentController {
  async paginationComment(req:Request, res:Response) {
    const { postId } = req.query;
    const page = Number(req.query.page || 1);
    const perPage = Number(req.query.perPage || 10);

    invariant(typeof postId === 'string', new BadRequestError('해당하는 post가 존재하지 않습니다.'));
    const pagingComments = await commentService.paginationPost(postId, page, perPage);
    res.status(200).json(pagingComments);
  }

  // async findMyComment(req:Request, res:Response) {
  //   const myAuthId = req.context.currentUser.authId;
  //   const comments = commentService.findMyComment(myAuthId);
  //   res.status(200).json(comments);
  // }

  async findAllCommentAtPost(req: Request, res: Response) {
    const { id } = req.params;
    const allComment = await commentService.findAllCommentAtPost(id);
    res.status(200).json(allComment);
  }

  async createComment(req: Request, res: Response) {
    const currentAuthId = req.context.currentUser.authId;
    const { comment, postId } = req.body;
    await commentService.createComment(comment, postId, currentAuthId);
    res.status(201).end();
  }

  async updateComment(req: Request, res: Response) {
    const currentAuthId = req.context.currentUser.authId;
    const commentId = req.params.id;
    const { comment } = req.body;

    await commentService.updateComment(comment, commentId, currentAuthId);
    res.status(200).end();
  }

  async deleteComment(req: Request, res: Response) {
    const currentAuthId = req.context.currentUser.authId;
    const commentId = req.params.id;

    await commentService.deleteComment(commentId, currentAuthId);
    res.status(204).end();
  }
}
