import { Schema } from "mongoose";
import { Label } from "./labels";

export const LabelSchemaMongo = new Schema<Label>(
    {
        uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
        name: { type: String, required: true },
        description: { type: String, required: false },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

LabelSchemaMongo.methods.toJSON = function () {
  const { _id, ...label } = this.toObject();
  label.id = _id;
  return label;
};