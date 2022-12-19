import { NextFunction, Request, Response } from 'express';

const adminRequired = (req: Request, res: Response, next: NextFunction) => {
// Try-catch 에러처리로 분리?
  try {
    if (req.context.currentUser.role !== 'ADMIN') {
      res.status(403).json({ message: 'Access denied' });
    } else {
      next();
    }
  } catch (e) {
    res.status(500).json({ message: `An ${e} has occured` });
  }
};

export { adminRequired };
