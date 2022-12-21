import ApplicationError from './ApplicationError';

export class ConflictError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'Conflict', 409);
  }
}
