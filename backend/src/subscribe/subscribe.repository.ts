import { model, Types } from 'mongoose';
import { CategoryRepository } from '../category/categoryRepository';
import { CategoryService } from '../category/categorySerivce';
import { BadRequestError } from '../errors/BadRequestError';
import invariant from '../invariant';
import { UserService } from '../user/user.service';
import { SubscribeSchema } from './subscribe.schema';

const SubscribeModel = model<SubscribeT>('subscribes', SubscribeSchema);
const categorySerivce = new CategoryService();

export class SubscribeRepository {
  async findSubscriptionByAuthId(authId: string) {
    const subscribe = await SubscribeModel.findOne({ authId });
    invariant(subscribe !== null, new BadRequestError('구독정보가 없습니다.')); // not found
    const result = await categorySerivce.findCategoryByIds(subscribe.categoryId);
    return result;
  }

  async subscribeCategory(currentAuthId: string, categoryId: string) {
    let subscribe = await SubscribeModel.findOne({ authId: currentAuthId });
    // 1. 기존 subcribtion 구독정보를 가져온다.
    // 2. 기존 subscribe가 없으면 new subscribe model로 새 document를 만든다.
    // 3. document의 카테고리 id 배열에 구독할 카테고리의 id를 추가한다ㅏ
    // 4. 수정된 document를 save한다.
    if (subscribe == null) {
      subscribe = new SubscribeModel({ authId: currentAuthId, categoryId: [] });
    }
    invariant(
      subscribe.categoryId.some(id => id.toString() === categoryId) === false,
      new BadRequestError('이미 구독한 카테고리입니다.')
    );

    subscribe.categoryId.push(categoryId);
    await subscribe.save();
  }

  async unsubscribeCategory(currentAuthId: string, categoryId: string) {
    let subscribe = await SubscribeModel.findOne({ authId: currentAuthId });
    // 1. 기존 subcribtion 구독정보를 가져온다.
    // 2. 기존 subscribe가 없으면 new subscribe model로 새 document를 만든다.
    // 3. document의 카테고리 id 배열에 구독할 카테고리의 id를 추가한다ㅏ
    // 4. 수정된 document를 save한다.
    if (subscribe == null) {
      subscribe = new SubscribeModel({ authId: currentAuthId, categoryId: [] });
    }
    invariant(
      subscribe.categoryId.some(id => id.toString() === categoryId) === true,
      new BadRequestError('구독하지 않은 카테고리입니다.')
    );

    subscribe.categoryId = subscribe.categoryId.filter(id => id.toString() !== categoryId);
    await subscribe.save();
  }
};
