module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Funcionarios', [
			{
				nome: 'Ana Souza',
				cargo: 'caixa',
				email: 'ana@ana.com',
				endereco: 'Rua 1233, n8, bairro 00',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				cargo: 'garcom',
				email: 'marcos@marcos.com',
				endereco: 'Rua 5768, n9, bairro 09',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				cargo: 'cozinheiro',
				email: 'felipe@felipe.com',
				endereco: 'rua 4657, n67, bairro 99',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				cargo: 'cozinheiro',
				email: 'sandra@sandra.com',
				endereco: 'Rua 478558, n 88, bairro 049',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				cargo: 'garcom',
				email: 'paula@paula.com',
				endereco: 'Rua 74657, n989, bairro 445',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				cargo: 'caixa',
				email: 'sergio@sergio.com',
				endereco: 'Rua 777r4, n 488, bairro 9858',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Funcionarios', null, {})
  }
}
