import { model, Types } from 'mongoose';
import ApplicationError from '../errors/ApplicationError';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { CategorySchema } from './categorySchema';

const CategoryModel = model<categoryT>('categories', CategorySchema);

export class CategoryRepository implements ICategoryRepository {
  async findCategory(categoryName: string) {
    // id필드값만 반환하게 하면 좀 더 메모리가 덜 들 것 같은데 추후에..
    const category = await CategoryModel.exists({ categoryName });
    invariant(category !== null, new ApplicationError('id에 해당하는 카테고리가 존재하지 않습니다.', 404));
    return category._id;
  }

  async updateOneCategory(toUpdate:updateCategoryDto, id: string) {
    const category = await CategoryModel.exists({ _id: id });
    invariant(category !== null, new ApplicationError('id에 해당하는 카테고리가 존재하지 않습니다.', 404));
    await CategoryModel.updateOne({ _id: id }, toUpdate);
  }

  async deleteOneCategory(categoryId: string) {
    const category = await CategoryModel.exists({ _id: categoryId });
    invariant(category !== null, new ApplicationError('id에 해당하는 카테고리가 존재하지 않습니다.', 404));
    await CategoryModel.deleteOne({ _id: categoryId });
  }

  async findCategoryByIds(ids: string[]) {
    return CategoryModel.find({ _id: ids });
  }

  async findAllCategory() {
    const allCategory = await CategoryModel.find({});
    return allCategory;
  }

  async findOneCategory(id: string) {
    const oneCategory = await CategoryModel.findById(id);
    return oneCategory;
  }

  async createOneCategory(newCategory: createCategoryDto) {
    await CategoryModel.create(newCategory);
  }
}
