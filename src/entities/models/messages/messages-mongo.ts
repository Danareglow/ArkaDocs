import { Message } from "./messages";
import { Schema } from "mongoose";

export const MessageSchemaMongo = new Schema<Message>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    id_message: { type: String, unique: true },
    id_document: { type: String, unique: true },
    id_user: { type: String, unique: true },
    page: { type: Number, required: false },
    coordinates: { type: Object, required: false },
    text: { type: String },
    done: { type: Boolean },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

MessageSchemaMongo.methods.toJSON = function () {
  const { _id, ...message } = this.toObject();
  message.id = _id;
  return message;
};