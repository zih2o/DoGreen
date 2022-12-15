import express, { Request, Response } from 'express';
import { UserService } from './user-service';

const userService = new UserService();
// 아여기다가 admin-required 
export class AdminController {

async findAll() {
}
}