import { Router } from "express";
import { UsersController, InfosController } from "../controller/index.js";

const routes = Router();

const users = routes
  .get("/users", UsersController.index)
  .get("/users/:id", UsersController.show)
  .post("/users", UsersController.store)
  .put("/users/:id", UsersController.update)
  .delete("users/:id", UsersController.destroy)


  .get("/credentials", InfosController.index)
  .get("/:username", InfosController.show)
  .post("/credentials", InfosController.store)
  .put("/:username", InfosController.update)

export default users;