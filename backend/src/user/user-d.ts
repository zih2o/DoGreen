// union type

// DTO
type UserT = {
    auth: AuthT,
    email: string,
    username: string,
};
// 다른 인증체계랑 결합시켜야 하는 경우가 생김
// ex: social login
type CreateUserDto = {
    email: string,
    username: string,
}
type UserDto = {
        email: AuthT['email'],
        role: AuthT['role'],
        username: UserT['username']
}

interface IUserService {
    findAll: ()=> Promise<UserDto[]>; // admin
    findUser: (authId: string)=> Promise<UserDto | null>; // user가 자신의 정보를 조회함
    // null오면 타입가드로 처리해주면 되지않을까 굳이 저렇게 더럽게 null도 뱉어줘야할지 모르겟음
    // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
    updateUser: (userInfo: Omit<UserT, 'role'>) => Promise<void>; // user가 자신의 정보를 수정하는 기능
    deleteUser: (email: UserT['email'])=> Promise<void>; // 유저가 스스로 탈퇴할 수 있는 기능
    createUser: (userInfo: CreateUserDto) => Promise<void>; // register
    findUserByEmail: (userEmail: UserT['email']) => Promise<UserDto>;
    existUserByEmail: (userEmail: UserT['email'])=> Promise<boolean>;

}

// 유저가 유저이메일을가지고 유저 정보를 조회 ㅇㅇ
// 유저가 자신의 정보 조회 -> 비밀번호를 제외 ㅇㅇ
// 유저가 자신의 정보 수정 -> 패스워드 필요 ㅇㅇ
// 유저가 탈퇴 가능 ㅇㅇ
// 이메일을 가지고 존재하는 유저인지 판별함 ㅇㅇ
// 관리자가 모든 유저를 조회 ㅇㅇ
// 관리자가 유저를 탈퇴시킴
// 관리자가 유저 이메일로 유저를 조회 ㅇㅇ findUserByEmail로 처리
