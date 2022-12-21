import { z } from 'zod';
import { createUserSchema } from '../auth/auth.zodSchema';

export const usernamesSchema = createUserSchema.shape.username.array();
export const updateSchema = z.object({
  body: createUserSchema
    .omit({
      email: true,
      password: true,
      role: true
    })
    .merge(z.object({
      oldPassword: createUserSchema.shape.password,
      newPassword: createUserSchema.shape.password
    }))
    .partial()
});
