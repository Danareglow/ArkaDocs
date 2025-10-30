import { Collection, getModel } from "../../../constants-definitions/function";
import { Document } from "./document";
import { documentSchemaMongo } from "./document-mongo";

export const DocumentModel = getModel<Document>(
  Collection.DOCUMENTS,
  documentSchemaMongo
);
