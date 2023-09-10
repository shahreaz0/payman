import { Elysia } from "elysia";

const user = new Elysia({ prefix: "/users" });

user.get("/", (c) => {
  return {
    users: [{ name: "user 1" }, { name: "user 2" }],
  };
});

export default user;
