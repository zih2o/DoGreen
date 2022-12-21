import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { authRouter } from './auth/auth.router';
import { adminRouter } from './user/admin.router';
import { userRouter } from './user/user.router';

import apiSpec from '../openapi.json' assert { type: 'json' };

const router = Router();

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec));
}

export default router;
