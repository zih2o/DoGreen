type categoryT = {
    id:Types.ObjectId,
    categoryName: string,
    mascotName: string,
    mascotImage: string,
    posts? : Types.ObjectId[]
}

type createCategoryDto = Pick<categoryT, 'categoryName', 'mascotName', 'mascotImage'>
type deleteCategoryDto = categoryT['categoryName'];
type updateCategoryDto = Pick<categoryT, 'id', 'categoryName', 'mascotName', 'mascotImage'>

interface ICategoryRepository {
    createOneCategory: (newCategory : createCategoryDto)=>Promise<void>
    deleteOneCategory: (targetCategory: deleteCategoryDto) => Promise<void>
    updateOneCategory: (deleteCategory: updateCategoryDto, id:updateCategoryDto['id']) => Promise<void>
    findOneCategory: (id: categoryT['id']) => Promise<categoryT | null>
    findAllCategory: () => Promise<categoryT[]>
}

//
