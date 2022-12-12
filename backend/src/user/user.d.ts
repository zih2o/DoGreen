// TODO
// eslint-disable-next-line no-shadow
enum Role {
    'USER, ADMIN'
}
// DTO
type User = {
    email: string,
    password: string,
    username: string,
    role: Role
};
interface IUserRepository {
    create: (newUser: User)=> Promise<void>;
    findAll: ()=> Promise<User[]>;
    findOne: ()=> Promise<User>;
    // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
    updateOne: (userInfo: Omit<User, 'role'>)=> Promise<void>;
    deleteOne: ()=> Promise<void>;
    findOneByEmail: (email: string)=> Promise<User>
}

interface IUserService {
    RegisterUser: (newUser: User)=> Promise<void>;
    findAll: ()=> Promise<User[]>;
    findUser: ()=> Promise<User>;
    updateUser: (userInfo: Omit<User, 'role'>)=> Promise<void>;
    deleteUser: ()=> Promise<void>;
    findUserByEmail: (email: string)=> Promise<User>;
}
