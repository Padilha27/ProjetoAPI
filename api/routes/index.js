const bodyParser = require('body-parser')
const funcionarios = require('./funcionariosRoute')
const clientes = require('./clientesRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(funcionarios)
  app.use(clientes)
}