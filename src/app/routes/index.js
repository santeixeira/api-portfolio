import { json } from "express";
import products from "./productsRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({msg: 'OK!'})
  })
  app.use(json(), products)
}

export default routes;