const express = require("express");
import Produto from "../models/produto";

const productRouter = express.Router();

productRouter.get("/", (req, res, next) => {
  res.send("rota de produto");
});

productRouter.post("/", (req, res, next) => {
  const produto = new Produto({
    ...req.body,
  });

  produto
    .save()
    .then((data) => {
      console.log("Produto cadastrado com sucesso", data);
    })
    .catch((err) => {
      console.log("erro no cadastro do produto", err);
    });
});

productRouter.delete("/:productId", (req, res, next) => {
  const productId = req.params;

  if (req.status === 204) {
    res.send("Produto deletado com sucesso");
  }
});

productRouter.patch('/:productId', (req, res, next) => {
  const productId = req.params;
})

module.exports = productRouter;
