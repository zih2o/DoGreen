/* eslint-disable indent */
import { model } from 'mongoose';
import { UserSchema } from './user.schema';

const UserModel = model<User>('users', UserSchema);

export class UserService implements IUserService {
async RegisterUser(newUser: User) {
    await UserModel.create(newUser);
  }

  async findAll() {
    return UserModel.find({});
}

  async findUser() {
    return UserModel.findOne({});
}

async findUserByEmail(email: string) {
    return UserModel.findOne({ email });
}

async updateUser(userInfo: Omit<User, 'role'>) {
    // 로그인한 유저한테서 토큰을 꺼내서 라우터 단에서 userInfo에 이메일을 넣은 다음
    // service에서 password verify하기
    // 틀리면 에러뱉기
   UserModel.updateOne({ userInfo });
}

async deleteUser() {
    await UserModel.deleteOne();
}
};
