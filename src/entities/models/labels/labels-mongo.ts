import { Schema } from "mongoose";
import { Label } from "./labels";

export const labelSchemaMongo = new Schema<Label>(
    {
        uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
        name: { type: String, required: true },
        description: { type: String, required: false },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)