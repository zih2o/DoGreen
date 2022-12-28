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
    createdAt: Date
    updatedAt: Date
}
type updatePostDto = Partial<Pick<PostT, 'content' | 'imageList'> & { category: string }>; // user이름 바뀌면 안됌? | 카드와 컨첸츠와 타이틀만바뀜
// createDTO 만들기
type createPostDto = Pick<PostT, 'content' | 'imageList'> & { category: string }

interface IPostRepository {
    createOne: (newPost: createPostDto, id:createPostDto['_id']) => Promise<void>
    deleteOne: (targetPost: string) => Promise<void>
    updateOne: (id: PostT['_id'], toUpdatePost: updatePostDto) => Promise<void>
    findAll: () => Promise<PostT[]>
    findPost: (id: PostT['_id']) => Promise<PostT | null>
}

interface IPostService {
    createPost: (newPost: createPostDto) => Promise<void>
    deletePost: (targetPost: PostT['_id']) => Promise<void>
    updatePost: (post: PostT['category' & 'content'], id:PostT['_id']) => Promise<void>
    findAllPost: () => Promise<PostT[]>
    findOnePost: (id: PostT['_id']) => Promise<PostT | null>
}
