import { Router } from "express";
import { NewsController } from "../app/controller/index.js";

const routes = Router();

const news = routes
  .get("/noticias", NewsController.index)
  .get("/noticias/:id", NewsController.show)
  .post("/noticias", NewsController.store)
  .put("/noticias/:id", NewsController.update)
  .delete("noticias/:id", NewsController.destroy)

export default news;