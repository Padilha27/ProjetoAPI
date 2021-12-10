const database = require('../models')

class FornecedorController {
  static async pegaTodosOsFornecedor(req, res){
    try {
      const todosOsFornecedor = await database.Fornecedor.findAll()
      return res.status(200).json(todosOsFornecedor)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmFornecedor(req, res) {
    const { id } = req.params
    try {
      const umFornecedor = await database.Fornecedor.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umFornecedor)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaFornecedor(req, res) {
    const novoFornecedor = req.body
    try {
      const novoFornecedorCriado = await database.Fornecedor.create(novoFornecedor)
      return res.status(200).json(novoFornecedorCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaFornecedor (req, res){
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Fornecedor.update(novasInfos, { where: { id: Number(id) }})
      const FornecedorAtualizado = await database.Fornecedor.findOne( { where: { id: Number(id) }})
      return res.status(200).json(FornecedorAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaFornecedor(req, res) {
    const { id } = req.params
    try {
      await database.Fornecedor.destroy( { where: { id: Number(id) }})
      return res.status(200).json({mensagem: ` id ${id} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
}


module.exports = FornecedorController