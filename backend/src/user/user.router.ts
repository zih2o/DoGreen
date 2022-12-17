import { Router } from 'express';
import { loginRequired } from '../middleware/loginRequired';
import { UserController } from './user.controller';

const userController = new UserController();
const userRouter = Router();

userRouter.use(loginRequired);

userRouter.get('/me', userController.findMyUserInfo);
userRouter.patch('/me/withdraw', userController.withdrawMyself); // 탈퇴
userRouter.patch('/me', userController.updateMyself); // 수정

export { userRouter };
