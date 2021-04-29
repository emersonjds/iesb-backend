const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res, next) => {
  res.send("rota de produto");
});

productRouter.delete("/:productId", (req, res, next) => {
  const productId = req.params;

  if (req.status === 204) {
    res.send("Produto deletado com sucesso");
  }
});

module.exports = productRouter;
