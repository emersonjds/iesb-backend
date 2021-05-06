const express = require("express");
const { collection } = require("../models/produto");
const ProductSchema = require("../models/produto");

const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {
  const data = await ProductSchema.find();
  console.log(data);

  res.send(data);
});

productRouter.post("/", (req, res, next) => {
  const { name, price, product } = req.body;

  const produto = new ProductSchema({
    name,
    price,
    product,
  });

  produto
    .save()
    .then((data) => {
      console.log("produto salvo");
      res.send({ message: "Produto cadastrado com sucesso", data });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
});

productRouter.delete("/:productId", (req, res, next) => {
  const productId = req.params;

  if (req.status === 204) {
    res.send("Produto deletado com sucesso");
  }
});

module.exports = productRouter;
