import { Router } from 'express';
import { nextError } from '../nextError';
import { AuthController } from './auth.controller';

const authRouter = Router();

const authController = new AuthController();

authRouter.post('/register', nextError(authController.register));
authRouter.post('/login', nextError(authController.login));

export { authRouter };
