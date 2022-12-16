import { Router } from 'express';
import { AdminController } from './admin.controller';

const router = Router();
const adminRouter = Router();
const adminController = new AdminController();

router.use('/admin', adminRouter);

adminRouter.patch('/ban', adminController.banUsers);
adminRouter.get('/inactive', adminController.getBannedOrLeaveUser);
adminRouter.get('/', adminController.findAll);
