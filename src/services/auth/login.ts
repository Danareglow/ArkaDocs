import { User, UsersModel } from "../../entities";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface LoginData {
  email: string;
  password: string;
}

type LoginResult =
  | {
      user: User;
      token: string;
    }
  | Error;

export const Login = async (data: LoginData): Promise<LoginResult> => {
  const user = (await UsersModel.findOne({ email: data.email })) as User | null;
  if (!user) {
    return new Error("El usuario no existe");
  }

  const match = await bcrypt.compare(data.password, user.password);
  if (!match) {
    return new Error("LA CONTRASEÑA ES INCORRECTA");
  }

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    console.warn(
      "JWT_SECRET is not defined in environment variables — using fallback development secret"
    );
  }
  const secret = JWT_SECRET || "dev-secret";

  const token = jwt.sign(
    { uuid: user.uuid, email: user.email, role: user.role },
    secret,
    { expiresIn: "4h" }
  );

  return { user, token };
};
