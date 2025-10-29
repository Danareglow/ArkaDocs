import { Message } from "./messages"
import { Schema } from "mongoose";

export const messageSchemaMongo = new Schema<Message>({
  uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
  id_message: { type: String, unique: true },
  id_document: { type: String, unique: true },
  id_user: { type: String, unique: true },
  page: { type: Number, required: false },
  coordinates: { type: Object },
  text: { type: String },
  done: { type: Boolean },
});
