import { CategoryRepository } from './categoryRepository';
import { CategorySchema } from './categorySchema';

const categoryRepository = new CategoryRepository();

export class CategoryService {
  async updateCategory(data: updateCategoryDto, id:updateCategoryDto['id']) {
    const { categoryName, mascotName, mascotImage } = data;

    // 비교
    const toUpdate = {
      ...(categoryName && { categoryName }),
      ...(mascotName && { mascotName }),
      ...(mascotImage && { mascotImage })
    };
    await categoryRepository.updateOneCategory(toUpdate, id);
  }

  async deleteOneCategory(id:categoryT['id']) {
    await categoryRepository.deleteOneCategory(id);
  }

  async findAllCategory() {
    const allCategory = await categoryRepository.findAllCategory();
    return allCategory;
  }

  async findOneCategory(id: categoryT['id']) {
    const oneCategory = await categoryRepository.findOneCategory(id);
    return oneCategory;
  }

  async createCategory(newCategory: createCategoryDto) {
    await categoryRepository.createOneCategory(newCategory);
  }
}
