import express, { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();
// user가 자기 정보를 조회함
export class UserController {
  async getByUserName(req: Request, res: Response) {
    return 1;
  }
}
