import { model, Types } from 'mongoose';
import { UserSchema } from './user.schema';

const UserModel = model<UserT>('users', UserSchema);

// ㅇㅇ findAll: ()=> Promise<UserDto[]>; // admin
// findUser: (authId: string)=> Promise<UserDto | null>; // user가 자신의 정보를 조회함
// // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
// updateUser: (userInfo: Omit<UserT, 'role'>) => Promise<void>; // user가 자신의 정보를 수정하는 기능
// deleteUser: (email: UserT['email'])=> Promise<void>; // 유저가 스스로 탈퇴할 수 있는 기능
// ㅇㅇ createUser: (userInfo: CreateUserDto) => Promise<void>; // register
// findUserByEmail: (userEmail: UserT['email']) => Promise<UserDto>;
// ㅇㅇ existUserByEmail: (userEmail: UserT['email'])=> Promise<boolean>;

export class UserService implements IUserService {
  async findAll() {
    // controller에서 admin-required 미들웨어 추가하기
    const users = await UserModel.find({});
    // populate
    // https://mongoosejs.com/docs/populate.html#field-selection
    await UserModel.populate(users, {
      path: 'auth',
      select: 'role'
    });
    // O(N)
    return users.map(user => ({
      role: user.auth.role,
      email: user.email,
      username: user.username
    }));
  }

  async findUser(authId: string) {
    // 유저가 자신의 정보를 조회함
    // 컨트롤러 레이어에서 자기 비번이 맞는지 확인함


  }

  // util 함수
  async existUserByEmail(email: AuthT['email']) {
    // https://mongoosejs.com/docs/5.x/docs/api/model.html#model_Model.exists => 버전 5에서는 true | false
    // https://mongoosejs.com/docs/api/model.html#model_Model-exists => 버전 6에서는 { _id } | null
    const isUser = await UserModel.exists({ email });
    return Boolean(isUser);
  }

  async updateUser(userInfo: Omit<UserT, 'role'>) {
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
