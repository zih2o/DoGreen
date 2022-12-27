import { model, ObjectId, Types } from 'mongoose';
import { ParamsDictionary } from 'express-serve-static-core';
import { PostSchema } from './postSchema';
import { PostRepository } from './postRepository';
import { CategoryRepository } from '../category/categoryRepository';
import ApplicationError from '../errors/ApplicationError';
import invariant from '../invariant';

const postRepository = new PostRepository();
const cateogryRepository = new CategoryRepository();

export class PostService implements IPostService {
  // eslint-disable-next-line consistent-return
  async addlikeUserId(currentAuthId: string, postId: string): Promise<boolean | undefined> {
    // 이미 좋아요 했는지 검증
    const isLiked = await postRepository.isLikedByPostId(currentAuthId, postId);

    // 좋아요를 누르지 않았다면 ->좋아요 증가
    if (isLiked === null) {
      await postRepository.addLike(currentAuthId, postId);
      return false;

    // 좋아요를 눌렀다면 -> 좋아요 감소
    } if (isLiked !== null) {
      await postRepository.subtractLike(currentAuthId, postId);
      return true;
    }
  }

  async paginationPost(categoryId: string | string, page: number, perPage: number, authId: string) {
    const pagingPosts = await postRepository.paginationPost(categoryId, page, perPage, authId);
    return pagingPosts;
  }

  async createPost(createPostInfo: createPostDto) {
    // 카테고리 존재 검증
    const categoryId = await cateogryRepository.findCategory(createPostInfo.category);
    invariant(categoryId !== null, new ApplicationError(`${createPostInfo.category} 카테고리가 존재하지 않습니다.`, 404));

    await postRepository.createOne(createPostInfo, categoryId._id);
  }

  async deletePost(postId: string) {
    await postRepository.deleteOne(postId);
  }

  async updatePost(updatedContents: updatePostDto, postId: string) {
    const { category, content, imageList } = updatedContents;

    const toUpdatePost = {
      ...(category && { category }),
      ...(content && { content }),
      ...(imageList && { imageList })
    };
    await postRepository.updateOne(postId, toUpdatePost);
  }

  async findAllPost() {
    const totalPostInfo = await postRepository.findAll();
    return totalPostInfo;
  }

  async findOnePost(id: string) {
    const postInfo = await postRepository.findPost(id);
    return postInfo;
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
