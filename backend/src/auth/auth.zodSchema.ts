import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email().trim(),
  username: z.string().trim().max(20),
  password: z.string().trim(),
  role: z.enum(['USER', 'ADMIN']),
  bio: z.string().max(100).optional(),
  imgUrl: z.string().optional()
});

export const registerSchema = z.object({
  body: createUserSchema
});

export const loginSchema = z.object({
  body: createUserSchema.pick({
    email: true,
    password: true
  })
});

export const isDuplicatedSchema = z.object({
  body: createUserSchema.pick({
    email: true,
    username: true
  }).partial()
});
