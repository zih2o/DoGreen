import { NextFunction, Request, Response } from 'express';
import { ForbiddenError } from '../errors/ForbiddenError';

const adminRequired = (req: Request, res: Response, next: NextFunction) => {
  if (req.context.currentUser.role !== 'ADMIN') {
    throw new ForbiddenError('관리자만 이용할 수 있습니다.');
  }

  next();
};

export { adminRequired };
