import { Label, LabelsModel } from "../../entities";

export const getAllLabels = async () => {
  return (await LabelsModel.find({})) as Label[];
};
