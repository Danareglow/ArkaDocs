import { Document } from "./document";

export type createLabelDto = Omit<Document, "_id" | "createdAt" | "uuid">;
export type partialLabelDto = Partial<Document>;
