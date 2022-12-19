import { Request, Response, NextFunction } from 'express';
import { CategoryService } from './categorySerivce';

const categoryService = new CategoryService();

export class CategoryController {
  async updateCategory(req:Request, res:Response, next:NextFunction) {
    await categoryService.updateCategory(req.body, req.params.id);
    res.json(201).end();
  }

  async createCategory(req: Request, res: Response, next: NextFunction) {
    const newCategory = req.body;
    await categoryService.createCategory(newCategory);
    res.status(201).end();
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    const id = req.params;
    await categoryService.deleteOneCategory(id);
    res.status(201).end();
  }

  async findOneCategory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const oneCategory = await categoryService.findOneCategory(id);
    res.status(200).json(oneCategory);
  }

  async findAllCategory(req: Request, res: Response, next: NextFunction) {
    const allCategory = await categoryService.findAllCategory();
    res.status(200).json(allCategory);
  }
};
