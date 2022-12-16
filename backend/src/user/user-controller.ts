import { Request, Response } from 'express';
import { AuthService } from '../auth/auth-service';
import { UserService } from './user-service';

const userService = new UserService();
const authService = new AuthService();

// user가 자기 정보를 조회함
export class UserController {
  async findUserByUserName(req: Request, res: Response) {
    const { username } = req.params;
    await userService.findUserByUsername(username);
    res.status(200);
  }

  async updateUserInfo(req: Request, res: Response) {
    const { oldPassword, newPassword, ...userInfo } = req.body as Partial<{
      oldPassword: string, newPassword: string,
    } & Omit<UserT, 'auth' | 'isDeleted'>>;
    const isExistUser = await authService.existUserByEmail(req.currentUserId);
    if (isExistUser === true) {
      await authService.updatePassword(oldPassword, {
        email: req.currentUserId,
        password: newPassword // 새 비밀번호
      });
      await userService.updateUser(userInfo);
      res.status(200);
    }
  }
}
