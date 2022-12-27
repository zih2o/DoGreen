import { model, Types } from 'mongoose';
import { CategorySchema } from '../category/categorySchema';
import invariant from '../invariant';
import { PostSchema } from './postSchema';
import { CommentSchema } from '../comment/commentSchema';
import ApplicationError from '../errors/ApplicationError';
import { UserSchema } from '../user/user.schema';

const PostModel = model<PostT>('posts', PostSchema);
const CategoryModel = model<categoryT>('categories', CategorySchema);
const CommentModel = model('comments', CommentSchema);
const UserModel = model<UserT>('users', UserSchema);

export class PostRepository implements IPostRepository {
  async subtractLike(currentAuthId: string, postId: string) {
    await PostModel.findByIdAndUpdate(
      postId,
      { $pull: { likeUserList: currentAuthId }, $inc: { likesNum: -1 } }
    );
  }

  async addLike(currentAuthId: string, postId: string) {
    await PostModel.findByIdAndUpdate(
      postId,
      { $push: { likeUserList: currentAuthId }, $inc: { likesNum: 1 } }
    );
  }

  async isLikedByPostId(currentAuthId: string, postId: string): Promise<boolean> {
    const isLiked = await PostModel.exists({ _id: postId, likeUserList: currentAuthId });
    return isLiked !== null;
  }

  async paginationPost(categoryId: string | string, page: number, perPage: number, authId: string) {
    // 해당 카테고리에 총 갯수를 구하는 쿼리
    const category = await CategoryModel.findById(categoryId, undefined, {
      populate: {
        path: 'posts',
        options: {
          skip: (page - 1) * perPage,
          limit: perPage
        }
      }
    });

    invariant(category !== null, new ApplicationError('해당하는 카테고리가 존재하지 않습니다.', 404));

    const total = await PostModel.count({ category: categoryId });
    const totalPage = Math.ceil(total / perPage);

    const result = category.posts.map(post => {
      const likeUserList = post.likeUserList.map(v => String(v));
      return {
        _id: post._id,
        imageList: post.imageList,
        content: post.content,
        likeUserList,
        likesNum: post.likesNum,
        isLiked: likeUserList.includes(authId),
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      };
    });
    // [
    //   {
    //     _id: '63a2eb68fc6fdb4c3748d98b',
    //     imageList: [],
    //     content: '날씨가 매우 추워 도로가 얼어붙었습니다.',
    //     likeUserList: [],
    //     likesNum: 0,
    //     isLiked: true,
    //     createdAt: '2022-12-21T11:18:00.379Z',
    //     updatedAt: '2022-12-25T12:27:16.275Z'
    //   }
    // ];

    // "category": "대충카테고리이름", // => GET /category/:categoryId
    // "categoryImageUrl": "awss3저쩌고 이미지url",
    // "comments": [], => // => GET /comment/:postId
    return {
      page, perPage, result, totalPage
    };
  }

  //   type PostT = {
  //     _id: Types.ObjectId, // mongoDB가 자동생성함
  //     category: categoryT,
  //     content: string,
  //     imageList: string[],
  //     likeUserList?: Types.ObjectId,
  //     likesNum: number,
  //     comments?: CommentT[], // comment를 분리?
  //     createdAt: Date
  //     updatedAt: Date
  // }
  async deletePostCommentId(commentId: string) {
    const comment = await CommentModel.findById(commentId);
    invariant(comment !== null, new ApplicationError('해당하는 코멘트가 존재하지 않습니다.', 404));
    await PostModel.findByIdAndUpdate(comment.refPost, { $pull: { comments: commentId } });
  }

  // interface IComment {
  //   _id: string;
  //   refPost: string;
  //   userId: {
  //     _id: string;
  //     username: string;
  //     imgUrl: string;
  //   };
  //   comment: string;
  //   createdAt: string;
  //   updatedAt: string;
  // }

  async findAllCommentAtPost(postId: string) {
    const post = await PostModel.findById(postId)
      .populate({
        path: 'comments'
      });

    invariant(post !== null, new ApplicationError('해당하는 포스트가 존재하지 않습니다.', 404));
    invariant(post.comments !== undefined, new ApplicationError('해당하는 댓글이 존재하지 않습니다.', 404));

    const authIdList = post.comments.map(comment => comment.authId);

    const userList = await UserModel.find({ auth: authIdList }, undefined, {
      select: 'auth username imgUrl'
    });

    const userMap = new Map<string, Pick<UserT, 'username' | 'imgUrl'> & { _id: string }>();
    userList.forEach(user => {
      const authId = String(user.auth);
      userMap.set(authId, {
        _id: String(user._id),
        username: user.username,
        imgUrl: user.imgUrl
      });
    });
    return post.comments.map((comment, i) => ({
      _id: comment._id,
      refPost: comment.refPost,
      userId: userMap.get(String(authIdList[i])),
      comment: comment.comment,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt
    }));
  }

  async addcommentList(postId: string, commentId: string) {
    await PostModel.findByIdAndUpdate(postId, { $push: { comments: commentId } });
  }

  async findAll() {
    const totalPost = await PostModel.find({});
    return totalPost;
  }

  async findPost(postId: string) {
    const post = await PostModel.findById(postId);
    invariant(post !== null, new ApplicationError('해당하는 Post가 존재하지 않습니다.', 404));
    return post;
  }

  async createOne(newPost: createPostDto, categoryId: createCategoryDto) {
    const newPostId = await PostModel.create({
      category: categoryId,
      content: newPost.content,
      imageList: newPost.imageList
    });
    await CategoryModel.findByIdAndUpdate(categoryId, { $push: { posts: newPostId.id } });
  }

  async deleteOne(postId: string) {
    const post = await PostModel.findById(postId);
    invariant(post !== null, new ApplicationError('해당하는 Post가 존재하지 않습니다.', 404));
    await CategoryModel.findByIdAndUpdate(post.category, { $pull: { posts: postId } });
    await PostModel.deleteOne({ id: postId });
  }

  async updateOne(postId: string, toUpdatePost: updatePostDto) {
    const category = await CategoryModel.exists({ categoryName: toUpdatePost.category });
    invariant(category !== null, new ApplicationError('해당하는 카테고리가 존재하지 않습니다.', 404));
    // 포스트 정보 변경
    await PostModel.updateMany(
      { _id: postId },
      {
        category: category._id,
        content: toUpdatePost.content,
        imageList: toUpdatePost.imageList
      }
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
