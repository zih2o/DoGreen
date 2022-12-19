import { Router } from 'express';
import { CategoryController } from './categoryController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';

const categoryController = new CategoryController();
const categoryRouter = Router();

categoryRouter.use(loginRequired, adminRequired);

categoryRouter.get('/:id', categoryController.findOneCategory); // 카테고리 하나조회
categoryRouter.get('/', categoryController.findAllCategory); // 카테고리 전체조회
categoryRouter.post('/create', categoryController.createCategory); // 카테고리 생성
categoryRouter.patch('/:id', categoryController.updateCategory); // 카테고리 수정
categoryRouter.delete('/:id', categoryController.deleteCategory); // 카테고리 삭제

export { categoryRouter };
