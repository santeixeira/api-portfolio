import { News } from "../models/index.js";

export default class NewsController {
  static index = (req, res) => {
    News.find((err, News) => {
      res.status(200).json(News);
    }).sort({ id: -1 });
  };

  static store = (req, res) => {
    const data = new News(req.body);

    data.save((err) => {
      if (err) {
        res.status(500).send({
          msg: `${err.message} - Falha na requisicao "adicionar noticia".`,
        });
      } else {
        res.status(201).send(data.toJSON());
      }
    });
  };

  static show = (req, res) => {
    const data = req.params.title
    News.find({title: {$regex: data, $options: 'i'}}, (err, news) => {
      if (err) {
        res.status(404).send({
          msg: `${err.message} - Noticia nao encontrado com o id ${id}`,
        });
      } else {
        res.status(200).send(news);
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;
    News.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send(`${err.message} - Noticia nao encontrado com o id ${id}`);
      } else {
        res.status(200).send({ msg: "Noticia foi alterado com sucesso" });
      }
    });
  };

  static destroy = (req, res) => {
    const id = req.params.id;
    News.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ msg: `${err.message} nao foi possivel deletar a noticia.` });
      } else {
        res.status(200).send({ msg: "Noticia excluido com sucesso." });
      }
    });
  };
}
