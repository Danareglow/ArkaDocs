import { RouteOptions } from "fastify";
import { getUserByIdRoute } from "./get-by-id";
import { deleteUserRoute } from "./delete";
import { updatedUserRoute } from "./update";
import { getAllUsersRoute } from "./list";

export const userRoutes: RouteOptions[] = [
  getAllUsersRoute,
  getUserByIdRoute, 
  deleteUserRoute,
  updatedUserRoute,
];