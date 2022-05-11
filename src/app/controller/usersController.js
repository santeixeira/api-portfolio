import { Users } from "../models/index.js";

export default class UsersController {
  static index = (req, res) => {
    Users
      .find().populate('nome').exec((err, Users) => {
        res.status(200).json(Users);
      });
  };

  static store = (req, res) => {
    const data = new Users(req.body);

    data.save((err) => {
      if (err) {
        res.status(500).send({
          msg: `${err.message} - Falha na requisicao "catalogar produto".`,
        });
      } else {
        res.status(201).send(data.toJSON());
      }
    });
  };

  static show = (req, res) => {
    const id = req.params.id;
    Users.findById(id, (err, Users) => {
      if (err) {
        res.status(404).send({
          msg: `${err.message} - Produto nao encontrado com o id ${id}`,
        });
      } else {
        res.status(200).send(Users);
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;
    Users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send(`${err.message} - Produto nao encontrado com o id ${id}`);
      } else {
        res.status(200).send({ msg: "Produto foi alterado com sucesso" });
      }
    });
  };

  static destroy = (req, res) => {
    const id = req.params.id;
    Users.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ msg: `${err.message} nao foi possivel deletar o produto.` });
      } else {
        res.status(200).send({ msg: "produto excluido com sucesso." });
      }
    });
  };
}
