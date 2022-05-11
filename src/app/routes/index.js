import { json } from "express";
import products from "./productsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({msg: 'OK!'})
  })
  app.use(json(), products, users)
}

export default routes;