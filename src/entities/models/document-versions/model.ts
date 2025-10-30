import { Collection, getModel } from "../../../constants-definitions/function";
import { DocumentVersion } from "./document-versions";
import { DocumentVersionSchemaMongo } from "./document-versions-mongo";

export const DocumentVersionModel = getModel<DocumentVersion>(
    Collection.DOCUMMENTS_VERSIONS,
    DocumentVersionSchemaMongo
);