export {};

declare global {
  namespace Express {
    export interface Request {
      currentUserId: string;
      currentUserRole: Role;
    }
  }
}
