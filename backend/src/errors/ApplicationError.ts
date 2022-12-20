// TODO 이렇게살야되는지잠시고민해보기
export default class ApplicationError extends Error {
  public message: string = 'ApplicationError';

  public status: number = 500;

  constructor(message?: string, status?: number) {
    super();
    if (message != null) {
      this.message = message;
    }
    if (status != null) {
      this.status = status;
    }
  }
}
