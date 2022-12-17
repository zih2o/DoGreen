import { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();
export class AdminController {
  async findAll(req: Request, res: Response) {
    const users = await userService.findAll();
    res.status(200).json(users);
  };

  async banUsers(req: Request, res: Response) {
    const usernames = req.body;
    await userService.banUsers(usernames);
    res.status(200).end();
  };

  async cancelBanUsers(req: Request, res: Response) {
    const usernames = req.body;
    await userService.cancelBanUsers(usernames);
    res.status(200).end();
  };

  async getInactiveUsers(req: Request, res: Response) {
    const inactiveUsers = await userService.getInactiveUsers();
    res.status(200).json(inactiveUsers);
  };

  async getActiveUsers(req: Request, res: Response) {
    const activeUsers = await userService.getActiveUsers();
    res.status(200).json(activeUsers);
  };
}
