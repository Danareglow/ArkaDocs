import { User, UsersModel } from "../../entities";

export const getAllUsers = async () => {
  return (await UsersModel.find({})) as User[];
};
