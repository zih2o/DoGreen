type AuthT = {
  email: string;
  password: string;
};

interface IAuthService {
    register: (authDTO: AuthT)=> Promise<void>;
    existUserByEmail: (email: AuthT['email'])=> Promise<boolean>;
    generateUserToken: (authDTO: AuthT) => Promise<string>;

}
