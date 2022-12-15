import express, { Request, Response } from 'express';
import { UserService } from './user-service';

const userService = new UserService();
// user가 자기 정보를 조회함
export class UserController {
// ㅇㅇ findAll: ()=> Promise<UserDto[]>; // admin
// findUser: (authId: string)=> Promise<UserDto | null>; // user가 자신의 정보를 조회함
// // DTO에선 없지만 controller의 미들웨어 같은 걸로 email을 넣어주어야 함
// updateUser: (userInfo: Omit<UserT, 'role'>) => Promise<void>; // user가 자신의 정보를 수정하는 기능
// deleteUser: (email: UserT['email'])=> Promise<void>; // 유저가 스스로 탈퇴할 수 있는 기능
// ㅇㅇ createUser: (userInfo: CreateUserDto) => Promise<void>; // register
// findUserByEmail: (userEmail: UserT['email']) => Promise<UserDto>;
// ㅇㅇ existUserByEmail: (userEmail: UserT['email'])=> Promise<boolean>;




}
