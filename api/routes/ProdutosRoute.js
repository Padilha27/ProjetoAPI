const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router()

router.get('/produto', ProdutoController.pegaTodosOsProduto )
router.get('/produto/:id', ProdutoController.pegaUmProduto )
router.post('/produto', ProdutoController.criaProduto )
router.put('/produto/:id', ProdutoController.atualizaProduto )
router.delete('/produto/:id', ProdutoController.apagaProduto )
module.exports = router