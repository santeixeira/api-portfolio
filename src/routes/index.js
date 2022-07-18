import { json } from "express";
import users from "./usersRoutes.js";
import news from "./news.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({msg: 'OK!'})
  })
  app.use(json(), users, news)
}

export default routes;