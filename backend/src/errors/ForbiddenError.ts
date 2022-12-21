import ApplicationError from './ApplicationError';

export class ForbiddenError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'ForbiddenError', 403);
  }
}
