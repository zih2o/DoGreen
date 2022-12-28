import { NextFunction, Request, Response } from 'express';

const initEmptyContext = (req: Request, res: Response, next: NextFunction) => {
  req.context = {};
  next();
};

export default initEmptyContext;
