type LikeT = {
    likedUserList: UserT['username'][],
    likesNum: Number
}

type CommentT = {
    username: UserT['username'],
    content: string
}

type CardT = {
    name: string
}
// 스키마타입
// 동결건조
// type PostT = {
//     id: Types.ObjectId,
//     card: Types.ObjectId,
//     author: Types.ObjectId,
//     username: UserT['username'],
//     title: string,
//     content: string,
//     likes: LikeT,
//     comments: Types.ObjectId[], // comment를 분리?
//     timestamps: Date
// }
type PostT = {
    id: Types.ObjectId, // mongoDB가 자동생성함
    card: CardT,
    author: UserT['username'],
    title: string,
    content: string,
    likes: LikeT,
    comments?: CommentT, // comment를 분리?
    timestamps: Date
}
type updatePostDto = Pick<PostT, 'id', 'card', 'title', 'contents' >; // user이름 바뀌면 안됌? | 카드와 컨첸츠와 타이틀만바뀜
// createDTO 만들기
type createPostDto = Pick<PostT, 'title' | 'content'>

interface IPostRepository {
    createOne: (newPost: createPostDto) => Promise<void>
    deleteOne: (targetPost: string) => Promise<void>
    updateOne: (updatePost: updatePostDto) => Promise<void>
    findAll: () => Promise<PostT[]>
    findPost: (id: PostT['id']) => Promise<PostT | null>
}

interface IPostService {
    createPost: (newPost: createPostDto) => Promise<void>
    deletePost: (targetPost: PostT['id']) => Promise<void>
    updatePost: (post: PostT['id' & 'content']) => Promise<void>
    findAllPost: () => Promise<PostT[]>
    findOnePost: (id: PostT['id']) => Promise<PostT | null>
}

// 동결건조
// interface IPostService {
//     createPost: (newPost: createPostDto) => Promise<void>
//     deletePost: (targetPost: PostT['id']) => Promise<void>
//     updatePost: (post: PostT['id' & 'content']) => Promise<void>
//     findAllPost: () => Promise<PostT[]>
//     findOnePost: (id: PostT['id']) => Promise<PostT | null>
// }
