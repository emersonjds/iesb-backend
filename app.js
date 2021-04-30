const express = require("express");
const productRouter = require("./api/routes/produtos");
const pedidosRouter = require("./api/routes/produtos");
const app = express();
const port = process.env.PORT || 4000;
const bdPort = process.env.BDB_PORT;
const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.BD_PASSWORD}:${process.env.BD_PASSWORD}@cluster0.6uvoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {
  if (!err) {
    console.log("MONGO CONECTADO COM SUCESSO");
  }
  return err;
});

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

// app.post("/example/:productId", (req, res) => {
//   const { price, name, product } = req.body;
//   const { ord, pag } = req.query;
//   const { idProduct } = req.params;
//   const { franquia, quadra } = req.headers;

//   console.log(price, name, product);

//   if (res.status(201)) {
//     res.send({ message: "Item criado com sucesso" });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});
