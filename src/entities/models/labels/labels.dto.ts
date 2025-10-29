import { Label } from "./labels";

export type createLabelDto = Omit<Label, "_id" | "createdAt" | "uuid">;
export type partialLabelDto = Partial<Label>;
