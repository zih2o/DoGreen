import { model, Types } from 'mongoose';
import { AuthService } from '../auth/auth-service';
import invariant from '../invariant';
import { UserSchema } from './user-schema';

const UserModel = model<UserT>('users', UserSchema);

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

  // 유저가 자신의 정보를 조회하는 기능
  async findUser(authId: string) {
    // 컨트롤러 레이어에서 자기 비번이 맞는지 확인함
    // login-required도 컨트롤러에다가 걸어줌
    const userInfo = await UserModel.findOne({ auth: authId });
    invariant(userInfo !== null, '유저정보가 존재하지 않습니다.'); // 타입스크립트가 null 뱉을 수 있다고 해서 추가해준 타입가드
    await UserModel.populate(userInfo, {
      path: 'auth',
      select: 'role'
    });
    return { ...userInfo, role: userInfo.auth.role };
  }

  // TODO 로직이 계속 반복되서 추상화할만한지 생각해보기 하지만 프로퍼티가 달라서 감당안되니까 뒤로 미루기
  async findUserByUsername(username: UserT['username']) {
    // controller에서 username을 꺼낸 상태라고 가정함.
    const userInfo = await UserModel.findOne({ username });
    invariant(userInfo !== null, '유저정보가 존재하지 않습니다.');
    return { ...userInfo, role: userInfo.auth.role };
  };

  // util 함수
  async existUserByEmail(email: AuthT['email']) {
    // https://mongoosejs.com/docs/5.x/docs/api/model.html#model_Model.exists => 버전 5에서는 true | false
    // https://mongoosejs.com/docs/api/model.html#model_Model-exists => 버전 6에서는 { _id } | null
    const isUser = await UserModel.exists({ email });
    return Boolean(isUser);
  }

  // update, softdeletebyuser 가능
  async updateUser(userInfo: Omit<UserT, 'role'>) {
    // controller단에서 유저의 기존 비밀번호를 확인했다고 가정하기
    // await authService.isPasswordCorrect(userInfo.auth)
    //   .catch(e => console.error(`${e} occured: password incorrect`));
    // await authService.updatePassword(userInfo.auth);

    await UserModel.updateOne({ userInfo });
  }

  async banUsers(userInfos: Pick<UserT, 'username'>[]) {
    // JWT token이 ADMIN인 것을 확인하는 middleware admin-required를 controller에 추가하기
    await UserModel.updateMany({ userInfos });
  }

  async getBannedOrLeaveUser(): Promise<UserDto[] | null> {
    return UserModel.find({ isDeleted: true });
  };

  async createUser(userInfo: CreateUserDto) {
    await UserModel.create({
      auth: { email: userInfo.email },
      username: userInfo.username,
      bio: userInfo.bio,
      imgUrl: userInfo.imgUrl
    });
  }
}
