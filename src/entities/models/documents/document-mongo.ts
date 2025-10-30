import { Schema } from "mongoose";
import { Document } from "./document";

export const documentSchemaMongo = new Schema<Document>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    title: { type: String },
    description: { type: String, required: false },
    file_path: { type: String },
    type: { type: String, enum: ["image", "pdf", "other"] },
    state: {
      type: String,
      enum: [
        "pending",
        "in_review",
        "approved",
        "rejected",
        "needs_correction",
      ],
    },
    id_user: { type: String },
    id_labels: { type: [String], default: [] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

documentSchemaMongo.methods.toJSON = function () {
  const { _id, ...document } = this.toObject();
  document.id = _id;
  return document;
};
