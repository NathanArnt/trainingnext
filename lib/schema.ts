import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };