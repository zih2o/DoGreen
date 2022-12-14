import { NextFunction, Request, Response } from 'express';

function adminRequired(req: Request, res: Response, next: NextFunction) {
  if (req.currentUserRole !== 'ADMIN') {
    res.status(403).json({
      result: 'forbidden-approach',
      reason: '관리자만 사용할 수 있는 서비스입니다.'
    });

    return;
  }

  next();
}

export { adminRequired };
