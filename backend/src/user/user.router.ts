import { Router } from 'express';
import { UserController } from './user.controller';

const userController = new UserController();
const userRouter = Router();

userRouter.get('/:username', userController.findUserByUserName);
userRouter.patch('/withdraw', userController.updateUserInfo); // 탈퇴
userRouter.patch('/', userController.updateUserInfo); // 수정

export { userRouter };
