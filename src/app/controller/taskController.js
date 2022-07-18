import { Task } from "../models/index.js";

export default class TaskController {
  static index = (req, res) => {
    Task
      .find((err, Task) => {
        res.status(200).json(Task);
      })
      .sort({ createdAt: -1 });
  };

  static store = (req, res) => {
    const data = new Task(req.body);

    data.save((err) => {
      if (err) {
        res.status(500).send({
          msg: `${err.message} - Falha na requisicao "Adicionar tarefa".`,
        });
      } else {
        res.status(201).send(data.toJSON());
      }
    });
  };

  static show = (req, res) => {
    const id = req.params.id;
    Task.findById(id, (err, Task) => {
      if (err) {
        res.status(404).send({
          msg: `${err.message} - Could not find a task with id: ${id}`,
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
          .send(`${err.message} - Task not found with id: ${id}`);
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
          .send({ msg: `${err.message} Was not able to delete task.` });
      } else {
        res.status(200).send({ msg: "produto excluido com sucesso." });
      }
    });
  };
}
