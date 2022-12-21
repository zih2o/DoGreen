// union type

// DTO
type UserT = {
    auth: AuthT,
    email: string,
    username: string,
    isDeleted: boolean;
    bio: string,
    imgUrl: string
};
// 다른 인증체계랑 결합시켜야 하는 경우가 생김
// ex: social login
// 회원가입할때 필요한데이터 => 회원가입할 때 bio와 imgUrl은 고려안해도되는지?
type CreateUserDto = {
    email: string,
    username: string,
    password: string,
    role?: Role,
    bio?: string,
    imgUrl?: string
}
// SCOPE 클라한테 보여줄 수 있는(유저끼리 공유할 수 있는 Data)
type UserDto = Pick<AuthT, 'email' | 'role'>
    & Pick<UserT, 'username' | 'bio' | 'imgUrl'>;

// {
//     email: AuthT['email'],
//     role: AuthT['role'],
//     username: UserT['username'],
//     bio: UserT['bio'],
//     imgUrl: UserT['imgUrl']
// }

interface IUserService {
    findAll: ()=> Promise<UserDto[]>; // 관리자가 유저들을 조회하는 기능
    banUsers: (username: UserT['username'][]) => Promise<void>; // 관리자가 유저(들)을 밴하는 기능

    findUser: (authId: string)=> Promise<UserDto | null>; // user가 자신의 정보를 조회함
    // null오면 타입가드로 처리해주면 되지않을까 굳이 저렇게 더럽게 null도 뱉어줘야할지 모르겟음
    // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
    updateUser: (email: UserT['email'], userInfo: Partial<Omit<UserT, 'email' | 'auth' | 'isDeleted'>>) => Promise<void>; // user가 자신의 정보를 수정하는 기능+탈퇴
    register: (userInfo: CreateUserDto, auth: AuthT) => Promise<void>; // register
    findUserByEmail: (email: UserT['email']) => Promise<UserDto>; // 유저가 다른 유저의 유저네임으로 유저정보를 조회함 Url : username
    // 이미 존재하는 이메일인지 확인하는 것
    isDuplicatedEmail: (userEmail: UserT['email'])=> Promise<boolean>;
    isDuplicatedUsername: (userEmail: UserT['username'])=> Promise<boolean>;

    getInactiveUsers:()=> Promise<UserDto[] | null>;
    getActiveUsers:()=> Promise<UserDto[] | null>;
    withdraw: (email: UserT['email']) => Promise<void>;
}
