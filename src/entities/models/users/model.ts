import { Collection, getModel } from "../../../constants-definitions";
import { User } from "./user";
import { UserSchemaMongo } from "./user-mongo";

export const UsersModel = getModel<User>(  
    Collection.USERS,
    UserSchemaMongo
);