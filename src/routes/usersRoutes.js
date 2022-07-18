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
  .get("/tarefas/:id", TaskController.show)
  .post("/tarefas", TaskController.store)
  .put("/tarefas/:id", TaskController.update)
  .delete("/tarefas/:id", TaskController.destroy)

export default users;