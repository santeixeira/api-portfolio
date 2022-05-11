import { Infos } from "../models/index.js";

export default class InfosController {
  static index = (req, res) => {
    Infos
      .find((err, Infos) => {
        res.status(200).json(Infos);
      })
      .sort({ description: -1 });
  };

  static store = (req, res) => {
    const data = new Infos(req.body);

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
    Infos.findById(id, (err, Infos) => {
      if (err) {
        res.status(404).send({
          msg: `${err.message} - Produto nao encontrado com o id ${id}`,
        });
      } else {
        res.status(200).send(Infos);
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;
    Infos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
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
    Infos.findByIdAndDelete(id, (err) => {
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
