import { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();
export class AdminController {
  async findAll(req: Request, res: Response) {
    const users = await userService.findAll();
    res.status(200).json(users);
  };

  async banUsers(req: Request, res: Response) {
    const { usernames } = req.body;
    await userService.banUsers(usernames);
    res.status(200).end();
  };

  async getBannedOrLeaveUser(req: Request, res: Response) {
    const inactiveUsers = await userService.getBannedOrLeaveUser();
    res.status(200).json(inactiveUsers);
  }
}
