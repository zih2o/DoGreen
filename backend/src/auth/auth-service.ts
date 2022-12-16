import { model } from 'mongoose';
import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { AuthSchema } from './auth-schema';
import invariant from '../invariant';

const AuthModel = model<AuthT>('auths', AuthSchema);

export class AuthService implements IAuthService {
  async register(newAuth: AuthT) {
    const hash = argon2.hash(newAuth.password);

    await AuthModel.create({
      email: newAuth.email,
      password: hash
    });
  }

  async existUserByEmail(email: AuthT['email']) {
    const result = await AuthModel.exists({ email });
    return result !== null;
  }

  async generateUserToken(authDTO: Pick<AuthT, 'email' | 'password'>) {
    // email로 auth 정보 찾아온다
    const auth = await AuthModel.findOne({ email: authDTO.email });
    invariant(auth !== null, `${authDTO.email}은 가입 내역이 없습니다.`); // 타입 가드

    // auth의 password와 db의 password를 argon2로 verify한다
    const isVerified = await argon2.verify(
      auth.password, // DB에 해시된 Password
      authDTO.password // 사용자가 준 plain text
    );

    invariant(isVerified, '패스워드가 일치하지 않습니다.');
    invariant(process.env.JWT_SECRET, 'JWT 시크릿이 없습니다');

    return jwt.sign(
      {
        _id: auth._id.toString(),
        email: auth.email,
        role: auth.role
      },
      process.env.JWT_SECRET
    );
  };

  // password가 correct한지 authService에서 확인하는 함수
  async isPasswordCorrect(authDTO: AuthT) {
    // 비밀번호를  수정
    const auth = await AuthModel.findOne({ email: authDTO.email });
    invariant(auth !== null, `${authDTO.email}은 가입 내역이 없습니다.`); // 타입 가드

    // auth의 password와 db의 password를 argon2로 verify한다
    return argon2.verify(
      auth.password,
      authDTO.password
    );
  };

  async updatePassword(newAuthDTO:AuthT) {
    const isValidPassword = await this.isPasswordCorrect(newAuthDTO);

    if (isValidPassword === true) {
      const newHash = argon2.hash(newAuthDTO.password);
      AuthModel.updateOne({ password: newHash });
    }
  }
}
