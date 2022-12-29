import { PostRepository } from './postRepository';
import { CategoryRepository } from '../category/categoryRepository';
import invariant from '../invariant';
import { NotFoundError } from '../errors/NotFoundError';

const postRepository = new PostRepository();
const cateogryRepository = new CategoryRepository();

export class PostService implements IPostService {
  async addlikeUserId(currentAuthId: string, postId: string): Promise<boolean> {
    // 이미 좋아요 했는지 검증
    const isLiked = await postRepository.isLikedByPostId(currentAuthId, postId);

    // 좋아요를 누르지 않았다면 ->좋아요 증가
    if (isLiked) {
      await postRepository.addLike(currentAuthId, postId);
      return true;
    }
    // 좋아요를 눌렀다면 -> 좋아요 감소
    await postRepository.subtractLike(currentAuthId, postId);
    return false;
  }

  async paginationPost(categoryId: string, page: number, perPage: number, authId?: string) {
    const pagingPosts = await postRepository.paginationPost(categoryId, page, perPage, authId);
    return pagingPosts;
  }

  async createPost(createPostInfo: createPostDto) {
    // 카테고리 존재 검증
    const categoryId = await cateogryRepository.findCategory(createPostInfo.category);
    invariant(categoryId !== null, new NotFoundError(`${createPostInfo.category} 카테고리가 존재하지 않습니다.`));

    await postRepository.createOne(createPostInfo, categoryId._id);
  }

  async deletePost(postId: string, currentAuthId: string) {
    await this.isWrittenByCurrentUser(postId, currentAuthId);
    await postRepository.deleteOne(postId, currentAuthId);
  }

  async isWrittenByCurrentUser(postId: string, currentAuthId: string) {
    await postRepository.isWrittenByCurrentUser(postId, currentAuthId);
  }

  async updatePost(updatedContents: updatePostDto, postId: string, currentAuthId: string) {
    const { category, content, imageList } = updatedContents;
    await this.isWrittenByCurrentUser(postId, currentAuthId);

    const toUpdatePost = {
      ...(category && { category }),
      ...(content && { content }),
      ...(imageList && { imageList })
    };
    await postRepository.updateOne(postId, toUpdatePost, currentAuthId);
  }

  // ADMIN
  async findAllPost() {
    const totalPostInfo = await postRepository.findAll();
    return totalPostInfo;
  }

  async findOnePost(id: string) {
    const postInfo = await postRepository.findPost(id);
    return postInfo;
  }
}
