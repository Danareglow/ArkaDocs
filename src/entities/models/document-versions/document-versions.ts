import { Base } from "../../common";

export interface DocumentVersion extends Base{
  id_document: string;
  number_version: string;
  file_path_version: string;
  id_autor: string;
}
