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

  async updateUser(req: Request, res: Response) {
    const { requiredPassword, userInfo } = req.body;
    const isExistUser = await authService.existUserByEmail(userInfo.email);
    if (isExistUser === true) {
      Promise.all([
        authService.isPasswordCorrect(requiredPassword),
        authService.updatePassword(userInfo.newPassword),
        userService.updateUser(userInfo)
      ]);
      res.status(201);
    }
  }
}
