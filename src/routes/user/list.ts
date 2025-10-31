import { RouteOptions } from "fastify";
import { getAllUsers } from "../../services/user";

export const getAllUsersRoute: RouteOptions = {
  method: "GET",
  url: "/users",
  handler: async (request, reply) => {
    try {
      const obj = await getAllUsers();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
