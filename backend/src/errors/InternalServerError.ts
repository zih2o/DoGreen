import ApplicationError from './ApplicationError';

export class InternalServerError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'InternalServerError', 500);
  }
}
