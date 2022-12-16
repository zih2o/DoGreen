import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json' assert { type: 'json' };
import { AuthController } from './auth/auth-controller';
import { UserController } from './user/user-controller';
import { AdminController } from './user/admin-controller';
import { adminRequired } from './middleware/admin-required';
import { loginRequired } from './middleware/login-required';

// TODO 너무 더러움.. 각 controller마다 분리할지 생각해보기.. 그런데 OpenAPI추가하면 과연 괜찮을지 염두해두기
const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};
// main router
const router = Router();
// controller 의존성 주입
const authController = new AuthController();
const userController = new UserController();
const adminController = new AdminController();

const authRouter = Router();
const userRouter = Router();
const adminRouter = Router();

// 유저가 로그인 -> 토큰 발급
router.use('/auth', authRouter);
router.use('/user', loginRequired, userRouter);
router.use('/admin', adminRequired, adminRouter);

authRouter.post('/register', authController.register);
authRouter.post('login', authController.login);

authRouter.get('/', adminController.findAll);
// TODO: method와 path
authRouter.patch('/', adminController.banUsers);
authRouter.get('/', adminController.getBannedOrLeaveUser);

userRouter.get('/:username', userController.findUserByUserName);
userRouter.patch('/', userController.updateUserInfo); // 탈퇴랑 수정 둘다 가능

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
