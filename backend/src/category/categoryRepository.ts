import { model, Types } from 'mongoose';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { CategorySchema } from './categorySchema';

const CategoryModel = model<categoryT>('categories', CategorySchema);

export class CategoryRepository implements ICategoryRepository {
  async updateOneCategory(toUpdate:updateCategoryDto, id:updateCategoryDto['id']) {
    await CategoryModel.updateOne({ _id: id }, toUpdate);
  }

  async deleteOneCategory(id: categoryT['id']) {
    await CategoryModel.deleteOne(id);
  }

  async findCategoryByIds(ids: categoryT['id'][]) {
    invariant(ids !== null, new BadRequestError('id에 해당하는 카테고리가 존재하지 않습니다.'));
    return CategoryModel.find({ _id: ids });
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
