// union type
type Role = 'USER' | 'ADMIN'
// DTO
type User = {
    email: string,
    password: string,
    username: string,
    role: Role
};
interface IUserService {
    RegisterUser: (newUser: User)=> Promise<void>;
    findAll: ()=> Promise<User[]>;
    findUser: ()=> Promise<User | null> ;
    // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
    updateUser: (userInfo: Omit<User, 'role'>)=> Promise<void>;
    deleteUser: ()=> Promise<void>;
    findUserByEmail: (email: string)=> Promise<User | null>;
}
