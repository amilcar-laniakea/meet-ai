import { z } from 'zod';

export const agentsInsertSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(100),
  instructions: z
    .string()
    .min(1, { message: 'Instructions is required' })
    .max(500)
});

export const agentsUpdateSchema = agentsInsertSchema.extend({
  id: z.string().min(1, { message: 'Id is required' })
});
