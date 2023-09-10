import { Elysia } from "elysia";
import rootRoute from "./routes";

const app = new Elysia({ prefix: "/api/v1" });

app.on("error", (c) => {
  return {
    code: c.code,
    message: c.error.message,
  };
});

app.use(rootRoute);

app.listen(3000);

console.log(`http://${app.server?.hostname}:${app.server?.port}`);
