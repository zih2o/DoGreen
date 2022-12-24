import { model, Types } from 'mongoose';
import { CategorySchema } from '../category/categorySchema';
import invariant from '../invariant';
import { PostSchema } from './postSchema';
import { UserSchema } from '../user/user.schema';
import { CommentSchema } from '../comment/commentSchema';

const PostModel = model<PostT>('posts', PostSchema);
const CategoryModel = model<categoryT>('categories', CategorySchema);
const UserModel = model('users', UserSchema);
const CommentModel = model('comments', CommentSchema);

export class PostRepository implements IPostRepository {
  async paginationPost(categoryId: categoryT['id'] | string, page: number, perPage: number) {
    // 해당 카테고리에 총 갯수를 구하는 쿼리
    const findPosts = await CategoryModel.findById(categoryId, { posts: 1 });
    const total:any = findPosts?.posts?.length;

    // 총갯수로 posts 갯수 정하기
    const posts: any = await CategoryModel.findById(categoryId).populate('posts').select('posts');

    const result = posts.posts.slice((perPage * (page - 1)), perPage);
    const totalPage = Math.ceil(total / perPage);

    return {
      page, perPage, result, totalPage
    };
  }

  async deletePostCommentId(commentId: string) {
    const findPostId = await CommentModel.findById(commentId);
    await PostModel.findByIdAndUpdate(findPostId?.refPost, { $pull: { comments: commentId } });
  }

  async findAllCommentAtPost(postId: CommentT['refPost']) {
    const commentArray = await PostModel.findById(postId.id)
      .populate({
        path: 'comments',
        populate: {
          path: 'userId',
          select: 'username imgUrl'
        }
      });

    return commentArray?.comments;
  }

  async addcommentList(postId: PostT['id'], commentId: Types.ObjectId) {
    await PostModel.findByIdAndUpdate(postId, { $push: { comments: commentId } });
  }

  async findAll() {
    const totalPost = await PostModel.find({});
    return totalPost;
  }

  async findPost(id: PostT['id']) {
    const postInfo = await PostModel.findById(id);
    return postInfo;
  }

  async createOne(newPost: createPostDto, id: createCategoryDto) {
    const newPostId = await PostModel.create({
      category: id,
      content: newPost.content,
      imageList: newPost.imageList
    });
    await CategoryModel.findByIdAndUpdate(id, { $push: { posts: newPostId.id } });
  }

  async deleteOne(id: PostT['id']) {
    const findPost = await PostModel.findById(id.id);
    await CategoryModel.findByIdAndUpdate(findPost?.category, { $pull: { posts: findPost?.id } });
    await PostModel.deleteOne({ id: findPost?.id });
  }

  async updateOne(id: PostT['id'], toUpdatePost: updatePostDto) {
    const findCategoryId = await CategoryModel.findOne({ id });
    // 카테고리 이름 변경
    await CategoryModel.findByIdAndUpdate(
      findCategoryId?.id,
      { categoryName: toUpdatePost.category }
    );
    // 포스트 정보 변경
    await PostModel.updateMany(
      { _id: id },
      { content: toUpdatePost.content, imageList: toUpdatePost.imageList }
    );
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
