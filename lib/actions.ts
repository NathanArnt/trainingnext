import { schema } from "@/lib/schema";
import { executeAction } from "@/lib/executeAction";
import { prisma } from "./prisma";
import { hash } from 'bcrypt';

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const password = formData.get("password")
      const email = formData.get("email");
      const name = formData.get("name");
      const validatedData = schema.parse({ email, password, name });
      await prisma.user.create({
        data: {
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData.password,
        },
      });
    },
    successMessage: "Signed up successfully",
  });
};

export { signUp };