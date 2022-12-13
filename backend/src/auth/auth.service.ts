import { model } from 'mongoose';
import { AuthSchema } from './auth.schema';

const AuthModel = model<AuthT>('auths', AuthSchema);

export class AuthService implements IAuthService {
  async register(newUser: AuthT) {
    await AuthModel.create(newUser);
  }

  async existUserByEmail(email: AuthT['email']) {
    return true;
  }
}
