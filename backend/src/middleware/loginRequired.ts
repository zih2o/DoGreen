import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import invariant from '../invariant';
import logger from '../logger';

const loginRequired = (req: Request, res: Response, next: NextFunction) => {
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
