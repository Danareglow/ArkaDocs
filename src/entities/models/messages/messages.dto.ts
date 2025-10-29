import { Message } from "./messages";

export type createMessageDto = Omit<Message, "_id" | "createdAt" | "uuid">;
export type partialMessageDto = Partial<Message>;
