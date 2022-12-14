import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import invariant from '../invariant';

function loginRequired(req: Request, res: Response, next: NextFunction) {
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
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';
    const jwtDecoded = jwt.verify(userToken, secretKey);

    invariant(typeof jwtDecoded === 'object', 'jwt payload는 객체여야 합니다');

    const { _id, role } = jwtDecoded;
    req.currentUserId = _id;
    req.currentUserRole = role;

    next();
  } catch (error) {
    // jwt.verify 함수가 에러를 발생시키는 경우는 토큰이 정상적으로 decode 안되었을 경우임.
    // 403 코드로 JSON 형태로 프론트에 전달함.
    res.status(403).json({
      result: 'forbidden-approach',
      reason: '정상적인 토큰이 아닙니다.'
    });
  }
}

export { loginRequired };
