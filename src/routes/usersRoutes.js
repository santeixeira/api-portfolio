import { Router } from "express";
import { UsersController, TaskController } from "../app/controller/index.js";

const routes = Router();

const users = routes
  .get("/users", UsersController.index)
  .get("/users/:id", UsersController.show)
  .post("/users", UsersController.store)
  .put("/users/:id", UsersController.update)
  .delete("users/:id", UsersController.destroy)

  .get("/tarefas", TaskController.index)
  .get("/:description", TaskController.show)
  .post("/tarefas", TaskController.store)
  .put("/:description", TaskController.update)

export default users;