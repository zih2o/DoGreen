type Role = 'USER' | 'ADMIN'
type AuthT = {
  email: string;
  password: string;
  role: Role
};

interface IAuthService {
    register: (authDTO: AuthT)=> Promise<void>;
    existUserByEmail: (email: AuthT['email'])=> Promise<boolean>;
    generateUserToken: (authDTO: AuthT) => Promise<string>;

}
