import { z } from 'zod';
import { DEFAULT_PET_IMAGE } from './constants';

export const petIdSchema = z.string().cuid();

export const petFormSchema = z
  .object({
    name: z.string().trim().min(1, { message: 'Name is required' }).max(100),
    ownerName: z
      .string()
      .trim()
      .min(1, { message: 'Owner Name is required' })
      .max(100),
    imageUrl: z.union([
      z.literal(''),
      z.string().trim().url({ message: 'Invalid URL' }),
    ]),
    age: z.coerce.number().int().positive().max(9999),
    notes: z.union([z.literal(''), z.string().trim().max(1000)]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || DEFAULT_PET_IMAGE,
  }));

export const authSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(100),
});

export type TPetForm = z.infer<typeof petFormSchema>;
