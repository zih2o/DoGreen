import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
const userController = new UserController();
const userRouter = Router();

router.use('/user', userRouter);

userRouter.get('/:username', userController.findUserByUserName);
userRouter.patch('/withdraw', userController.updateUser); // 탈퇴
userRouter.patch('/', userController.updateUser); // 수정
