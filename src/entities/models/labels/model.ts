import { Base } from "../../common";
import { Labels } from "./labels";
import { labelsSchemaMongo } from "./labels-mongo";

export const LabelsModel = getmodel<Labels>(
  collection.LABELS,
  labelsSchemaMongo
);
