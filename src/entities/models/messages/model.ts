import { Collection, getModel } from "../../../constants-definitions/function";
import { Message } from "./messages";
import { MessageSchemaMongo } from "./messages-mongo";

export const MessagesModel = getModel<Message>(
  Collection.MESSAGES,
  MessageSchemaMongo
);
