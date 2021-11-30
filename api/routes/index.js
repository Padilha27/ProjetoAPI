const bodyParser = require('body-parser')
const funcionarios = require('./funcionariosRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(funcionarios)
}