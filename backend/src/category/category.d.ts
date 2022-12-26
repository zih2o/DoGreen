type categoryT = {
    _id:Types.ObjectId,
    categoryName: string,
    mascotName: string,
    mascotImage: string,
    posts : PostT[]
}

type createCategoryDto = Pick<categoryT, 'categoryName' | 'mascotName' | 'mascotImage'>
type deleteCategoryDto = categoryT['categoryName'];
type updateCategoryDto = Partial<Pick<categoryT, 'categoryName' | 'mascotName' | 'mascotImage'>>

interface ICategoryRepository {
    createOneCategory: (newCategory : createCategoryDto)=>Promise<void>
    deleteOneCategory: (targetCategory: deleteCategoryDto) => Promise<void>
    updateOneCategory: (deleteCategory: updateCategoryDto, id: string) => Promise<void>
    findOneCategory: (id: string) => Promise<categoryT | null>
    findAllCategory: () => Promise<categoryT[]>
    findCategoryByIds: (ids: string[])=> Promise<categoryT[]>
}

//
