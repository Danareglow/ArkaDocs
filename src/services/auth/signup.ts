import { createUserDto, User, UsersModel } from "../../entities";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

type SignupResult = {
  user: User;
  token: string;
};

export const signupUser = async (
  infoUser: createUserDto
): Promise<SignupResult> => {
  // Hash the user's password before saving
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(infoUser.password, saltRounds);
  const payload: createUserDto = { ...infoUser, password: hashedPassword };

  const newUser = (await UsersModel.create(payload)) as User;

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
