import { z } from "zod";

const user = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserType = z.infer<typeof user>;
