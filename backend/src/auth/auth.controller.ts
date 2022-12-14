import express, { Request, Response } from 'express';
import { UserService } from '../user/user.service';

const authService = {} as IAuthService;
const userService = new UserService();

export class AuthController {
  async register(req: Request, res: Response) {
    const {
      username,
      email,
      password,
      role
    } = req.body; // username, email, password
    await authService.register({ email, password, role });
    await userService.createUser({ username, email });
    res.status(201);
  };

  //  _id를 어떻게꺼내지?
  // login
  /*
  user email과 password를 받는다
  email로 auth 정보 찾아온다
  auth의 password와 db의 password를 argon2로 compare한다

  일치하면 jwt로 auth 정보를 암호화해서 json web token 문자열로 만든다
  사용자에게 준다
  */
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userToken = await userService.getUserToken({ email, password });
    // post요청인데 과연 200이 맞을까
    res.status(200).json(userToken);
  };
  // SOFT DELTE 탈퇴
  // register
  /*
  user 정보를 받는다
  Auth 생성 (password는 argon2로 암호화)
  user 생성
  */

  // login required
  /*
  클라이언트는 Authorization 헤더에 token을 보낸다
  헤더에서 토큰을 꺼내고 Bearer를 자르고 오른쪽만 남긴다.
  -> 토큰이 없으면 에러!
  토큰을 해독해서 auth 정보랑 role을 꺼낸다 (role은 auth에 속한다)
  -> 잘못된 토큰이면 에러!
  -> 올바른 토큰이면 next 허가
  */
};
