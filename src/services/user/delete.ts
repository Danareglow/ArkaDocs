import { UsersModel } from "../../entities";

export const deleteUser = async (_id: string): Promise<Boolean | Error> => {
  const user = await UsersModel.findById(_id);
  if (!user) {
    return new Error("the User was not found");
  }
  await user.deleteOne();
  return true;
};
