const express = require('express')
const app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
  let preco = 30;
  let qtd = 5;
  let total = preco * qtd;
  console.log(`variavel ${total}`)
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`)
})