import { exist } from 'joi';
import { model } from 'mongoose';
import { UserSchema } from './user.schema';

const UserModel = model<UserT>('users', UserSchema);

export class UserService implements IUserService {
  async getUserToken(user: AuthT) {
    // 이메일이 존재하는지 확인하기
    const existUser = await this.existUserByEmail(user.email);
    await UserModel.create(existUser);
  }

  async findAll() {
    return UserModel.find({});
  }

  async findUser() {
    const _id = '';
    return UserModel.findOne({ auth: { _id } });
  }

  async existUserByEmail(email: AuthT['email']) {
    // https://mongoosejs.com/docs/5.x/docs/api/model.html#model_Model.exists => 버전 5에서는 true | false
    // https://mongoosejs.com/docs/api/model.html#model_Model-exists => 버전 6에서는 { _id } | null
    const isUser = await UserModel.exists({ email });
    return Boolean(isUser);
  }

  async updateUser(userInfo: Omit<UserT, 'role'>) {
    // 로그인한 유저한테서 토큰을 꺼내서 라우터 단에서 userInfo에 이메일을 넣은 다음
    // service에서 password verify하기
    // 틀리면 에러뱉기
    UserModel.updateOne({ userInfo });
  }

  async deleteUser(email: AuthT['email']) {
    await UserModel.deleteOne({ email });
  }

  async createUser(userInfo: CreateUserDto) {
    await UserModel.create({
      auth: { email: userInfo.email },
      username: userInfo.username
    });
  }
}
