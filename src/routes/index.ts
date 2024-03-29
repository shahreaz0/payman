import { Elysia } from "elysia";

import user from "./user.route";

const rootRoute = new Elysia();

rootRoute.use(user);

rootRoute.get("/", () => ({ name: "SaaS payment service" }));
rootRoute.get("/healthcheck", () => ({ status: "OK" }));

export default rootRoute;
