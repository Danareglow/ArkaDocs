import { RouteOptions } from "fastify";
import { deleteUser } from "../../services/user";

interface Params {
  uuid: string;
}

export const deleteUserRoute: RouteOptions = {
  method: "DELETE",
  url: "/users/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const result = await deleteUser(uuid);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
