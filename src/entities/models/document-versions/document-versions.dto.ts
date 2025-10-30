import { DocumentVersion } from "./document-versions";

export type createLabelDto = Omit<DocumentVersion, "_id" | "createdAt" | "uuid">;
export type partialLabelDto = Partial<DocumentVersion>;