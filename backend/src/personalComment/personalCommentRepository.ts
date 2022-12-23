import { model } from 'mongoose';
import { PersonalCommentSchema } from './personalCommentSchema';

const PersonalCommentModel = model('perosnalComments', PersonalCommentSchema);

export class PersonalCommentRepository {
  async pushList(authId: perosnalCommentT['authId'], commentId: perosnalCommentT['commentId']) {
    await PersonalCommentModel.updateOne({ id: authId }, { $push: { commentId } });
  }

  async isExist(id: perosnalCommentT['authId']) {
    const result = await PersonalCommentModel.exists({ authId: id });
    return result;
  }

  async createList(UserId:perosnalCommentT['authId'], commentId:perosnalCommentT['commentId']) {
    await PersonalCommentModel.create({
      authId: UserId,
      commentId
    });
  }
}
