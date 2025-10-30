import { Label, LabelsModel } from "../../entities";

export const getLabelById = async (uuid: string): Promise<Label> => {
  const label = (await LabelsModel.findOne({ uuid })) as Label;
  return label;
};
