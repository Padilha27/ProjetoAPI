const { Router } = require('express')
const FuncionarioController = require('../controllers/FuncionarioController')

const router = Router()

router.get('/funcionarios', FuncionarioController.pegaTodosOsFuncionarios)
router.get('/funcionarios/:id', FuncionarioController.pegaUmFuncionario)
router.post('/funcionarios', FuncionarioController.criaFuncionario)

module.exports = router