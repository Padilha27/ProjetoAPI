const bodyParser = require('body-parser')
const funcionarios = require('./funcionariosRoute')
const clientes = require('./clientesRoute')
const produto = require("./ProdutosRoute")

module.exports = app => {
  app.use(bodyParser.json())
  app.use(funcionarios)
  app.use(clientes)
  app.use(produto)
}