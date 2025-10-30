import { Collection, getModel } from "../../../constants-definitions/function";
import { Label } from "./labels"
import { LabelSchemaMongo } from "./labels-mongo";


export const LabelsModel = getModel<Label>(
  Collection.LABELS,
  LabelSchemaMongo
);
