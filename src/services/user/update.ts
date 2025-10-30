import { partialUserDto, User, UsersModel } from "../../entities";

export const updateUser = async (infoUser: partialUserDto): Promise<User> => {
  const user = await UsersModel.findOne({ uuid: infoUser.uuid });
  if (!user) {
    throw new Error("User not found");
  }
  const updatedUser = (await UsersModel.findOneAndUpdate(
    { uuid: infoUser.uuid },
    infoUser
  )) as User;
  return updatedUser;
};
