import { Router } from 'express';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';
import { AdminController } from './admin.controller';

const adminRouter = Router();
const adminController = new AdminController();

adminRouter.use(loginRequired);
adminRouter.use(adminRequired);

adminRouter.patch('/ban', adminController.banUsers);
adminRouter.get('/inactive', adminController.getBannedOrLeaveUser);
adminRouter.get('/', adminController.findAll);

export { adminRouter };
