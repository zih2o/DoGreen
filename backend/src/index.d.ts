export {};

declare global {
  namespace Express {
    export interface Request {
      context: {
        currentUser: {
          authId: string, // Auth의 ObjectId
          role: Role,
          email: string,
        }
      }
    }
  }
}
