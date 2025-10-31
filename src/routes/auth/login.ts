import { User } from "../../entities";
import { RouteOptions } from "fastify";
import { Login } from "../../services";

export const loginRoute: RouteOptions = {
  method: "POST",
  url: "/signin",
  handler: async (request, reply) => {
    const { body } = request;
    const { email, password } = body as User;
    try {
      const result = await Login({ email, password });

      // Login returns either { user, token } or an Error instance.
      if (result instanceof Error) {
        // Authentication failure: respond 401 Unauthorized with a clear message
        return reply.status(401).send({ error: result.message });
      }

      // Success: return the user and token
      return reply.status(200).send(result);
    } catch (err) {
      // Unexpected server error -> 500
      request.log.error(err);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  },
};