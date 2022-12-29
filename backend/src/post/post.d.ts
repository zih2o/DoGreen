type categoryT = {
    id:Types.ObjectId,
    categoryName: string,
    mascotName: string,
    mascotImage: string
}

type PostT = {
    _id: Types.ObjectId, // mongoDB가 자동생성함
    category: categoryT,
    content: string,
    imageList: string[],
    likeUserList: Types.ObjectId[],
    likesNum: number,
    comments?: CommentT[], // comment를 분리?
    createdAt: Date,
    updatedAt: Date,
    authId: Types.ObjectId
}
type updatePostDto = Partial<Pick<PostT, 'content' | 'imageList'> & { category: CategoryT }>;
// createDTO 만들기
type createPostDto = Pick<PostT, 'content' | 'imageList'> & { category: string }

interface IPostRepository {
    createOne: (newPost: createPostDto, id:createPostDto['_id'], authId: string) => Promise<void>
    deleteOne: (targetPost: string, authId: string) => Promise<void>
    updateOne: (id: PostT['_id'], toUpdatePost: updatePostDto, authId: string) => Promise<void>
    findAll: () => Promise<PostT[]>
    findPost: (id: PostT['_id'], authId: string | undefined) => Promise<PostT>
}

interface IPostService {
    createPost: (newPost: createPostDto, authId: string) => Promise<void>
    deletePost: (targetPost: PostT['_id'], authId: string) => Promise<void>
    updatePost: (post: PostT, categoryId: CategoryT['_id'], postId: PostT['_id'], authId: string) => Promise<void>;
    findAllPost: () => Promise<PostT[]>
    findOnePost: (id: PostT['_id'], authId: string | undefined) => Promise<PostT>
}
