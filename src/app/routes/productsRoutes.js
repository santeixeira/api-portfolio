import { Router } from "express";
import { productController } from "../controller/index.js";

const routes = Router();

const products = routes
  .get("/products", productController.index)
  .get("/products/:id", productController.show)
  .post("/products", productController.store)
  .put("/products/:id", productController.update)
  .delete("products/:id", productController.destroy)

export default products;