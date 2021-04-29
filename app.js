const express = require("express");
const productRouter = require("./api/routes/produtos");
const pedidosRouter = require("./api/routes/produtos");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/products", productRouter);
app.use("/pedidos", pedidosRouter);

app.get("/", (req, res) => {
  let preco = 30;
  let qtd = 5;
  let total = preco * qtd;
  console.log(`variavel ${total}`);
  res.send("Hello World");
});

app.post("/example/:productId", (req, res) => {
  const { price, name, product } = req.body;
  const { ord, pag } = req.query;
  const { idProduct } = req.params;
  const { franquia, quadra } = req.headers;

  console.log(price, name, product);

  if (res.status(201)) {
    res.send({ message: "Item criado com sucesso" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});
