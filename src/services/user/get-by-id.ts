import { User, UsersModel } from "../../entities";

export const getUserById = async (uuid: string): Promise<User> => {
  const user = (await UsersModel.findOne({ uuid })) as User;
  return user;
};
