// union type

// DTO
type UserT = {
    auth: AuthT,
    username: string,

};

type CreateUserDto = {
    username: string,
    email: string,
}

interface IUserService {
    findAll: ()=> Promise<UserT[]>;
    findUser: (authId: Types.ObjectId)=> Promise<UserT | null> ;
    // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
    updateUser: (userInfo: Omit<UserT, 'role'>) => Promise<void>;
    deleteUser: (email: UserT['email'])=> Promise<void>;
    createUser: (userInfo: CreateUserDto) => Promise<void>;}

// 유저가 유저이메일을가지고 유저 정보를 조회
// 유저가 로그인 -> 토큰 발급
// 유저가 자신의 정보 조회 -> 비밀번호를 제외
// 유저가 자신의 정보 수정 -> 패스워드 필요
// 유저가 탈퇴 가능
// 이메일을 가지고 존재하는 유저인지 판별함
// 유저가 회원가입
// 관리자가 모든 유저를 조회
// 관리자가 유저를 탈퇴시킴
// 관리자가 회원가입
// 관리자가 유저 이메일로 유저를 조회
