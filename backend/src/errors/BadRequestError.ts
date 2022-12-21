import ApplicationError from './ApplicationError';

export class BadRequestError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'Bad request', 400);
  }
}
