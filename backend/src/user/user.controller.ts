import { Request, Response } from 'express';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';

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
    await userService.withdraw(email);
    res.status(200).end();
  }

  async updateMyself(req: Request, res: Response) {
    const { email } = req.context.currentUser;
    const { oldPassword, newPassword, ...userInfo } = req.body as Partial<{
      oldPassword: string, newPassword: string,
    } & Omit<UserT, 'auth' | 'isDeleted'>>;
    const isExistUser = await authService.existUserByEmail(email);
    if (isExistUser === true) {
      await authService.updatePassword(oldPassword, {
        email,
        password: newPassword // 새 비밀번호
      });
      await userService.updateUser(email, userInfo);
      res.status(200).end();
    }
  }
}
