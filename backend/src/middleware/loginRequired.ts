import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import invariant from '../invariant';
import logger from '../logger';

// module.exports = function setCurrentUser(req, res, next) {
// const loginRequiredRefactored = (req: Request, res: Response, next: NextFunction) => {
//   req.header('authorization');
//   const user = getUserFromToken(token).then((user) => {
//     req.currentUserId = user;

//     next();
//   });
// };

// module.exports = function isLoggedIn(req: Request, res: Response, next: NextFunction) {
//   if (req.currentUserId) {
//     next();
//   } else {
//     // return unauthorized
//     res.send(404).json({
//       result: 'forbidden-approach',
//       reason: '정상적인 토큰이 아닙니다.'
//     });
//   }
// };

const loginRequired = (req: Request, res: Response, next: NextFunction) => {
  // request 헤더로부터 authorization bearer 토큰을 받음.
  const userToken = req.headers['authorization']?.split(' ')[1];

  if (!userToken || userToken === 'null') {
    res.status(403).json({
      result: 'forbidden-approach',
      reason: '로그인한 유저만 사용할 수 있는 서비스입니다.'
    });

    return;
  }

  // 해당 token 이 정상적인 token인지 확인
  try {
    const secretKey = process.env.JWT_SECRET || 'secret-key';
    const currentUser = jwt.verify(userToken, secretKey);
    invariant(typeof currentUser === 'object', 'jwt payload는 객체여야 합니다');

    const context = {
      currentUser: currentUser as {
        authId: string,
        email: string,
        role: Role,
      }
    };

    req.context = context;
  } catch (error) {
    logger.error(error);
    res.status(403).json({
      result: 'forbidden-approach',
      reason: '정상적인 토큰이 아닙니다.'
    });
    return;
  }

  next();
};

export { loginRequired };
