const express = require("express");

const pedidosRouter = express.Router();

pedidosRouter.get("/", (req, res, next) => {
  res.send("rota de produto");
});

pedidosRouter.delete("/:idPedido", (req, res, next) => {
  const idPedido = req.params;

  if (req.status === 204) {
    res.send("Produto deletado com sucesso");
  }
});

module.exports = pedidosRouter;
