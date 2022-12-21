import { NextFunction, Request, Response } from 'express';
import { ForbiddenError } from '../errors/ForbiddenError';
import { UserService } from '../user/user.service';

const userService = new UserService();

const activeRequired = (req: Request, res: Response, next: NextFunction) => {
  const { authId } = req.context.currentUser;
  userService.isActive(authId)
    .then((isDeleted: boolean) => {
      if (isDeleted) {
        throw new ForbiddenError('활성화된 유저만 사용할 수 있습니다.');
      }

      next();
    })
    .catch(e => {
      next(e);
    });
};

export { activeRequired };
