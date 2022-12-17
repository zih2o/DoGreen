import { model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import invariant from '../invariant';
import { UserSchema } from './user.schema';

const UserModel = model<UserT>('users', UserSchema);

const userToUserDto = (user: UserT): UserDto => ({
  role: user.auth.role,
  email: user.email,
  username: user.username,
  bio: user.bio,
  imgUrl: user.imgUrl
});

const authService = new AuthService();

export class UserService implements IUserService {
  async findAll() {
    // populate
    // https://mongoosejs.com/docs/populate.html#field-selection
    const users = await UserModel.find({ role: 'USER' }, undefined, {
      populate: {
        path: 'auth',
        select: 'role'
      }
    });
    // O(N)
    return users.map(userToUserDto);
  }

  // 유저가 자신의 정보를 조회하는 기능
  async findUser(authId: string) {
    const user = await UserModel.findOne({ auth: authId }, undefined, {
      poplate: {
        path: 'auth',
        select: 'role'
      }
    });
    invariant(user !== null, '유저정보가 존재하지 않습니다.'); // 타입스크립트가 null 뱉을 수 있다고 해서 추가해준 타입가드
    return userToUserDto(user);
  }

  // TODO 로직이 계속 반복되서 추상화할만한지 생각해보기 하지만 프로퍼티가 달라서 감당안되니까 뒤로 미루기
  async findUserByEmail(email: UserT['email']) {
    const user = await UserModel.findOne({ email }, undefined, {
      populate: {
        path: 'auth',
        select: 'role'
      }
    });

    invariant(user !== null, '유저정보가 존재하지 않습니다.');
    return userToUserDto(user);
  };

  // util 함수
  async existUserByEmail(email: AuthT['email']) {
    // https://mongoosejs.com/docs/5.x/docs/api/model.html#model_Model.exists => 버전 5에서는 true | false
    // https://mongoosejs.com/docs/api/model.html#model_Model-exists => 버전 6에서는 { _id } | null
    const isUser = await UserModel.exists({ email });
    return Boolean(isUser);
  }

  // update, softdeletebyuser 가능
  async updateUser(email: UserT['email'], userInfo: Partial<Omit<UserT, 'email' | 'auth' | 'isDeleted'>>) {
    await UserModel.updateOne(
      { email }, // filter
      {
        bio: userInfo.bio,
        username: userInfo.username,
        imgUrl: userInfo.imgUrl
      } // update
    );
  }

  async withdraw(email: UserT['email']) {
    await UserModel.updateOne(
      { email }, // filter
      { isDeleted: true } // update
    );
  }

  async banUsers(usernames: UserT['username'][]) {
    await UserModel.updateMany({ role: 'USER', username: usernames }, { isDeleted: true });
  }

  async cancelBanUsers(usernames: UserT['username'][]) {
    await UserModel.updateMany({ role: 'USER', username: usernames }, { isDeleted: false });
  }

  async getInactiveUsers(): Promise<UserDto[]> {
    const inactiveUsers = await UserModel.find({ role: 'USER', isDeleted: true }, undefined, {
      populate: {
        path: 'auth',
        select: 'role'
      }
    });
    // O(N)
    return inactiveUsers.map(userToUserDto);
  };

  async getActiveUsers(): Promise<UserDto[]> {
    const inactiveUsers = await UserModel.find({ role: 'USER', isDeleted: false }, undefined, {
      populate: {
        path: 'auth',
        select: 'role'
      }
    });
    // O(N)
    return inactiveUsers.map(userToUserDto);
  };

  async register(userInfo: CreateUserDto) {
    const auth = await authService.createAuth({
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role ?? 'USER'
    });
    await UserModel.create({
      auth,
      email: userInfo.email,
      username: userInfo.username,
      bio: userInfo.bio,
      imgUrl: userInfo.imgUrl
    });
  }
}
