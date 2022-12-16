import { Request, Response } from 'express';
import { UserService } from './user-service';

const userService = new UserService();
// 여기다가 admin-required 어케주입하지
export class AdminController {
  async findAll(req: Request, res: Response) {
    userService.findAll();
    res.status(200);
  };

  async banUsers(req: Request, res: Response) {
    const { usernames } = req.body;
    userService.banUsers(usernames);
    res.send(200);
  };

  async getBannedOrLeaveUser(req: Request, res: Response) {
    userService.getBannedOrLeaveUser();
    res.send(200);
  }
}
