import { createUserDto, User, UsersModel } from "../../entities";
import jwt from "jsonwebtoken";

type SignupResult = {
  user: User;
  token: string;
};

export const signupUser = async (
  infoUser: createUserDto
): Promise<SignupResult> => {
  const newUser = (await UsersModel.create(infoUser)) as User;

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    console.warn(
      "JWT_SECRET is not defined in environment variables — using fallback development secret"
    );
  }

  const secret = JWT_SECRET || "dev-secret";

  const token = jwt.sign(
    { uuid: newUser.uuid, email: newUser.email, role: newUser.role },
    secret,
    { expiresIn: "4h" }
  );

  return { user: newUser, token };
};
