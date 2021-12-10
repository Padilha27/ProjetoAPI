const { Router } = require('express')
const FornecedorController = require('../controllers/FornecedorController')

const router = Router()

router.get('/Fornecedor', FornecedorController.pegaTodosOsFornecedor)
router.get('/Fornecedor/:id', FornecedorController.pegaUmFornecedor)
router.post('/Fornecedor', FornecedorController.criaFornecedor)
router.put('/Fornecedor/:id', FornecedorController.atualizaFornecedor)
router.delete('/Fornecedor/:id', FornecedorController.apagaFornecedor)
module.exports = router