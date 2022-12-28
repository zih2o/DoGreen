import { Request, Response } from 'express';
import { AuthService } from '../auth/auth.service';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { zParse } from '../zParse';
import { UserService } from './user.service';
import { updateSchema } from './user.zodSchema';

const userService = new UserService();
const authService = new AuthService();

// user가 자기 정보를 조회함
export class UserController {
  async findMyUserInfo(req: Request, res: Response) {
    const { email } = req.context.currentUser;
    const userInfo = await userService.findUserByEmail(email);
    res.status(200).json(userInfo);
  }

  async withdrawMyself(req: Request, res: Response) {
    const { email } = req.context.currentUser;
    const { currentPassword } = req.body;
    await userService.withdraw(email, currentPassword);
    res.status(200).end();
  }

  async updateMyself(req: Request, res: Response) {
    const { email } = req.context.currentUser;
    const {
      body: { oldPassword, newPassword, ...userInfo }
    } = await zParse(updateSchema, req);

    invariant(oldPassword !== undefined, new BadRequestError('비밀번호가 필요합니다.'));

    await authService.updatePassword(oldPassword, {
      email,
      password: newPassword // 새 비밀번호
    });

    await userService.updateUser(email, userInfo);
    res.status(200).end();
  };
}
