import { z } from 'zod';

const validationSchema = z.object({
  firstName: z.string().min(1, { message: 'درست بنویس' }),
});

export default validationSchema;
