const bodyParser = require('body-parser')
const funcionarios = require('./funcionariosRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(funcionarios)
}

const fornecedor = require('./fornecedorRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(fornecedor)}