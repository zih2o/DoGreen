type Role = 'USER' | 'ADMIN'
type AuthT = {
  email: string;
  password: string;
  role: Role
};

interface IAuthService {
    createAuth: (authDTO: AuthT)=> Promise<AuthModel>;
    existUserByEmail: (email: AuthT['email'])=> Promise<boolean>;
    generateUserToken: (authDTO: Pick<AuthT, 'email' | 'password'>) => Promise<string>;
    isPasswordCorrect:(oldPassword: AuthT['password'], email: AuthT['email'])=> Promise<boolean>;
    updatePassword: (oldPassword: AuthT['password'], newAuth: Pick<AuthT, 'email' | 'password'>) => Promise<void>;
};
