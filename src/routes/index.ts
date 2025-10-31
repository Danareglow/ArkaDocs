import { FastifyInstance, RouteOptions } from "fastify";
import { userRoutes } from "./user";
import { authRoutes } from "./auth";


const routes: RouteOptions[] = [
  ...authRoutes,
  ...userRoutes,

];

export const registerRoutes = (fastify: FastifyInstance) => {
  console.warn("registering routes", routes);
  routes.map((route) => {
    fastify.route(route);
  });
};
