import { Collection, getModel } from "../../../constants-definitions/function";
import { Label } from "./labels"
import { labelSchemaMongo } from "./labels-mongo";


export const LabelsModel = getModel<Label>(
  Collection.LABELS,
  labelSchemaMongo
);
