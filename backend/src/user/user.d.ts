// union type
type Role = 'USER' | 'ADMIN'
// DTO
type UserT = {
    auth: AuthT,
    username: string,
    role: Role
};

type CreateUserDto = {
    username: string,
    email: string,
}
interface IUserService {
    findAll: ()=> Promise<UserT[]>;
    findUser: ()=> Promise<UserT | null> ;
    // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
    updateUser: (userInfo: Omit<UserT, 'role'>) => Promise<void>;
    deleteUser: (email: UserT['email'])=> Promise<void>;
    createUser: (userInfo: CreateUserDto) => Promise<void>;
}
