import { Router } from 'express';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';
import { AdminController } from './admin.controller';

const adminRouter = Router();
const adminController = new AdminController();

adminRouter.use(loginRequired);
adminRouter.use(adminRequired);

adminRouter.patch('/ban', adminController.banUsers);
adminRouter.patch('/cancel', adminController.cancelBanUsers);
adminRouter.get('/inactive', adminController.getInactiveUsers);
adminRouter.get('/active', adminController.getActiveUsers);

adminRouter.get('/', adminController.findAll);

export { adminRouter };
