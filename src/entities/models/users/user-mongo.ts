import { Schema } from "mongoose";
import crypto from "crypto";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>({
  uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
  full_name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: {
    type: String,
    enum: ["admin", "collaborator", "reviewer", "reviewer_admin"],
    default: "collaborator",
  },
  date_creation: { type: Date, default: Date.now },
});
