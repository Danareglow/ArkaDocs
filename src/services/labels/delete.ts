import { LabelsModel } from "../../entities";

export const deleteLabel = async (_id: string): Promise<Boolean | Error> => {
  const label = await LabelsModel.findById(_id);
  if (!label) {
    return new Error("the label was not found");
  }
  await label.deleteOne();
  return true;
};
