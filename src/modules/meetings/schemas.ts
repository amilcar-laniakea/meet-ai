import { z } from 'zod';

export const meetingsInsertSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(100),
  agentId: z.string().min(1, { message: 'Agent is required' }).max(500)
});

export const meetingsUpdateSchema = meetingsInsertSchema.extend({
  id: z.string().min(1, { message: 'Id is required' })
});
