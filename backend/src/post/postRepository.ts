import { model, Types } from 'mongoose';
import { CategorySchema } from '../category/categorySchema';
import { PostSchema } from './postSchema';

const PostModel = model<PostT>('posts', PostSchema);
const CategoryModel = model<categoryT>('categories', CategorySchema);

export class PostRepository implements IPostRepository {
  async findAll() {
    const totalPost = await PostModel.find({});
    return totalPost;
  }

  async findPost(id: PostT['id']) {
    const postInfo = await PostModel.findById(id);
    return postInfo;
  }

  async createOne(newPost: createPostDto, id: createCategoryDto) {
    const newPostId = await PostModel.create({ category: id, content: newPost.content });
    await CategoryModel.updateOne({ id }, { $push: { posts: newPostId } });
  }

  async deleteOne(id:PostT['id']) {
    await PostModel.findByIdAndDelete(id.id);
    await CategoryModel.updateOne({ $pull: { posts: id.id } });
  }

  async updateOne(id: PostT['id'], toUpdatePost :updatePostDto) {
    await PostModel.updateOne({ _id: id }, toUpdatePost);
  }
}

// createPost -> admin권한 필요, 카드를 참조해 그 카드에 해당하는 포스팅들을 보여줘야함. 근데 이게 피드식이라 과연 1개만 조회하는게 필요 할까?
// findOnePost -> 하나의 포스트 조회, 한가지 포스트에 대한 정보만 보여줘야하는데 그걸 ID로 찾아내기?
// findAllPost -> 카테고리 목록에서 뿌려질 포스트 목록, 페이지네이션 구현해야할듯?
// updatePost -> 한개의 포스트 수정
// deletePost -> 한개의 포스트 삭제, 전체삭제도 구현? 또 참조이기때문에 포스트가 해당되는 카드가 삭제되면, 해당 카드의 있는 포스트들은 어떻게 처리할 것인가?

// 카드클릭시 포스트가 보여지는데,,,
// 구독해야 게시글이 보여야하니까 그걸 구분하는걸 또 생각해야겠지?
// 구독했을 때 그 피드가 보이게
// user에 구독한카드(sub)배열이 추가가 되고
// findOne 할때 user에게 그 그그그그 카드 인덱스번호가 있는지 체크한 후 보여주기

// 구독 스키마 생성
// 유저 구독정보 저장
//
// 카테고리 > 카드 > 포스트
