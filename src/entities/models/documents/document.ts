import { Base } from "../../common";

export interface Document extends Base {
  title: string;
  description?: string;
  file_path: string;
  type: "image" | "pdf" | "other";
  state: "pending" | "in_review" | "approved" | "rejected" | "needs_correction";
  id_user: string;
  id_labels: string[];
}
