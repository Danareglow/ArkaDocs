import { createLabelDto, LabelsModel, Label } from "../../entities";

export const createLabel = async (info: createLabelDto[]): Promise<Label[]> => {
  const Labels = await Promise.all(
    info.map(async (rec: createLabelDto) => {
      const label = new LabelsModel(rec);
      return await label.save();
    })
  );
  return Labels;
};
