import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email().trim(),
  username: z.string().trim().min(2).max(15),
  password: z.string().trim().min(4).max(15),
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
  query: createUserSchema.pick({
    email: true,
    username: true
  }).partial()
});
