type AuthT = {
  email: string;
  password: string;
};

interface IAuthService {
    register: (authInfo: AuthT)=> Promise<void>;
    existUserByEmail: (email: AuthT['email'])=> Promise<boolean>;
}
