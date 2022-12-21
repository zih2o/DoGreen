import { model, Types } from 'mongoose';
import { CategorySchema } from './categorySchema';

const CategoryModel = model<categoryT>('categories', CategorySchema);

export class CategoryRepository implements ICategoryRepository {
  async findCategory(category: categoryT) {
    // id필드값만 반환하게 하면 좀 더 메모리가 덜 들 것 같은데 추후에..
    const categoryId = await CategoryModel.findOne().where('categoryName').equals(category);
    return categoryId;
  }

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
