import { Label, LabelsModel, partialLabelDto } from "../../entities";

export const updateLabel = async (
  infoLabel: partialLabelDto
): Promise<Label> => {
  const label = await LabelsModel.findOne({ uuid: infoLabel.uuid });
  if (!label) {
    throw new Error("Label not found");
  }
  const updatedLabel = (await LabelsModel.findOneAndUpdate(
    { uuid: infoLabel.uuid },
    infoLabel
  )) as Label;
  return updatedLabel;
};
