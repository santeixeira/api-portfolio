import { Task } from "../models/index.js";
import {id} from "../utils/index.js"

export default class TaskController {
  static index = (req, res) => {
    Task
      .find((err, Task) => {
        res.status(200).json(Task);
      })
      .sort({ id: -1 });
  };

  static store = (req, res) => {
    const data = new Task(req.body);

    data.save((err) => {
      if (err) {
        res.status(500).send({
          msg: `${err.message} - Falha na requisicao "catalogar produto".`,
        });
      } else {
        res.status(201).send({...data.id = id}.toJSON());
      }
    });
  };

  static show = (req, res) => {
    const id = req.params.id;
    Task.findById(id, (err, Task) => {
      if (err) {
        res.status(404).send({
          msg: `${err.message} - Produto nao encontrado com o id ${id}`,
        });
      } else {
        res.status(200).send(Task);
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { $set: req.body }, (err) => {
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
    Task.findByIdAndDelete(id, (err) => {
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
