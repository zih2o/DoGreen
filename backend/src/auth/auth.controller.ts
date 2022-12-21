import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

const authService = new AuthService();
const userService = new UserService();

export class AuthController {
  async register(req: Request, res: Response) {
    await userService.register(req.body);
    res.status(201).end();
  };

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userToken = await authService.generateUserToken({ email, password });
    res.status(200).json(userToken);
  };

  async isDuplicated(req: Request, res: Response) {
    const { email, username } = req.body;
    const result = { email: false, username: false };
    if (email) {
      result.email = await userService.isDuplicatedEmail(email);
    }
    if (username) {
      result.username = await userService.isDuplicatedUsername(username);
    }
    res.status(200).json(result);
  }
};
