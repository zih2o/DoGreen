import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json' assert { type: 'json' };
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};
// main router
const router = Router();
// controller 의존성 주입
const authController = new AuthController();
const userController = new UserController();
//
const authRouter = Router();
const userRouter = Router();

// 유저가 로그인 -> 토큰 발급
router.use('/auth', authRouter);
router.use('/user', userRouter);

authRouter.post('/signup', authController.register);
authRouter.post('login', authController.login);

userRouter.get('/:username', userController.getByUserName);
// userRouter.get('/', userController.getUsers);
// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
