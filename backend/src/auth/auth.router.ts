import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();
const authRouter = Router();

const authController = new AuthController();

router.use('/auth', authRouter);

authRouter.post('/register', authController.register);
authRouter.post('login', authController.login);
