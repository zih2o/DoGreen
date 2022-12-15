import { NextFunction, Request, Response } from 'express';

function adminRequired(req: Request, res: Response, next: NextFunction) {
// Try-catch 에러처리로 분리?
  try {
    if (req.currentUserRole !== 'ADMIN') {
      res.status(403).json({ message: 'Access denied' });
    }
    next();
  } catch (e) {
    res.status(500).json({ message: `An ${e} has occured` });
  }
};

export { adminRequired };
