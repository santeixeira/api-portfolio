import { products } from "../models/Product.js";

export default class productsController {
  static index = (req, res) => {
    products
      .find((err, products) => {
        res.status(200).json(products);
      })
      .sort({ description: -1 });
  };

  static store = (req, res) => {
    const data = new products(req.body);

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
    products.findById(id, (err, products) => {
      if (err) {
        res.status(404).send({
          msg: `${err.message} - Produto nao encontrado com o id ${id}`,
        });
      } else {
        res.status(200).send(products);
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;
    products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
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
    products.findByIdAndDelete(id, (err) => {
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
