import { model, Types } from 'mongoose';
import { CategorySchema } from './categorySchema';

const CategoryModel = model<categoryT>('cateogories', CategorySchema);

export class CategoryRepository implements ICategoryRepository {
  async updateOneCategory(toUpdate:updateCategoryDto, id:updateCategoryDto['id']) {
    await CategoryModel.updateOne({ _id: id }, toUpdate);
  }

  async deleteOneCategory(id: categoryT['id']) {
    await CategoryModel.deleteOne(id);
  }

  async findAllCategory() {
    const allCategory = await CategoryModel.find({});
    return allCategory;
  }

  async findOneCategory(id: categoryT['id']) {
    const oneCategory = await CategoryModel.findById(id);
    return oneCategory;
  }

  async createOneCategory(newCategory: createCategoryDto) {
    await CategoryModel.create(newCategory);
  }
}

// createOneCategory: (newCategory: any) => Promise<void>;
//     deleteOneCategory: (targetCategory: string) => Promise<void>;
//     updateOneCategory: (deleteCategory: any) => Promise<void>;
//     findOneCategory: (id: Types.ObjectId) => Promise<categoryT | null>;
//     findAllCategory: () => Promise<categoryT[]>;
