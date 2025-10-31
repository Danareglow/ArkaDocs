import { RouteOptions } from "fastify";
import { updateUser } from "../../services/user";
import { partialUserDto } from "../../entities";

interface Params {
  uuid: string;
}

export const updatedUserRoute: RouteOptions = {
  method: "PUT",
  url: "/users/:uuid",
  handler: async (request, reply) => {
    const data = request.body as partialUserDto;
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const userUpdate = await updateUser({ ...data, _id: uuid });
      reply.status(200).send(userUpdate);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
