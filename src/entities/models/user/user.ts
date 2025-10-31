import { Base } from "../../common";

export interface User extends Base {
  full_name: string;
  email: string;
  password: string;
  role: "admin" | "collaborator" | "reviewer" | "reviewer_admin";
}
