import { Collection, getModel } from "../../../constants-definitions/function";
import { Message } from "./messages";
import { messageSchemaMongo } from "./messages-mongo";

export const MessagesModel = getModel<Message>(
  Collection.MESSAGES,
  messageSchemaMongo
);
