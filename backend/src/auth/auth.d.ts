type Role = 'USER' | 'ADMIN'
type AuthT = {
  email: string;
  password: string;
  role: Role
};

interface IAuthService {
    register: (authDTO: AuthT)=> Promise<Types.ObjectId>;
    existUserByEmail: (email: AuthT['email'])=> Promise<boolean>;
    generateUserToken: (authDTO: Pick<AuthT, 'email' | 'password'>) => Promise<string>;
    isPasswordCorrect:(oldPassword: AuthT['password'], email: AuthT['email'])=> Promise<boolean>;
    updatePassword: (oldPassword: AuthT['password'], newAuth: Pick<AuthT, 'email' | 'password'>) => Promise<void>;
};
