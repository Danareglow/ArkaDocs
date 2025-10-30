import { Schema } from "mongoose";
import { DocumentVersion } from "./document-versions";

export const DocumentVersionSchemaMongo = new Schema<DocumentVersion>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    id_document: { type: String, required: true },
    number_version: { type: String, required: true },
    file_path_version: { type: String, required: true },
    id_autor: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

DocumentVersionSchemaMongo.methods.toJSON = function () {
  const { _id, ...documentVersion } = this.toObject();
  documentVersion.id = _id;
  return documentVersion;
};
